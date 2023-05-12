import HomeLayout from '~/layouts/HomeLayout'

import Home from '~/pages/Home'
import Addmission from '~/pages/Addmission'
import Blog from '~/pages/Blog'
import Contact from '~/pages/Contact'

const publicRouters = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/thong-tin-tuyen-sinh', component: Addmission, layout: HomeLayout },
    { path: 'blog', component: Blog, layout: HomeLayout },
    { path: '/lien-he', component: Contact, layout: HomeLayout },
]

export default publicRouters
