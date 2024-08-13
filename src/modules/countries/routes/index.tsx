import CountryForm from "../components/CountryForm/CountryForm";
import CountriesPage from "../pages/CountriesPage/CountriesPage";

export const routes = [
    {
        path: "countries",
        element: <CountriesPage />,
    },
    {
        path: "countries/add",
        element: <CountryForm />,
    },
    {
        path: "countries/update/:country",
        element: <CountryForm />,
    },
]