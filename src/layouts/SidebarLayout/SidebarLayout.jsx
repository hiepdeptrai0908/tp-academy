import classNames from 'classnames/bind'
import styles from './SidebarLayout.module.scss'

import Header from '~/layouts/components/Header'
import Navigation from '~/layouts/components/Navigation'
import Footer from '~/layouts/components/Footer'
import Sidebar from '../components/Sidebar'

const cx = classNames.bind(styles)

function SidebarLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation className={cx('navigation')} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default SidebarLayout
