import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";
//############################################
import LayoutDefault from "../views/layouts/default.vue";
import LayoutA from "../views/layouts/layout_a.vue";
import LayoutB from "../views/layouts/layout_b.vue";
import LayoutC from "../views/layouts/layout_c.vue";
//############################################
//admin>dashboard
import DashBoard from "../views/admin/dashboard.vue";
//############################################
//applications>calaneder
import Calaneder from "../views/applications/calender.vue";
//applications>email
import Email from "../views/applications/email.vue";
//applications>messages
import Messages from "../views/applications/messages.vue";
//applications>users
import Users from "../views/applications/users.vue";
//############################################
//docs>index
import indexDocs from "../views/docs/index.vue";
//docs>Introduction
import Introduction from "../views/docs/introduction.vue";
//docs>build
import Build from "../views/docs/build.vue";
//docs>changelog
import ChangeLog from "../views/docs/changelog.vue";
//docs>components
import Components from "../views/docs/components.vue";
//docs>fileStructure
import FileStructure from "../views/docs/fileStructure.vue";
//docs>plugins
import Plugins from "../views/docs/plugins.vue";
//docs>rtl
import RTL from "../views/docs/rtl.vue";
//docs>scripts
import Scripts from "../views/docs/scripts.vue";
//############################################
//extra>auth>error404
import Err404 from "../views/extra/auth/error404.vue";
//extra>auth>error505
import Err505 from "../views/extra/auth/error505.vue";
//extra>auth>forgotPassword
import ForgotPassword from "../views/extra/auth/forgotPassword.vue";
//extra>auth>lockMeScreen
import LockMeScreen from "../views/extra/auth/lockMeScreen.vue";
//extra>auth>siginin
import SignIn from "../views/extra/auth/signIn.vue";
//extra>auth>siginUp
import SiginUp from "../views/extra/auth/signUp.vue";
//############################################
//extra>pages>blackView
import BlankView from "../views/extra/pages/BlankView.vue";
//extra>pages>faq
import FAQ from "../views/extra/pages/FAQ.vue";
//extra>pages>innvoice
import Innvoice from "../views/extra/pages/innovice.vue";
//extra>pages>price
import Price from "../views/extra/pages/price.vue";
//extra>pages>profile
import Profile from "../views/extra/pages/profile.vue";
//extra>pages>search
import Search from "../views/extra/pages/search.vue";
//extra>pages>setting
import Setting from "../views/extra/pages/setting.vue";
//############################################
//music
//############################################
//video
//############################################
//uielements>apesCharts
import ApesCharts from "../views/uiElements/charts/apexCharts.vue";
//uielements>chatist
import Chartist from "../views/uiElements/charts/chartist.vue";
//uielements>chartsjs
import ChartsJs from "../views/uiElements/charts/chartjs.vue";
//############################################
//uielements>components>alerts
import Alerts from "../views/uiElements/components/alerts.vue";
//uielements>components>badge
import Badge from "../views/uiElements/components/badge.vue";
//uielements>components>button
import Button from "../views/uiElements/components/button.vue";
//uielements>components>card
import Card from "../views/uiElements/components/card.vue";
//uielements>components>carousel
import Carousel from "../views/uiElements/components/carousel.vue";
//uielements>components>color
import Color from "../views/uiElements/components/color.vue";
//uielements>components>DropDown
import DropDown from "../views/uiElements/components/dropdown.vue";
//uielements>components>grid
import Grid from "../views/uiElements/components/grid.vue";
//uielements>components>icon
import Icon from "../views/uiElements/components/icon.vue";
//uielements>components>list
import List from "../views/uiElements/components/list.vue";
//uielements>components>modal
import Modal from "../views/uiElements/components/modal.vue";
//uielements>components>navbar
import NavBar from "../views/uiElements/components/navbar.vue";
//uielements>components>sidenav
import SideNav from "../views/uiElements/components/sidenav.vue";
//uielements>components>tabCollpase
import TabCollpase from "../views/uiElements/components/tabCollpase.vue";
//uielements>components>timeline
import TimeLine from "../views/uiElements/components/timeline.vue";
//uielements>components>toolTipPoppver
import ToolTipPoppver from "../views/uiElements/components/toolTipPoppver.vue";
//############################################
//uielements>forms>dataPicker
import FormDataPicker from "../views/uiElements/forms/datePicker.vue";
//uielements>forms>editor
import FormEditor from "../views/uiElements/forms/editor.vue";
//uielements>forms>fileUpload
import FormFileUpload from "../views/uiElements/forms/fileUpload.vue";
//uielements>forms>formElement
import FormElement from "../views/uiElements/forms/formElement.vue";
//uielements>forms>formLayout
import FormLayout from "../views/uiElements/forms/formLayout.vue";
//uielements>forms>formValidation
import FormValidation from "../views/uiElements/forms/formValidation.vue";
//uielements>forms>select
import FormSelect from "../views/uiElements/forms/select.vue";
//uielements>forms>wizard
import FormWizard from "../views/uiElements/forms/wizard.vue";
//############################################
//uielements>plugins>infiniteScroll
import InfiniteScrollPlugin from "../views/uiElements/plugins/infiniteScroll.vue";
//uielements>plugins>sortable
import SortablePlugin from "../views/uiElements/plugins/sortable.vue";
//uielements>plugins>vectorMap
import VectorMapPlugin from "../views/uiElements/plugins/vectorMap.vue";
//############################################
//uielements>tables>custom
import CustomTable from "../views/uiElements/tables/custom.vue";
//uielements>tables>dataTables
import DataTable from "../views/uiElements/tables/dataTables.vue";
//uielements>tables>styles
import StylesTable from "../views/uiElements/tables/style.vue";
//############################################
const CommonViews = [
    //admin
    {
        path: "DashBoard",
        component: DashBoard,
    },
    //applications
    {
        path: "Calaneder",
        component: Calaneder,
    },
    {
        path: "Messages",
        component: Messages,
    },
    {
        path: "Email",
        component: Email,
    },
    {
        path: "Users",
        component: Users,
    },
    //uielements
    {
        path: "ApesCharts",
        component: ApesCharts,
    },
    {
        path: "Chartist",
        component: Chartist,
    },
    {
        path: "ChartsJs",
        component: ChartsJs,
    },
    {
        path: "Alerts",
        component: Alerts,
    },
    {
        path: "Badge",
        component: Badge,
    },
    {
        path: "Button",
        component: Button,
    },
    {
        path: "Card",
        component: Card,
    },
    {
        path: "Carousel",
        component: Carousel,
    },
    {
        path: "Color",
        component: Color,
    },
    {
        path: "DropDown",
        component: DropDown,
    },
    {
        path: "Grid",
        component: Grid,
    },
    {
        path: "Icon",
        component: Icon,
    },
    {
        path: "List",
        component: List,
    },
    {
        path: "Modal",
        component: Modal,
    },
    {
        path: "NavBar",
        component: NavBar,
    },
    {
        path: "SideNav",
        component: SideNav,
    },
    {
        path: "TabCollpase",
        component: TabCollpase,
    },
    {
        path: "TimeLine",
        component: TimeLine,
    },
    {
        path: "ToolTipPoppver",
        component: ToolTipPoppver,
    },
    {
        path: "FormDataPicker",
        component: FormDataPicker,
    },
    {
        path: "FormEditor",
        component: FormEditor,
    },
    {
        path: "FormFileUpload",
        component: FormFileUpload,
    },
    {
        path: "FormElement",
        component: FormElement,
    },
    {
        path: "FormLayout",
        component: FormLayout,
    },
    {
        path: "FormValidation",
        component: FormValidation,
    },
    {
        path: "FormSelect",
        component: FormSelect,
    },
    {
        path: "FormWizard",
        component: FormWizard,
    },
    {
        path: "InfiniteScrollPlugin",
        component: InfiniteScrollPlugin,
    },
    {
        path: "SortablePlugin",
        component: SortablePlugin,
    },
    {
        path: "VectorMapPlugin",
        component: VectorMapPlugin,
    },
    {
        path: "CustomTable",
        component: CustomTable,
    },
    {
        path: "DataTable",
        component: DataTable,
    },
    {
        path: "StylesTable",
        component: StylesTable,
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        //index
        {
            path: "/",
            name: "index",
            component: Index,
        },
        //layouts
        {
            path: "/LayoutDefault",
            name: "LayoutDefault",
            component: LayoutDefault,
            children: CommonViews,
        },
        {
            path: "/LayoutA",
            name: "LayoutA",
            component: LayoutA,
            children: CommonViews,
        },
        {
            path: "/LayoutB",
            name: "LayoutB",
            component: LayoutB,
            children: CommonViews,
        },
        {
            path: "/LayoutC",
            name: "LayoutC",
            component: LayoutC,
            children: CommonViews,
        },

        //docs
        {
            path: "/indexDocs",
            name: "indexDocs",
            component: indexDocs,
            children: [{
                    path: "Build",
                    component: Build,
                },
                {
                    path: "Introduction",
                    component: Introduction,
                },
                {
                    path: "ChangeLog",
                    component: ChangeLog,
                },
                {
                    path: "Components",
                    component: Components,
                },
                {
                    path: "FileStructure",
                    component: FileStructure,
                },
                {
                    path: "Plugins",
                    component: Plugins,
                },
                {
                    path: "RTL",
                    component: RTL,
                },
                {
                    path: "Scripts",
                    component: Scripts,
                },
            ],
        },
        //extra
        {
            path: "/Err404",
            name: "Err404",
            component: Err404,
        },
        {
            path: "/Err505",
            name: "Err505",
            component: Err505,
        },
        {
            path: "/ForgotPassword",
            name: "ForgotPassword",
            component: ForgotPassword,
        },
        {
            path: "/LockMeScreen",
            name: "LockMeScreen",
            component: LockMeScreen,
        },
        {
            path: "/SignIn",
            name: "SignIn",
            component: SignIn,
        },
        {
            path: "/SiginUp",
            name: "SiginUp",
            component: SiginUp,
        },
        {
            path: "/BlankView",
            name: "BlankView",
            component: BlankView,
        },
        {
            path: "/FAQ",
            name: "FAQ",
            component: FAQ,
        },
        {
            path: "/Innvoice",
            name: "Innvoice",
            component: Innvoice,
        },
        {
            path: "/Price",
            name: "Price",
            component: Price,
        },
        {
            path: "/Profile",
            name: "Profile",
            component: Profile,
        },
        {
            path: "/Search",
            name: "Search",
            component: Search,
        },
        {
            path: "/Setting",
            name: "Setting",
            component: Setting,
        },
        //music
        //video
    ],
});

export default router;