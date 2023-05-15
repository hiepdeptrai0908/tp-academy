import classNames from 'classnames/bind'
import styles from './MenuNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button'
import configRouters from '~/config/router'
import { useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)
function MenuNav() {
    const path = useLocation()
    const pathActive = path.pathname

    return (
        <div className={cx('menu')}>
            <div className={cx('menu-item')}>
                <Button
                    to={configRouters.home}
                    className={cx('item', pathActive === configRouters.home ? 'active' : '')}
                    textWhite
                    leftIcon={<FontAwesomeIcon icon={faHouse} />}
                >
                    Trang chủ
                </Button>
            </div>
            <div className={cx('menu-item')}>
                <Button
                    to={configRouters.page1}
                    className={cx('item', pathActive.includes(configRouters.addMission) ? 'active' : '')}
                    textWhite
                    leftIcon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    Thông tin tuyển sinh
                </Button>
            </div>
            <div className={cx('menu-item')}>
                <Button
                    to={configRouters.blog}
                    className={cx('item', pathActive === configRouters.blog ? 'active' : '')}
                    textWhite
                    leftIcon={<FontAwesomeIcon icon={faBlog} />}
                >
                    Blog
                </Button>
            </div>
            <div to={configRouters.contact} className={cx('menu-item')}>
                <Button
                    navLink
                    to={configRouters.contact}
                    className={cx('item', pathActive === configRouters.contact ? 'active' : '')}
                    textWhite
                    leftIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 96 960 960" width="2rem">
                            <path
                                fill="currentColor"
                                d="M660 976v-86.667Q606 872 568.5 831T523 736h61q10 44 44 72t82 28h120q20.833 0 35.417 14.583Q880 865.167 880 886v90H660Zm109.956-195Q739 781 717 758.956q-22-22.045-22-53Q695 675 717.044 653q22.045-22 53-22Q801 631 823 653.044q22 22.045 22 53Q845 737 822.956 759q-22.045 22-53 22ZM390 636q0-126 87-213t213-87v60q-101 0-170.5 69.5T450 636h-60Zm120 0q0-75 52.65-127.5T690 456v60q-50 0-85 35t-35 85h-60ZM80 521v-90q0-20.833 15-35.417Q110 381 130 381h120q48 0 82-28t44-72h61q-8 54-45.5 95T300 434.333V521H80Zm109.956-195Q159 326 137 303.956q-22-22.045-22-53Q115 220 137.044 198q22.045-22 53-22Q221 176 243 198.044q22 22.045 22 53Q265 282 242.956 304q-22.045 22-53 22Z"
                            />
                        </svg>
                    }
                >
                    Liên hệ
                </Button>
            </div>
        </div>
    )
}

export default MenuNav
