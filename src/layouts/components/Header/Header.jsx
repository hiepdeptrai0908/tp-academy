import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
    faBars,
    faPhone,
    faAddressCard,
    faBlog,
    faGraduationCap,
    faHouse,
    faXmark,
    faX,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '~/components/Button'
import images from '~/assets/images'
import configRouters from '~/config/router'

const cx = classNames.bind(styles)

function Header() {
    const [client, setClient] = useState(document.body.clientWidth <= 740 ? 'mobile' : 'destop')
    const [isClickBar, setIsClickBar] = useState(false)
    const path = useLocation()
    const pathActive = path.pathname

    let barClasses

    if (isClickBar) {
        barClasses = cx('menu', 'show')
    } else {
        barClasses = cx('menu', 'hidden')
    }

    const menuRef = useRef()

    window.addEventListener('resize', (e) => {
        if (document.body.clientWidth <= 740) {
            setClient('mobile')
        } else {
            setClient('destop')
        }
    })

    const handleClickMenu = () => {
        if (isClickBar) {
            setIsClickBar(false)
        } else {
            setIsClickBar(true)
        }
    }

    const handleClickItem = () => {
        setIsClickBar(!isClickBar)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('logo')} src={images.logoFullRight} alt="Logo" />
                {client === 'destop' && (
                    <Button
                        className={cx('phone')}
                        href="tel:07044781997"
                        base
                        border
                        leftIcon={<FontAwesomeIcon icon={faPhone} />}
                    >
                        07044781997
                    </Button>
                )}
                {client === 'mobile' && (
                    <div className={cx('mobile-menu')}>
                        <Button onClick={handleClickMenu} className={cx('menu-bar')} base border>
                            <FontAwesomeIcon icon={!isClickBar ? faBars : faX} />
                        </Button>
                        <div ref={menuRef} className={barClasses}>
                            <div className={cx('menu-item')}>
                                <Button
                                    navLink
                                    to={configRouters.home}
                                    className={cx('item', pathActive === configRouters.home ? 'active' : '')}
                                    textWhite
                                    base
                                    full
                                    leftIcon={<FontAwesomeIcon icon={faHouse} />}
                                    onClick={handleClickItem}
                                >
                                    Trang chủ
                                </Button>
                            </div>
                            <div className={cx('menu-item')}>
                                <Button
                                    navLink
                                    to={configRouters.addMission}
                                    className={cx('item', pathActive === configRouters.addMission ? 'active' : '')}
                                    textWhite
                                    base
                                    full
                                    leftIcon={<FontAwesomeIcon icon={faGraduationCap} />}
                                    onClick={handleClickItem}
                                >
                                    Thông tin tuyển sinh
                                </Button>
                            </div>
                            <div className={cx('menu-item')}>
                                <Button
                                    navLink
                                    to={configRouters.blog}
                                    className={cx('item', pathActive === configRouters.blog ? 'active' : '')}
                                    textWhite
                                    base
                                    full
                                    leftIcon={<FontAwesomeIcon icon={faBlog} />}
                                    onClick={handleClickItem}
                                >
                                    Blog
                                </Button>
                            </div>
                            <div className={cx('menu-item')}>
                                <Button
                                    navLink
                                    to={configRouters.contact}
                                    className={cx('item', pathActive === configRouters.contact ? 'active' : '')}
                                    textWhite
                                    base
                                    full
                                    leftIcon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="2rem"
                                            viewBox="0 96 960 960"
                                            width="2rem"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M660 976v-86.667Q606 872 568.5 831T523 736h61q10 44 44 72t82 28h120q20.833 0 35.417 14.583Q880 865.167 880 886v90H660Zm109.956-195Q739 781 717 758.956q-22-22.045-22-53Q695 675 717.044 653q22.045-22 53-22Q801 631 823 653.044q22 22.045 22 53Q845 737 822.956 759q-22.045 22-53 22ZM390 636q0-126 87-213t213-87v60q-101 0-170.5 69.5T450 636h-60Zm120 0q0-75 52.65-127.5T690 456v60q-50 0-85 35t-35 85h-60ZM80 521v-90q0-20.833 15-35.417Q110 381 130 381h120q48 0 82-28t44-72h61q-8 54-45.5 95T300 434.333V521H80Zm109.956-195Q159 326 137 303.956q-22-22.045-22-53Q115 220 137.044 198q22.045-22 53-22Q221 176 243 198.044q22 22.045 22 53Q265 282 242.956 304q-22.045 22-53 22Z"
                                            />
                                        </svg>
                                    }
                                    onClick={handleClickItem}
                                >
                                    Liên hệ
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
