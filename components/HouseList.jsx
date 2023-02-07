
import styles from '../styles/HouseList.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBed, FaCamera, FaMapMarkerAlt, FaRegFileVideo, FaShoppingCart, FaToilet, FaVectorSquare } from 'react-icons/fa'
const HouseList = () => {

    const [index, setIndex] = useState(0)

    const houses = [
        {
            img: [
                '/img/bedroom3.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            state: 'Kogi',
            location: 'Iwo road obalende',
            price: 32900,
            desc: 'Modern Apartment',
            status: 'FOR SALE',
            description1: { text: 'Bedrooms', size: '3' },
            description2: { text: 'Bathrooms', size: '2' },
            description3: { text: 'Square Ft', size: '3400' },
        },
        {
            img: [
                '/img/bedroom2.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            state: 'Kwara',
            location: 'Iwo road obalende',
            price: 32900,
            desc: 'Modern Apartment',
            status: 'FOR RENT',
            description1: { text: 'Bedrooms', size: '3' },
            description2: { text: 'Bathrooms', size: '2' },
            description3: { text: 'Square Ft', size: '3400' },
        },
        {
            img: [
                '/img/bedroom1.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            state: 'Lagos',
            location: 'Iwo road obalende',
            price: 32900,
            desc: 'Modern Apartment',
            status: 'FOR RENT',
            description1: { text: 'Bedrooms', size: '3' },
            description2: { text: 'Bathrooms', size: '2' },
            description3: { text: 'Square Ft', size: '3400' },
        },
        {
            img: [
                '/img/bedroom4.jpg',
                '/img/bedroom2.jpg',
                '/img/bedroom4.jpg',
                '/img/bedroom3.jpg',
            ],
            state: 'Ibadan',
            location: 'Iwo road obalende',
            price: 32900,
            desc: 'Modern Apartment',
            status: 'FOR SALE',
            description1: { text: 'Bedrooms', size: '3' },
            description2: { text: 'Bathrooms', size: '2' },
            description3: { text: 'Square Ft', size: '3400' },
        },
    ]



    const handleArrow = (direction) => {
        const imgLenght = houses.length;

        if (direction === 'l') {
            setIndex(index === 0 ? imgLenght - 3 : index - 1)
        }
        if (direction === 'r') {
            setIndex(index < imgLenght - 3 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Houses</div>
            <h1 className={styles.sub_heading}>Find Your Dream House</h1>

            <div className={styles.carosel} style={{ left: '0' }} onClick={() => handleArrow('l')}>
                <Image src="/img/arrowl.png" alt="images" width={1900} height={4000} objectFit='cover' />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.sub_wrapper}>
                    {
                        houses.map((house, i) => (
                            <div className={styles.items__} key={i} style={{ transform: `translateX(${-420 * index}px)` }}>
                                <div className={house.status === 'FOR RENT' ? `${styles.specifyR}` : `${styles.specifyS}`}>{house.status}</div>
                                <div className={styles.img__}>
                                    <Image src={house.img[0]} alt="images" layout='fill' objectFit='cover' />

                                    <div className={styles.media_container}>
                                        <div className={styles.media}><FaCamera /> </div>
                                        <div className={styles.media}><FaRegFileVideo /> </div>
                                    </div>
                                    <div className={styles.__container}>
                                        <div className={styles.location}><FaMapMarkerAlt style={{ marginRight: '5px' }} />    {house.location},{house.state}</div>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.ddd}>
                                        <h4 className={styles.title}>{house.desc}</h4>
                                        <h6 className={styles.price}>${house.price}</h6>
                                    </div>
                                    {/* <Link href="/">
                                        <a class={styles.arrow}>View Property</a>
                                    </Link> */}
                                    <div className={styles.description}>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>{house.description1.size} <FaBed /> </div>
                                            <div className={styles.bed}>{house.description1.text}</div>
                                        </div>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>{house.description2.size} <FaToilet /> </div>
                                            <div className={styles.bed}>{house.description2.text}</div>
                                        </div>
                                        <div className={styles.des}>
                                            <div className={styles.bed}>{house.description3.size} <FaVectorSquare /> </div>
                                            <div className={styles.bed}>{house.description3.text}</div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ marginTop: '15px', marginBottom: '0px', borderColor: 'rgba(0, 0, 0, 0.150)' }} />
                                <div className={styles.cart}>
                                    <Link href={`/houses/${i}`} passHref>
                                        <a className={styles.btn_product}>
                                            <div >
                                                View Product Detail
                                            </div>
                                        </a>
                                    </Link>
                                    <div className={styles.ic_cart}><FaShoppingCart /> </div>
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

export default HouseList