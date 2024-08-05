import OfficeForm from "../components/OfficeForm/OfficeForm";
import Offices from "../pages/Offices/Offices";

export const routes = [
    {
        path: "offices",
        element: <Offices />,
    },
    {
        path: "offices/add",
        element: <OfficeForm />,
    },
    {
        path: "offices/update/:id",
        element: <OfficeForm />,
    },
]