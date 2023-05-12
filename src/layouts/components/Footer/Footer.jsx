import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('col-4')}>
                    <div className={cx('col-items')}>
                        <div className={cx('heading')}>
                            <img className={cx('logo')} src={images.logoOnly} alt="Logo" />
                            <div className={cx('contents')}>
                                <span className={cx('content')}>Về Công Ty Du Học</span>
                                <span className={cx('content')}>Triệu Phú</span>
                            </div>
                        </div>
                        <div className={cx('content', 'address')}>
                            Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
                        </div>
                    </div>
                    <div className={cx('col-items')}>
                        <div className={cx('heading')}>Về công ty</div>
                        <div className={cx('content')}>Giới thiệu</div>
                        <div className={cx('content')}>Thông tin tuyển sinh</div>
                        <div className={cx('content')}>Blog</div>
                    </div>
                    <div className={cx('col-items')}>
                        <div className={cx('heading')}>Liên hệ</div>
                        <div className={cx('content')}>Điện thoại: 0246.329.1102</div>
                        <div className={cx('content')}>Email: contact@fullstack.edu.vn</div>
                        <div className={cx('content')}>
                            <div className={cx('contacts')}>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon
                                        className={cx('contact-icon', 'contact-icon--facebook')}
                                        icon={faFacebookF}
                                    />
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon
                                        className={cx('contact-icon', 'contact-icon--phone')}
                                        icon={faPhone}
                                    />
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon
                                        className={cx('contact-icon', 'contact-icon--email')}
                                        icon={faEnvelope}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-items')}>
                        <div className={cx('heading')}>Công ty cổ phần giáo dục Triệu Phú</div>
                        <div className={cx('content')}>Mã số thuế: 0109922901</div>
                        <div className={cx('content')}>Ngày thành lập: 04/03/2022</div>
                        <div className={cx('content')}>
                            Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại
                            giá trị cho cộng đồng.
                        </div>
                    </div>
                </div>
                <div className={cx('copyright')}>© 2023 TP. Trung tâm du học hàng đầu Việt Nam</div>
            </div>
        </footer>
    )
}

export default Footer
