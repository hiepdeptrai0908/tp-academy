import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import configRouters from '~/config/router'

const cx = classNames.bind(styles)

function Sidebar() {
    const path = useLocation()
    const pathActive = path.pathname
    return (
        <div className={cx('sidebar')}>
            <div className={cx('category')}>Danh mục</div>
            <Link
                to={configRouters.page1}
                className={cx('category-item', pathActive === configRouters.page1 ? 'active' : '')}
            >
                Chương trình học bổng
            </Link>
            <Link
                to={configRouters.page2}
                className={cx('category-item', pathActive === configRouters.page2 ? 'active' : '')}
            >
                Du học tự túc
            </Link>
            <Link
                to={configRouters.page3}
                className={cx('category-item', pathActive === configRouters.page3 ? 'active' : '')}
            >
                Kỹ năng đặc định (特定技能)
            </Link>
            <Link
                to={configRouters.page4}
                className={cx('category-item', pathActive === configRouters.page4 ? 'active' : '')}
            >
                Du học Hàn Quốc
            </Link>
            <Link
                to={configRouters.page5}
                className={cx('category-item', pathActive === configRouters.page5 ? 'active' : '')}
            >
                Du học Đức
            </Link>
            <Link
                to={configRouters.page6}
                className={cx('category-item', pathActive === configRouters.page6 ? 'active' : '')}
            >
                Du học Canada
            </Link>
        </div>
    )
}

export default Sidebar
