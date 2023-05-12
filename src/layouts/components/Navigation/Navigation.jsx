import classNames from 'classnames/bind'
import React, { useState, useEffect } from 'react'
import styles from './Navigation.module.scss'
import MenuNav from '~/components/MenuNav/MenuNav'

const cx = classNames.bind(styles)

function Navigation({ className }) {
    const [classes, setClasses] = useState(cx('wrapper', { [className]: className }))
    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolledTop = window.scrollY < 120
            if (isScrolledTop !== isTop) {
                setClasses(cx('wrapper', { [className]: className }, 'hidden'))
                setIsTop(isScrolledTop)
            } else if (window.scrollY < 120) {
                setClasses(cx('wrapper', { [className]: className }, 'show'))
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [isTop])
    return (
        <div className={classes}>
            <MenuNav />
        </div>
    )
}

export default Navigation
