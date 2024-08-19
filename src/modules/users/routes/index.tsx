import Users from "../pages/Users";
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage"
export const routes = [
    {
        path: "users",
        element: <Users />,
    },
    {
        path: "users/user-info",
        element: <UserInfoPage/>
    }
]