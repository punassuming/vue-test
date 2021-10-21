import 'mutationobserver-shim'

import Vue from 'vue'

import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Table from '@/views/Table.vue'
import Plot from '@/views/Plot.vue'

import {TabulatorFull as Tabulator} from 'tabulator-tables'

import  "tabulator-tables/dist/css/tabulator.min.css";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/plot',
    name: 'Plot',
    component:Plot
  },

  {
    path: '/about',
    name: 'About',
    component:About
  }
]


import VueRouter from 'vue-router'

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Setup the router
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.component('example', {
  data: function () {
    return {
      tabulator: null, //variable to hold your table
      tableData: [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
        { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
      ],
      tableColumn: [ //Define Table Columns
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age",  formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", sorter: "date" },
      ]
    }
  },
  watch:{
    //update table if data changes
    tableData:{
      handler: function (newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true,
    }
  },
  mounted(){
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      columns: this.tableColumn, //define table columns
      reactiveData:true, //enable data reactivity
    });
  },
  template: '<div ref="table"></div>' //create table holder element
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
