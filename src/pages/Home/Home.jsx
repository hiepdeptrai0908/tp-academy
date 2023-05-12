import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('banner')} src={images.banner} alt="Banner" />
            <div className={cx('group')}>
                <div className={cx('info-col-2')}>
                    <div className={cx('info-content')}>
                        <div className={cx('content-headding')}>Bạn đã biết gì về Du học Triệu Phú ?</div>
                        <div className={cx('content-text')}>
                            Jellyfish Việt Nam trực thuộc tập đoàn Jellyfish Japan - tập đoàn chuyên về phát triển nhân
                            sự và tuyển sinh du học Nhật Bản.
                        </div>
                        <div className={cx('content-text')}>
                            Được thành lập từ năm tháng 4, năm 2010, tính đến nay Jellyfish Việt Nam đã tròn 13 năm tuổi
                            sứa. Trong suốt 13 năm qua, chúng mình đã đồng hành cùng hơn 7.000 du học sinh Việt Nam trên
                            con đường chinh phục Nhật Bản và luôn tự hào là trung tâm du học Nhật hỗ trợ các bạn toàn
                            diện nhất.
                        </div>
                        <div className={cx('content-text')}>
                            Jellyfish hiện là đối tác của hơn 400 trường cùng nhiều chương trình học bổng vì vậy chúng
                            mình có thể giúp du học sinh chọn được trường và học bổng phù hợp nhất. Bên cạnh đó chúng
                            mình cũng sẽ hỗ trợ các bạn trong suốt hành trình du học của mình, từ chọn trường, luyện
                            phỏng vấn, tìm việc làm thêm đến khi các bạn về nước.
                        </div>
                    </div>
                    <img className={cx('info-image')} src={images.noName1} alt="" />
                </div>
            </div>
            <div className={cx('group')}>
                <div className={cx('col-3')}>
                    <div className={cx('col-item')}>
                        <img className={cx('col-item-img')} src={images.icon1} alt="Chi phí rõ ràng, minh bạch" />
                        <div className={cx('col-item-headding')}>Chi phí rõ ràng minh bạch</div>
                        <div className={cx('col-item-text')}>
                            Chi phí luôn công khai, nêu rõ trong hợp đồng và không có phí phát sinh
                        </div>
                    </div>
                    <div className={cx('col-item')}>
                        <img className={cx('col-item-img')} src={images.icon2} alt="Chi phí rõ ràng, minh bạch" />
                        <div className={cx('col-item-headding')}>ĐỖ COE VÀ VISA XẤP XỈ 100%</div>
                        <div className={cx('col-item-text')}>
                            Tỷ lệ đỗ visa 100%, đỗ COE gần như tuyệt đối với cả những hồ sơ đã trượt trước đó
                        </div>
                    </div>
                    <div className={cx('col-item')}>
                        <img className={cx('col-item-img')} src={images.icon3} alt="Chi phí rõ ràng, minh bạch" />
                        <div className={cx('col-item-headding')}>HỖ TRỢ DHS TOÀN DIỆN NHẤT</div>
                        <div className={cx('col-item-text')}>
                            Tư vấn chọn trường, chọn ngành, dịch vụ hồ sơ, giới thiệu việc làm,..
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('group')}>
                <div className={cx('content-headding')}>TỔNG QUAN QUY TRÌNH DU HỌC NHẬT BẢN</div>
                <div className={cx('img-box')}>
                    <img className={cx('img-col')} src={images.icon4} alt="Quy trình 1" />
                    <img className={cx('img-col')} src={images.icon5} alt="Quy trình 2" />
                </div>
            </div>
            <Button href={'tel:07044781997'} rounded large primary className={cx('btn')}>
                Liên hệ tư vấn miễn phí
            </Button>
        </div>
    )
}

export default Home
