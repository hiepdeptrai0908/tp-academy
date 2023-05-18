import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './AddMissionDetail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function AddMissionDetail() {
    const getDetailId = Number(sessionStorage.getItem('detailId'))
    const [posts, setPosts] = useState([
        {
            postId: 1,
            sort: 'Kỹ năng đặc định',
            img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
            heading: 'Tuyển dụng nhân viên khách sạn',
            description:
                'Ngành khách sạn Nhật Bản là một lĩnh vực phát triển mạnh mẽ trong ngành du lịch của đất nước này. Với sự kết hợp giữa truyền thống và hiện đại, ngành khách sạn Nhật Bản đáp ứng nhu cầu của du khách bằng các dịch vụ chất lượng cao, phòng ở tiện nghi và phong cách độc đáo. Sự chu đáo và tôn trọng của nhân viên khách sạn Nhật Bản đã tạo nên trải nghiệm khách hàng đáng nhớ.',
            contents: {},
        },
        {
            postId: 2,
            sort: 'Kỹ năng đặc định',
            img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
            heading: 'Tuyển dụng nhân viên khách sạn',
            description:
                'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
            contents: {},
        },
        {
            postId: 3,
            sort: 'Kỹ năng đặc định',
            img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
            heading: 'Tuyển dụng nhân viên khách sạn',
            description:
                'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
            contents: {},
        },
        {
            postId: 4,
            sort: 'Kỹ năng đặc định',
            img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
            heading: 'Tuyển dụng nhân viên khách sạn',
            description:
                'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
            contents: {},
        },
    ])

    console.log(getDetailId)
    return (
        <div className={cx('wrapper')}>
            {posts
                .filter((post) => post.postId === getDetailId)
                .map((detail, index) => {
                    return (
                        <div key={index} className={cx('container')}>
                            <h1 className={cx('heading')}>{detail.heading}</h1>
                            <div className={cx('sort')}>
                                <FontAwesomeIcon className={cx('sort-icon')} icon={faAnglesRight} />
                                <p className={cx('sort-text')}>{detail.sort}</p>
                            </div>
                            <div className={cx('description')}>{detail.description}</div>
                            <img className={cx('parent-img')} src={detail.img} alt="Ảnh" />
                            <div className={cx('contents')}>
                                <div className={cx('content')}>
                                    <div className={cx('text-green', 'bold')}>
                                        Lương hơn 30 triệu - tuyển dụng khắp nhật bản
                                    </div>
                                    <div className={cx('bold')}>Yêu cầu:</div>
                                    <div className={cx('mt-4')}>Kĩ năng đặc định :</div>
                                    <div>
                                        + Người mới: ( tốt nghiệp cấp 2 ) quá trình học và thi bằng mất khoảng 6tháng
                                        hơn.
                                    </div>
                                    <div>+ Nếu có bằng tokutei gino và N4 thì lên lịch pv luôn.</div>
                                    <div className={cx('mt-4')}>
                                        Nhân viên chính thức: bằng đại học hoặc cđ ngành: du lịch - kinh doanh có liên
                                        quan đến khách du lịch.
                                    </div>
                                </div>
                                <img className={cx('content-img', 'mt-8')} src={images.imageTuyenSinh} alt="" />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default AddMissionDetail
