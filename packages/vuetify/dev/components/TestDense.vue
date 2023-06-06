<template>
  <div>
    <z-row
      v-if="false"
      no-gutters
      justify="center"
      align="center"
    >
      <z-col>
        <z-alert type="success">asdad</z-alert>
        <z-alert
          type="warning"
          dense="false"
        >
          asdad
        </z-alert>
      </z-col>
      <z-col>
        <z-app-bar color="#6A76AB">appBar</z-app-bar>
        <z-app-bar
          color="deep-purple accent-4"
          dense="false"
        >
          appBar
        </z-app-bar>
      </z-col>
      <z-col
        cols="auto"
        class="d-flex flex-column"
      >
        <z-btn-toggle>
          <z-btn xs>btn1</z-btn>
          <z-btn xs>btn2</z-btn>
        </z-btn-toggle>
        <z-btn-toggle dense="false">
          <z-btn xs>btn1</z-btn>
          <z-btn xs>btn2</z-btn>
        </z-btn-toggle>
      </z-col>
    </z-row>
    <z-row
      v-if="false"
      no-gutters
      justify="center"
      align="center"
    >
      <z-col cols="auto">
        <z-checkbox></z-checkbox>
        <z-checkbox dense="false"></z-checkbox>
      </z-col>
      <z-col>
        <z-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        />
      </z-col>
      <z-col>
        <z-simple-table fixed-header>
          <template>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </z-simple-table>
      </z-col>
    </z-row>
    <z-row
      v-if="false"
      no-gutters
      justify="center"
      align="center"
    >
      <z-col cols="auto">
        <z-icon>mdi-home</z-icon>
        <z-icon dense="false">mdi-home</z-icon>
      </z-col>
      <z-col>
        <z-text-field />
        <z-text-field dense="false"/>
        <z-text-field outlined />
        <z-text-field
          outlined
          l
          dense
        />
      </z-col>
      <z-col>
        <z-list>
          <z-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <z-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <z-list-item-icon>
                <z-icon v-text="item.icon"></z-icon>
              </z-list-item-icon>
              <z-list-item-content>
                <z-list-item-title v-text="item.text"></z-list-item-title>
              </z-list-item-content>
            </z-list-item>
          </z-list-item-group>
        </z-list>
      </z-col>
    </z-row>
    <z-row
      v-if="false"
      no-gutters
      justify="center"
      align="center"
    >
      <z-col cols="auto">
        <z-rating></z-rating>
        <z-rating dense="false"></z-rating>
      </z-col>
      <z-col>
        <z-select
          :items="['a', 'b', 'c']"
        />
        <z-select
          dense="false"
          :items="['a', 'b', 'c']"
        />
        <z-select
          outlined
          xl
          :items="['a', 'b', 'c']"
        />
        <z-select
          outlined
          dense="false"
          :items="['a', 'b', 'c']"
        />
      </z-col>
      <z-col>
      </z-col>
    </z-row>
    <z-row
      no-gutters
      justify="center"
      align="center"
    >
      <z-col cols="auto">
      </z-col>
      <z-col>
        <z-treeview :items="treeItems"></z-treeview>
      </z-col>
      <z-col>
        <z-treeview
          dense="false"
          :items="treeItems"
        ></z-treeview>
      </z-col>
    </z-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
        selectedItem: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
        treeItems: [
          {
            id: 1,
            name: 'Applications :',
            children: [
              { id: 2, name: 'Calendar : app' },
              { id: 3, name: 'Chrome : app' },
              { id: 4, name: 'Webstorm : app' },
            ],
          },
          {
            id: 5,
            name: 'Documents :',
            children: [
              {
                id: 6,
                name: 'vuetify :',
                children: [
                  {
                    id: 7,
                    name: 'src :',
                    children: [
                      { id: 8, name: 'index : ts' },
                      { id: 9, name: 'bootstrap : ts' },
                    ],
                  },
                ],
              },
              {
                id: 10,
                name: 'material2 :',
                children: [
                  {
                    id: 11,
                    name: 'src :',
                    children: [
                      { id: 12, name: 'v-btn : ts' },
                      { id: 13, name: 'v-card : ts' },
                      { id: 14, name: 'v-window : ts' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            name: 'Downloads :',
            children: [
              { id: 16, name: 'October : pdf' },
              { id: 17, name: 'November : pdf' },
              { id: 18, name: 'Tutorial : html' },
            ],
          },
          {
            id: 19,
            name: 'Videos :',
            children: [
              {
                id: 20,
                name: 'Tutorials :',
                children: [
                  { id: 21, name: 'Basic layouts : mp4' },
                  { id: 22, name: 'Advanced techniques : mp4' },
                  { id: 23, name: 'All about app : dir' },
                ],
              },
              { id: 24, name: 'Intro : mov' },
              { id: 25, name: 'Conference introduction : avi' },
            ],
          },
        ],
      }
    },
  }
</script>
