import PercentForm from "../components/PercentForm/PercentForm";
import Percents from "../pages/Percents";


export const routes = [
    {
        path: "percents",
        element: <Percents />,
    },
    {
        path: "percents/add",
        element: <PercentForm />,
    },
    {
        path: "percents/update/:id",
        element: <PercentForm />,
    },
]