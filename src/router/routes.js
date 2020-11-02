import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const GlobalDetails = () => import("@/pages/GlobalDetails.vue");
const LocalInformation = () => import("@/pages/LocalInformation.vue");
const LocalhospitalDetails = () => import("@/pages/LocalhospitalDetails.vue");
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        meat: {
         label : "dashboard"
        },
        component: {
          render(c){
            return c('router-view')
          }
        },
        children:[
          {
            path:'',
            name:'Dashboard',
            component: Dashboard
          },
          {
            path:':Slug',
            meta:{
              label:'GlobalDetails'
            },
            name :'GlobalDetails',
            component: GlobalDetails
          }
        ]
      },
      // {
      //   path: "localInformation",
      //   name: "local Information",
      //   component: LocalInformation
      // },
      {
        path: "localInformation",
        meat: {
          label : "local Information"
         },
         component: {
          render(c){
            return c('router-view')
          }
        },
        children:[
          {
            path:'',
            name:'localInformation',
            component: LocalInformation
          },
          {
            path:':id',
            meta:{
              label:'LocalhospitalDetails'
            },
            name :'LocalhospitalDetails',
            component: LocalhospitalDetails
          }
        ]
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
   
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
