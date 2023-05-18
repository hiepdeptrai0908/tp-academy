import HomeLayout from '~/layouts/HomeLayout'
import SidebarLayout from '~/layouts/SidebarLayout'

import Home from '~/pages/Home'
import Page1 from '~/pages/addmission/Page1'
import Page2 from '~/pages/addmission/Page2'
import Page3 from '~/pages/addmission/Page3'
import Page4 from '~/pages/addmission/Page4'
import Blog from '~/pages/Blog'
import Contact from '~/pages/Contact'
import configRouters from '~/config/router'
import AddMissionDetail from '~/pages/addmission/AddMissionDetail'

const publicRouters = [
    { path: configRouters.home, component: Home, layout: HomeLayout },
    { path: configRouters.page1, component: Page1, layout: SidebarLayout },
    { path: configRouters.page2, component: Page2, layout: SidebarLayout },
    { path: configRouters.page3, component: Page3, layout: SidebarLayout },
    { path: configRouters.page4, component: Page4, layout: SidebarLayout },
    { path: configRouters.addMissionDetail, component: AddMissionDetail, layout: SidebarLayout },
    { path: configRouters.blog, component: Blog, layout: HomeLayout },
    { path: configRouters.contact, component: Contact, layout: HomeLayout },
]

export default publicRouters
