import classNames from 'classnames/bind'
import styles from './Addmission.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Addmission() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('category')}>Danh mục</div>
                <div className={cx('category-item', 'active')}>Chương trình học bổng</div>
                <div className={cx('category-item')}>Du học tự túc</div>
                <div className={cx('category-item')}>Kỹ năng đặc định (特定技能)</div>
                <div className={cx('category-item')}>Du học Hàn Quốc</div>
                <div className={cx('category-item')}>Du học Đức</div>
                <div className={cx('category-item')}>Du học Canada</div>
            </div>
            <div className={cx('contents')}>Nội dung</div>
        </div>
    )
}

export default Addmission
