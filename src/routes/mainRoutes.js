import Privacy from '../pages/About/Privacy'
import HomePage from '../pages/home/HomePage'
import UserConfig from '../pages/Profile/UserConfig'
import UserProfile from '../pages/Profile/UserProfile'
import UserStatistic from '../pages/Profile/UserStatistic'
import GroupStatistic from '../pages/Group/GroupStatistic'
import GroupList from '../pages/Group/GroupList'
import GroupAdmin from '../pages/Group/GroupAdmin'
import GroupPage from '../pages/Group/GroupPage'
import SignOut from '../pages/Login/SignOut'

const mainRoutes = [
    {
        path: "/",
        exact: true,
        page: () => <HomePage />,
    },
    {
        path: "/profile/userconfig",
        exact: true,
        auth: true,
        page: () => <UserConfig />,
    },
    {
        path: "/profile/statistic",
        exact: false,
        page: () => <UserStatistic />
    },
    {
        path: "/profile",
        exact: true,
        page: () => <UserProfile />
    },
    {
        path: "/about/privacy",
        exact: true,
        page: () => <Privacy />
    },
    {
        path: "/group",
        exact: true,
        page: () => <GroupList/>
    },
    {
        path: "/group/statistic",
        exact: false,
        page: () => <GroupStatistic/>
    },
    {
        path: "/group/info/:id",
        exact: false,
        page: () => <GroupAdmin />
    },
    {
        path: "/group/settings/:name/:id",
        exact: false,
        page: () => <GroupPage/>
    },
    {
        path: "/signout",
        exact: true,
        page: () => <SignOut/>
    }
]

export default mainRoutes