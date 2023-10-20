import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      { name: "CRM", key: "crm", route: "/dashboards/default" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <Office size="12px" color="white" />,
    collapse: [
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
      {
        name: "User List",
        key: "user-list",
        route: "/pages/users/user-list",
      },
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/pages/profile/profile-overview",
      },
      {
        name: "Teams",
        key: "teams",
        route: "/pages/profile/teams",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/pages/profile/all-projects",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
      },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <CustomerSupport size="12px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
      {
        name: "Security",
        key: "security",
        route: "/pages/account/security",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <Cube size="12px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
      {
        name: "New Project",
        key: "new-project",
        route: "/pages/projects/new-project",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <Document size="12px" color="white" />,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Order Details",
        key: "order-details",
        route: "/ecommerce/orders/order-details",
      },
    ],
  },
  {
    name: "General",
    key: "general",
    icon: <Cube size="12px" color="white" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
      },
    ],
  },
  {
    name: "Products",
    key: "products",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Add Product",
        key: "edit-product",
        route: "/ecommerce/products/add-product",
      },
      {
        name: "Products List",
        key: "products-list",
        route: "/ecommerce/products/products-list",
      },
      {
        name: "New Product",
        key: "new-product",
        route: "/ecommerce/products/new-product",
      },
      {
        name: "Product Page",
        key: "product-page",
        route: "/ecommerce/products/product-page",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    collapse: [
      // {
      //   name: "Basic",
      //   key: "basic",
      //   route: "/authentication/sign-in/basic",
      // },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      // {
      //   name: "Illustration",
      //   key: "illustration",
      //   route: "/authentication/sign-in/illustration",
      // },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-up/illustration",
      },
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
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/reset-password/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/reset-password/illustration",
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
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/lock/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/lock/illustration",
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
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/verification/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/verification/illustration",
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
      },
      {
        name: "Error 500",
        key: "error-500",
        route: "/authentication/error/500",
      },
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "File Upload",
        key: "file-upload",
        route: "/applications/fileupload",
        icon: "table_view",
      },
      {
        name: "File Manager",
        key: "file-manger",
        route: "/applications/filemanger",
        icon: "table_view",
        
      },
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        icon: "apps",
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        icon: "badge",
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        icon: "table_view",
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        icon: "today",
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        icon: "assessment",
      },
    ],
  },
 
];

export default pageRoutes;
