import CityForm from "../components/CityForm/CityForm";
import CitiesPage from "../pages/CitiesPage/CitiesPage";

export const routes = [
    {
        path: "cities",
        element: <CitiesPage />,
    },
    {
        path: "cities/add",
        element: <CityForm />,
    },
    {
        path: "cities/update/:city",
        element: <CityForm />,
    },
]