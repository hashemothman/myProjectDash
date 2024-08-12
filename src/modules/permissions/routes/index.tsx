import PermissionForm from "../components/PermissionForm/PermissionForm";
import Permissions from "../pages/Permissions";


export const routes = [
    {
        path: "permissions",
        element: <Permissions />,
    },
    {
        path: "permissions/add",
        element: <PermissionForm />,
    },
    {
        path: "permissions/update/:id",
        element: <PermissionForm />,
    },
]