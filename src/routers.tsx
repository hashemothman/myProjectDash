import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import { routes as AuthRouters } from "./modules/auth/routes";
import { routes as ReportRouters } from "./modules/reports/routes";
import { routes as AgentRouters } from "./modules/agents/routes";
import { routes as UserRouters } from "./modules/users/routes";
import { routes as CoinRouters } from "./modules/coins/routes";
import { routes as InvoiceRouters } from "./modules/invoices/routes";
import { routes as OfficeRouters } from "./modules/offices/routes";
import { routes as EmployeeRouters } from "./modules/employees/routes";
import { routes as ServicesRouters } from "./modules/services/routes";
import { routes as SettingsRouters } from "./modules/settings/routes";

export const routers = createBrowserRouter([
    {
        path: "/basfast-dashbord",
        element: <App/>,
        children:[...AuthRouters,...ReportRouters,...AgentRouters,...UserRouters,...CoinRouters,...InvoiceRouters,...OfficeRouters,...EmployeeRouters,...ServicesRouters,...SettingsRouters],
    },
]);