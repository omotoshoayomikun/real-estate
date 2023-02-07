import Image from 'next/image'
import styles from '../styles/PropertyList.module.css'
const PropertyList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Property</div>
            <h1 className={styles.sub_heading}>Property By Categories</h1>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <Image src='/img/bedroom2.jpg' alt='images' layout='fill' />
                    <div className={styles.texts}>
                    <h3 className={styles.text1}>Land</h3>
                    <span className={styles.text2}>Great Deal Available</span>
                    <div className={styles.badge}>13 Listing</div>
                    </div>
                </div>
                <div className={styles.list}>
                    <Image src='/img/bedroom2.jpg' alt='images' layout='fill' />
                    <div className={styles.texts}>
                    <h3 className={styles.text1}>Buy Houses</h3>
                    <span className={styles.text2}>Great Deal Available</span>
                    <div className={styles.badge}>13 Listings</div>
                    </div>
                </div>
                <div className={styles.list}>
                    <Image src='/img/bedroom2.jpg' alt='images' layout='fill' />
                    <div className={styles.texts}>
                    <h3 className={styles.text1}>Build House</h3>
                    <span className={styles.text2}>Great Deal Available</span>
                    <div className={styles.badge}>13 Listings</div>
                    </div>
                </div>
                {/* <div className={styles.list}>
                    <Image src='/img/bedroom2.jpg' alt='images' layout='fill' />
                    <div className={styles.texts}>
                    <h3 className={styles.text1}>Partnership</h3>
                    <span className={styles.text2}>Great Deal Available</span>
                    <div className={styles.badge}>13 Listings</div>
                    </div>
                </div> */}
                <div className={styles.list}>
                    <Image src='/img/bedroom2.jpg' alt='images' layout='fill' />
                    <div className={styles.texts}>
                    <h3 className={styles.text1}>Sell House</h3>
                    <span className={styles.text2}>Great Deal Available</span>
                    <div className={styles.badge}>13 Listings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList