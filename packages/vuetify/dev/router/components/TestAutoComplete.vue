<template>
  <z-card
    class="ma-3"
    outlined
  >
    <z-row
      no-gutters
      justify="start"
      align="start"
    >
      <z-col
        v-for="size in sizes"
        :key="size"
      >
        <z-row
          v-for="(mode, index) in modes"
          :key="index"
          no-gutters
          style="min-height: 60px"
          justify="start"
          align="start"
        >
          <z-col>
            <z-autocomplete
              v-bind="{[size]: true, ...mode}"
              multiple
              :items="items"
            />
          </z-col>
          <z-divider
            vertical
            class="mx-2"
          />
          <z-col>
            <z-select
              v-bind="{[size]: true, ...mode}"
              :items="items"
            />
          </z-col>
          <z-divider
            vertical
            class="mx-2"
          />
        </z-row>
      </z-col>
    </z-row>
    <z-row
      no-gutters
      justify="center"
      align="center"
    >
      <z-col>z-autocomplete(xs)</z-col>
      <z-col>z-select(xs)</z-col>
      <z-col>z-autocomplete(s)</z-col>
      <z-col>z-select(s)</z-col>
      <z-col>z-autocomplete(m)</z-col>
      <z-col>z-select(m)</z-col>
      <z-col>z-autocomplete(l)</z-col>
      <z-col>z-select(l)</z-col>
      <z-col>z-autocomplete(xl)</z-col>
      <z-col>z-select(xl)</z-col>
    </z-row>
  </z-card>
</template>

<script>
  export default {
    data () {
      return {
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        modes: [
          { },
          { dense: true },
          { filled: true },
          { filled: true, dense: true },
          { outlined: true },
          { outlined: true, dense: true },
          // { outlined: true, dense: true, chips: true },
          { solo: true },
          { solo: true, dense: true },
          { soloInverted: true },
          { soloInverted: true, dense: true },
        ],
        items: ['foo', 'bar', 'fizz', 'buzz'],
      }
    },
  }
</script>
