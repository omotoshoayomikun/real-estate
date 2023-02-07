import styles from '../styles/TopNav.module.css'
import {
    FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF,FaSortDown, FaBars
} from 'react-icons/fa'
import { GoMail, GoLocation } from 'react-icons/go'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import { handleSide } from "../redux/sidebarSlice"
import { useEffect, useState } from "react"



const TopNav = () => {

    const [index, setIndex] = useState(true)

    const dispatch = useDispatch()

    const handleSidebar = () => {
        setIndex(!index)
        dispatch(handleSide(index))
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.head_top}>
                    <div className={styles.text}>
                        <Link href="mailto:omotoshoayomikun@gmail.com">
                            <a className={styles.df}> <GoMail style={{ fontSize: '23px', marginRight: '10px', color: '#00b3b3' }} /> omotoshoayomikun@gmail.com</a>
                        </Link>
                    </div>
                    <div className={styles.text}>
                        <Link href="/">
                            <a className={styles.df}> <GoLocation style={{ fontSize: '20px', marginRight: '10px', color: '#00b3b3' }} /> 15/A, Lagos Nigeria</a>
                        </Link>
                    </div>
                    <div className={styles.text} style={{ marginLeft: 'auto' }}>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon} ><FaInstagram /></a>
                        </Link>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaTwitter /></a>
                        </Link>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaFacebookF /></a>
                        </Link>
                        <Link href="/" target="_blank" className={styles.link_icon} passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaWhatsapp /></a>
                        </Link>
                    </div>
                </div>


                {/* THIS IS FOR THE SMALL SCREEN SIDE */}
                {/* SMALL SCREEN HEADER NAV */}
                <div className={styles.sm_head}>
                    <div className={`${styles.menu}`} onClick={handleSidebar}>
                        <FaBars />
                    </div>
                    <div className={styles.text} style={{ marginLeft: 'auto' }}>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon} ><FaInstagram /></a>
                        </Link>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaTwitter /></a>
                        </Link>
                        <Link href="/" target="_blank" passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaFacebookF /></a>
                        </Link>
                        <Link href="/" target="_blank" className={styles.link_icon} passHref>
                            <a target="_blank" rel="noopener noreferrer" className={styles.link_icon}><FaWhatsapp /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav