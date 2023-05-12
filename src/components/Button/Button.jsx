import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link, NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)
function Button({
    navLink,
    full,
    left,
    right,
    children,
    primary,
    border,
    rounded,
    textBlack,
    textWhite,
    textPrimary,
    small,
    base,
    large,
    to,
    href,
    htmlFor,
    leftIcon,
    onClick,
    className,
    ...passProps
}) {
    let Component = 'button'

    const props = { onClick, ...passProps }

    const classes = cx('wrapper', {
        full,
        left,
        right,
        primary,
        border,
        rounded,
        textWhite,
        textBlack,
        textPrimary,
        small,
        base,
        large,
        leftIcon,
        [className]: className,
    })

    if (to) {
        props.to = to
        if (navLink) {
            Component = NavLink
        } else {
            Component = Link
        }
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Component>
    )
}

export default Button
