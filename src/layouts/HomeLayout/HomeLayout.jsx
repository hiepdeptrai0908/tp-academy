import classNames from 'classnames/bind'
import styles from './HomeLayout.module.scss'

import Header from '~/layouts/components/Header'
import Navigation from '~/layouts/components/Navigation'
import Footer from '~/layouts/components/Footer'

const cx = classNames.bind(styles)

function HomeLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation className={cx('navigation')} />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default HomeLayout
