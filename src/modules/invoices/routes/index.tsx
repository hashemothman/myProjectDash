import InvoiceForm from "../pages/InvoiceForm/InvoiceForm";
import Invoices from "../pages/Invoices/Invoices";

export const routes = [
    {
        path: "invoices",
        element: <Invoices />,
    },
    {
        path: "invoices/add",
        element: <InvoiceForm />,
    },
]