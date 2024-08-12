import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { routes as AuthRouters } from "./modules/auth/routes";
import { routes as ReportRouters } from "./modules/reports/routes";
import { routes as AgentRouters } from "./modules/agents/routes";
import { routes as UserRouters } from "./modules/users/routes";
import { routes as CoinRouters } from "./modules/coins/routes";
import { routes as InvoiceRouters } from "./modules/invoices/routes";
import { routes as OfficeRouters } from "./modules/offices/routes";
import { routes as EmployeeRouters } from "./modules/employees/routes";
import { routes as ServicesRouters } from "./modules/services/routes";
import { routes as PermissionRouters } from "./modules/permissions/routes";
import { routes as PercentsRouters } from "./modules/percents/routes";
import { routes as SettingsRouters } from "./modules/settings/routes";
import { routes as UserActiveRouters } from "./modules/userActive/routes";
import Auth from "./modules/auth/pages/AuthPage/Auth";

export const routers = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      ...ReportRouters,
      ...AgentRouters,
      ...UserRouters,
      ...CoinRouters,
      ...InvoiceRouters,
      ...OfficeRouters,
      ...EmployeeRouters,
      ...ServicesRouters,
      ...SettingsRouters,
      ...UserActiveRouters,
      ...PermissionRouters,
      ...PercentsRouters,
    ],
  },
  {
    path: "/",
    element: <Auth />,
  },
]);
