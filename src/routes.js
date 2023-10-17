import Default from "layouts/dashboards/default";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";
import UpdateProduct from "layouts/ecommerce/products/update-product"

// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
import Basket from "examples/Icons/Basket";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import PrivateRoute from "components/PrivateRoute";
import AdminRoute from "components/AdminRoute";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" />,
    collapse: [
      { 
      name: "CRM",
      key: "crm", 
      route: "/dashboards/default",
      component: <PrivateRoute><CRM /></PrivateRoute> },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <Office size="12px" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component:<PrivateRoute> <ProfileOverview /></PrivateRoute>,
          },
          {
            name: "Teams",
            key: "teams",
            route: "/pages/profile/teams",
            component:<PrivateRoute><Teams /></PrivateRoute>,
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "/pages/profile/all-projects",
            component:<PrivateRoute><AllProjects /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "Reports",
            key: "reports",
            route: "/pages/users/reports",
            component:<PrivateRoute> <Reports /></PrivateRoute>,
          },
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component:<PrivateRoute> <NewUser /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <PrivateRoute><Settings /></PrivateRoute> ,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component:<PrivateRoute><Billing /></PrivateRoute>,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component:<PrivateRoute><Invoice /></PrivateRoute>,
          },
          {
            name: "Security",
            key: "security",
            route: "/pages/account/security",
            component:<PrivateRoute><Security /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "General",
            key: "general",
            route: "/pages/projects/general",
            component: <PrivateRoute><General /></PrivateRoute>,
          },
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: <PrivateRoute><Timeline /></PrivateRoute>,
          },
          {
            name: "New Project",
            key: "new-project",
            route: "/pages/projects/new-project",
            component: <PrivateRoute><NewProject /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
        component: <PrivateRoute><PricingPage /></PrivateRoute>,
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl", component: <PrivateRoute><RTL /> </PrivateRoute>},
      { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <PrivateRoute><Widgets /> </PrivateRoute>},
      { name: "Charts", key: "charts", route: "/pages/charts", component: <PrivateRoute><Charts /></PrivateRoute> },
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
        component: <PrivateRoute><SweetAlerts /></PrivateRoute>,
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
        component:<PrivateRoute> <Notifications /></PrivateRoute>,
      },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <SettingsIcon size="12px" />,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        component: <PrivateRoute><Kanban /></PrivateRoute>,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <PrivateRoute><Wizard /></PrivateRoute>,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: <PrivateRoute><DataTables /></PrivateRoute>,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <PrivateRoute><Calendar /></PrivateRoute>,
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        component: <PrivateRoute><Analytics /></PrivateRoute>,
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Basket size="12px" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
        component: <PrivateRoute><Overview /></PrivateRoute>,
      },
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "Add Product",
            key: "edit-product",
            route: "/ecommerce/products/add-product",
            component: <AdminRoute><EditProduct /></AdminRoute>,
          },
          {
            name: "Products List",
            key: "products-list",
            route: "/ecommerce/products/products-list",
            component: <PrivateRoute><ProductsList /></PrivateRoute>,
          },
          {
            name: "Update Product",
            key: "update-product",
            route: "/ecommerce/products/update-product/:productId",
            component: <PrivateRoute><UpdateProduct /></PrivateRoute>,
          },
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <PrivateRoute><NewProduct /></PrivateRoute>,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: <PrivateRoute><ProductPage /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <PrivateRoute><OrderList /></PrivateRoute>,
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: <PrivateRoute><OrderDetails /></PrivateRoute>,
          },
        ],
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
        component:<PrivateRoute> <Referral /></PrivateRoute>,
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Document size="12px" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          // {
          //   name: "Basic",
          //   key: "basic",
          //   route: "/authentication/sign-in/basic",
          //   component: <SignInBasic />,
          // },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          // {
          //   name: "Illustration",
          //   key: "illustration",
          //   route: "/authentication/sign-in/illustration",
          //   component: <SignInIllustration />,
          // },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          // {
          //   name: "Basic",
          //   key: "basic",
          //   route: "/authentication/sign-up/basic",
          //   component: <SignUpBasic />,
          // },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
          // {
          //   name: "Illustration",
          //   key: "illustration",
          //   route: "/authentication/sign-up/illustration",
          //   component: <SignUpIllustration />,
          // },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/reset-password/basic",
            component: <ResetBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/reset-password/illustration",
            component: <ResetIllustration />,
          },
        ],
      },
      {
        name: "Lock",
        key: "lock",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/lock/basic",
            component: <LockBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/lock/cover",
            component: <LockCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/lock/illustration",
            component: <LockIllustration />,
          },
        ],
      },
      {
        name: "2-Step Verification",
        key: "2-step-verification",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/verification/basic",
            component: <VerificationBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/verification/cover",
            component: <VerificationCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/verification/illustration",
            component: <VerificationIllustration />,
          },
        ],
      },
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Basic",
    key: "basic",
    icon: <SpaceShip size="12px" />,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Overview",
            key: "overview",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/overview/soft-ui-dashboard/",
          },
          {
            name: "License",
            key: "license",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/license/soft-ui-dashboard/",
          },
          {
            name: "Quick Start",
            key: "quick-start",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/quick-start/soft-ui-dashboard/",
          },
          {
            name: "Build Tools",
            key: "build-tools",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/build-tools/soft-ui-dashboard/",
          },
        ],
      },
      {
        name: "Foundation",
        key: "foundation",
        collapse: [
          {
            name: "Colors",
            key: "colors",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/colors/soft-ui-dashboard/",
          },
          {
            name: "Grid",
            key: "grid",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/grid/soft-ui-dashboard/",
          },
          {
            name: "Typography",
            key: "base-typography",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/base-typography/soft-ui-dashboard/",
          },
          {
            name: "Borders",
            key: "borders",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/borders/soft-ui-dashboard/",
          },
          {
            name: "Box Shadows",
            key: "box-shadows",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/box-shadows/soft-ui-dashboard/",
          },
          {
            name: "Functions",
            key: "functions",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/functions/soft-ui-dashboard/",
          },
          {
            name: "Routing System",
            key: "routing-system",
            href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/routing-system/soft-ui-dashboard/",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <CustomerSupport size="12px" />,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/alerts/soft-ui-dashboard/",
      },
      {
        name: "Avatar",
        key: "avatar",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/avatar/soft-ui-dashboard/",
      },
      {
        name: "Badge",
        key: "badge",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/badge/soft-ui-dashboard/",
      },
      {
        name: "Badge Dot",
        key: "badge-dot",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/badge-dot/soft-ui-dashboard/",
      },
      {
        name: "Box",
        key: "box",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/box/soft-ui-dashboard/",
      },
      {
        name: "Buttons",
        key: "buttons",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/buttons/soft-ui-dashboard/",
      },
      {
        name: "Date Picker",
        key: "date-picker",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/datepicker/soft-ui-dashboard/",
      },
      {
        name: "Dropzone",
        key: "dropzone",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/dropzone/soft-ui-dashboard/",
      },
      {
        name: "Editor",
        key: "editor",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/quill/soft-ui-dashboard/",
      },
      {
        name: "Input",
        key: "input",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/input/soft-ui-dashboard/",
      },
      {
        name: "Pagination",
        key: "pagination",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/pagination/soft-ui-dashboard/",
      },
      {
        name: "Progress",
        key: "progress",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/progress/soft-ui-dashboard/",
      },
      {
        name: "Select",
        key: "select",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/select/soft-ui-dashboard/",
      },
      {
        name: "Snackbar",
        key: "snackbar",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/snackbar/soft-ui-dashboard/",
      },
      {
        name: "Social Button",
        key: "social-button",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/social-buttons/soft-ui-dashboard/",
      },
      {
        name: "Tag Input",
        key: "tag-input",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/tag-input/soft-ui-dashboard/",
      },
      {
        name: "Typography",
        key: "typography",
        href: "https://www.creative-tim.com/learning-lab/material-ui-marketplace/typography/soft-ui-dashboard/",
      },
    ],
  },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "https://mui.com/store/items/soft-ui-pro-dashboard/",
    icon: <CreditCard size="12px" />,
    noCollapse: true,
  },
];

export default routes;
