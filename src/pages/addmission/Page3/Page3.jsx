import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Page3.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import configRouters from '~/config/router'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Page3() {
    const maxTextLength = 120
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
        // {
        //     postId: 2,
        //     sort: 'Kỹ năng đặc định',
        //     img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
        //     heading: 'Tuyển dụng nhân viên khách sạn',
        //     description:
        //         'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
        //     contents: {},
        // },
        // {
        //     postId: 3,
        //     sort: 'Kỹ năng đặc định',
        //     img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
        //     heading: 'Tuyển dụng nhân viên khách sạn',
        //     description:
        //         'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
        //     contents: {},
        // },
        // {
        //     postId: 4,
        //     sort: 'Kỹ năng đặc định',
        //     img: 'https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548643528/locobee-khachsan-3_wqaw1q.jpg',
        //     heading: 'Tuyển dụng nhân viên khách sạn',
        //     description:
        //         'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen',
        //     contents: {},
        // },
    ])

    useEffect(() => {}, [])
    const handleClick = (e) => {
        sessionStorage.setItem('detailId', e)
    }

    return (
        <div className={cx('wrapper')}>
            {posts.map((post) => (
                <Link
                    key={post.postId}
                    onClick={() => handleClick(post.postId)}
                    to={configRouters.addMissionDetail}
                    className={cx('container')}
                >
                    <img className={cx('img')} src={post.img} alt="Ảnh tiêu đề" />
                    <div className={cx('contents')}>
                        <h1 className={cx('heading')}>{post.heading}</h1>
                        <div className={cx('description')}>{post.description.slice(0, maxTextLength)}...</div>
                        <div className={cx('sort')}>
                            <FontAwesomeIcon className={cx('sort-icon')} icon={faAnglesRight} />
                            <p className={cx('sort-text')}>{post.sort}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Page3
