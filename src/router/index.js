import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "../views/dashboard/layout/DashboardLayout.vue";

// Page Headers
import DashboardHeader from "../views/dashboard/dashboard/DashboardHeader.vue";
import DefaultHeader from "../views/dashboard/headers/DefaultHeader";

// GeneralViews
import NotFound from "../views/generalViews/NotFoundPage.vue";

// Dashboard pages
import Dashboard from "../views/dashboard/dashboard/Vnud-Dashboard.vue";

// Tables Pages
import RegularTables from "../views/dashboard/tables/RegularTables.vue";
import ExtendedTables from "../views/dashboard/tables/ExtendedTables.vue";
//import ExtendedTables1 from "../views/dashboard/tables/New/ExtendedTables_1.vue";

import Table1 from "../views/dashboard/tables/Table1.vue";
import Table2 from "../views/dashboard/tables/Table2.vue";

let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables, header: DefaultHeader },
    },
    {
      path: "extended",
      name: "Extended Tables",
      components: { default: ExtendedTables, header: DefaultHeader },
    },
    {
      path: "table1",
      name: "Table1",
      components: { default: Table1, header: DefaultHeader },
    },
    {
      path: "table2",
      name: "Table2",
      components: { default: Table2, header: DefaultHeader },
    }
  ],
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
  },
  tablesMenu,
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    name: "Dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: { default: Dashboard, header: DashboardHeader },
      }
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
