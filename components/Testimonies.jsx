import styles from '../styles/Testimonies.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { FaBed, FaCamera, FaMapMarkerAlt, FaRegFileVideo, FaShoppingCart, FaToilet, FaVectorSquare } from 'react-icons/fa'
const Testimonies = () => {


    const [index, setIndex] = useState(0)

    const lands = [
        {
            img: [
                '/img/bedroom2.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            location: 'Abeokuta',
            state: 'Ogun',
            title: 'The Golden City',
            price: '2000'
        },
        {
            img: [
                '/img/bedroom1.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            location: 'Abeokuta',
            state: 'Ogun',
            title: 'The Golden City',
            price: '2000'
        },
        {
            img: [
                '/img/bedroom4.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            location: 'Abeokuta',
            state: 'Ogun',
            title: 'The Golden City',
            price: '2000'
        },
        {
            img: [
                '/img/bedroom4.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            location: 'Abeokuta',
            state: 'Ogun',
            title: 'The Golden City',
            price: '2000'
        },
        {
            img: [
                '/img/bedroom4.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            location: 'Abeokuta',
            state: 'Ogun',
            title: 'The Golden City',
            price: '2000'
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.heading}>Our Testimonial</div>
                <h1 className={styles.sub_heading}>Customers Feedback</h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.sub_wrapper}>
                    {
                        lands.map((land, i) => (
                            <div key={i} className={styles.items__} style={{ transform: `translateX(${-420 * index}px)` }}>
                                <div className={styles.text}>
                                    Precious ipsum dolor sit amet
                                    consectetur adipisicing elit, sed dos
                                    mod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad min
                                    veniam, quis nostrud Precious ips
                                    um dolor sit amet, consecte
                                </div>
                                {/* <div className={styles.caption}>
                                    <div children={styles.img}>
                                        <Image src='/img/bedroom1.jpg' alt='images' layout='fill' />
                                    </div>
                                    <div className={styles.text2}>
                                        <h2>Omotosho Ayomikun</h2>
                                        <h2>Omotosho Ayomikun</h2>
                                    </div>
                                </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonies