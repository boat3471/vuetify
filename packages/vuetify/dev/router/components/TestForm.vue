<template>
  <div class="mx-10">
    <z-row no-gutters class="red lighten-5 mb-3">
      <z-col cols="1"><z-text-field v-bind="{...themeDense}" s outlined label="dense"></z-text-field></z-col>
      <z-col><z-text-field v-bind="{...themeDense, ...option}" s clearable label="dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...themeDense, ...option}" s clearable label="dense" :items="[1,2,3]"></z-select></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-text-field v-bind="{...theme, ...option}" s clearable label="not dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...theme, ...option}" s clearable label="not dense" :items="[1,2,3]"></z-select></z-col>
    </z-row>

    <z-row no-gutters class="yellow lighten-5 mb-3">
      <z-col cols="1"><z-text-field v-bind="{...themeDense}" m outlined label="dense"></z-text-field></z-col>
      <z-col><z-text-field v-bind="{...themeDense, ...option}" m clearable label="dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...themeDense, ...option}" m clearable label="dense" :items="[1,2,3]"></z-select></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-text-field v-bind="{...theme, ...option}" m clearable label="not dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...theme, ...option}" m clearable label="not dense" :items="[1,2,3]"></z-select></z-col>
    </z-row>

    <z-row no-gutters class="success lighten-5 mb-3">
      <z-col cols="1"><z-text-field v-bind="{...themeDense}" l outlined label="dense"></z-text-field></z-col>
      <z-col><z-text-field v-bind="{...themeDense, ...option}" l clearable label="dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...themeDense, ...option}" l clearable label="dense" :items="[1,2,3]"></z-select></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-text-field v-bind="{...theme, ...option}" l clearable label="not dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...theme, ...option}" l clearable label="not dense" :items="[1,2,3]"></z-select></z-col>
    </z-row>

    <z-row no-gutters class="blue lighten-5 mb-3">
      <z-col cols="1"><z-text-field v-bind="{...themeDense}" xl outlined label="dense"></z-text-field></z-col>
      <z-col><z-text-field v-bind="{...themeDense, ...option}" xl clearable label="dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...themeDense, ...option}" xl clearable label="dense" :items="[1,2,3]"></z-select></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-text-field v-bind="{...theme, ...option}" xl clearable label="not dense"></z-text-field></z-col>
      <z-divider vertical class="mx-3" />
      <z-col><z-select v-bind="{...theme, ...option}" xl clearable label="not dense" :items="[1,2,3]"></z-select></z-col>
    </z-row>
  </div>
</template>

<script>
  export default {
    props: {
      option: {
        type: Object,
        default () {
          return {}
        },
      },
    },
    data () {
      return {
        theme: {
          dense: false,
        },
        themeDense: {
          dense: true,
        },
      }
    },
  }
</script>
