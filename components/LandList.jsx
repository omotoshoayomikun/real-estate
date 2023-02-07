import styles from '../styles/LandList.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { FaBed, FaCamera, FaMapMarkerAlt, FaRegFileVideo, FaShoppingCart, FaToilet, FaVectorSquare } from 'react-icons/fa'
import Link from 'next/link'

const LandList = () => {
    
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
                '/img/bedroom3.jpg',
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



    const handleArrow = (direction) => {
        const imgLenght = lands.length;

        if (direction === 'l') {
            setIndex(index === 0 ? imgLenght - 3 : index - 1)
        }
        if (direction === 'r') {
            setIndex(index < imgLenght - 3 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Land</div>
            <h1 className={styles.sub_heading}>Buy Your Dream Land</h1>

            <div className={styles.carosel} style={{ left: '0' }} onClick={() => handleArrow('l')}>
                <Image src="/img/arrowl.png" alt="images" width={1900} height={4000} objectFit='cover' />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.sub_wrapper}>
                    {
                        lands.map((land, i) => (
                            <div key={i} className={styles.items__}style={{ transform: `translateX(${-420 * index}px)` }}>
                                {/* <div className={styles.specify}>FOR SALE</div> */}
                                <div className={styles.img__}>
                                    <Image src={land.img[0]} alt="images" layout='fill' objectFit='cover' />

                                    <div className={styles.media_container}>
                                        <div className={styles.media}><FaCamera /> </div>
                                        <div className={styles.media}><FaRegFileVideo /> </div>
                                    </div>
                                    <div className={styles.__container}>
                                        <div className={styles.location}><FaMapMarkerAlt style={{ marginRight: '5px' }} />{land.location}, {land.state}</div>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.ddd}>
                                        <h4 className={styles.title}>{land.title}</h4>
                                        <h6 className={styles.price}>Plot/${land.price}</h6>
                                    </div>
                                    {/* <Link href="/">
                                        <a class={styles.arrow}>View Property</a>
                                    </Link> */}
                                    {/* <div className={styles.description}>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>3 <FaBed /> </div>
                                            <div className={styles.bed}>Bedrooms</div>
                                        </div>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>3 <FaToilet /> </div>
                                            <div className={styles.bed}>Bathrooms</div>
                                        </div>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>3 <FaVectorSquare /> </div>
                                            <div className={styles.bed}>Square Ft</div>
                                        </div>
                                    </div> */}
                                </div>
                                <hr style={{ marginTop: '15px', marginBottom: '0px', borderColor: 'rgba(0, 0, 0, 0.150)' }} />
                                <div className={styles.cart}>
                                    <div className={styles.btn_product}>
                                        <Link href='/'>
                                            <a>View Product Detail</a>
                                        </Link>
                                    </div>
                                    {/* <div className={styles.ic_cart}><FaShoppingCart /> </div> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.carosel} style={{ right: '-20px' }} onClick={() => handleArrow('r')}>
                <Image src="/img/arrowr.png" alt="images" width={1900} height={4000} objectFit='cover' />
            </div>

        </div>
    )
}

export default LandList