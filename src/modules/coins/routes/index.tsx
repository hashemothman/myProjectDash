import CoinForm from "../components/CoinForm/CoinForm";
import Coins from "../pages/Coins";

export const routes = [
    {
        path: "coins",
        element: <Coins />,
    },
    {
        path: "coins/add",
        element: <CoinForm />,
    },
    {
        path: "coins/update/:id",
        element: <CoinForm />,
    },
]