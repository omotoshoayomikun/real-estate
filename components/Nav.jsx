import Image from "next/image"
import styles from '../styles/Nav.module.css'
import {
    FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF,FaSortDown, FaBars
} from 'react-icons/fa'
import { GoMail, GoLocation } from 'react-icons/go'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux";
import { handleSide } from "../redux/sidebarSlice"
import { useEffect, useState } from "react"

const Nav = () => {

    // const side = useSelector((state) => state.sidebar.index)
    // console.log(side);

    const [index, setIndex] = useState(true)
    const [scroll, setScroll] = useState(false)

   const dispatch = useDispatch()

    const handleSidebar = () => {
        setIndex(!index)
        dispatch(handleSide(index))
    }


    useEffect(() => {
       global.addEventListener('scroll', () => {
           if(global.scrollY > 557) {
               setScroll(true)
           } else {
                setScroll(false)
           }
       })
    })

    return (
        <div>
        <div className={styles.container}>
            <div className={styles.fade}></div>
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
            <div className={`${scroll? styles.header1: styles.header}`}>
                <div className={styles.header_icon}>Logo</div>
                <div className={styles.navlist}>
                    <ul className={styles.ul}>
                        <li className={styles.list}>
                            <Link href='/' passHref>
                                <a style={{ display: 'flex', alignItems: 'center' }}> Home</a>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href='/' passHref>
                                <a style={{ display: 'flex', alignItems: 'center' }}>Properties <FaSortDown className={styles.sss} /></a>
                            </Link>

                            <ul className={styles.subLists}>
                                <li className={styles.subList}>
                                    <Link href='/' passHref>
                                        <a style={{ display: 'block' }}>Buy Land</a>
                                    </Link>
                                </li>
                                <li className={styles.subList}>
                                    <Link href='/' passHref>
                                        <a style={{ display: 'block' }}>Buy House</a>
                                    </Link>
                                </li>
                                <li className={styles.subList}>
                                    <Link href='/' passHref>
                                        <a style={{ display: 'block' }}>Build House</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.list}>
                            <Link href='/' passHref>
                                <a style={{ display: 'flex', alignItems: 'center' }}> Partnership</a>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href='/' passHref>
                                <a style={{ display: 'flex', alignItems: 'center' }}> About Us </a>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href='/' passHref>
                                <a style={{ display: 'flex', alignItems: 'center' }}> Contact</a>
                            </Link>
                        </li>
                    </ul>
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

            <div className={styles.caption}>
                <h1 className={styles.text_head}>Reinventing comfort</h1>
                <h2 className={styles.text_head}>building smiles &</h2>
                <h3 className={styles.text_head}>leading you home.</h3>
                <button className={styles.button_cap}>Make An Enquiry</button>
            </div>



            <div className={styles.slick}></div>

            <div className={styles.wrapper}>
                <div className={styles.slider_img}>
                    <Image src='/img/slider_2.jpg' alt='slider 2' layout="fill" objectFit="cover" />
                </div>
                <div className={styles.slider_img}>
                    <Image src='/img/slider_1.jpg' alt='slider 2' layout="fill" />
                </div>
                <div className={styles.slider_img}>
                    <Image src='/img/slider_2.jpg' alt='slider 2' layout="fill" />
                </div>
            </div>

            <div className={styles.slick}></div>
        </div>
            <div className={styles.filter}>
                <select className={styles.filter_select} name="" id="">
                    <option value="">Choose Properties</option>
                    <option value="">Buy Land</option>
                    <option value="">Buy House</option>
                    <option value="">Build House</option>
                </select>
                <select className={styles.filter_select} name="" id="">
                    <option value="">Choose Area</option>
                    <option value="">Lekki (Lagos)</option>
                    <option value="">Epe (Lagos)</option>
                    <option value="">Banana Island (Lagos)</option>
                </select>
                <select className={styles.filter_select} name="" id="">
                    <option value="">Choose Scale</option>
                    <option value="">1 plot</option>
                    <option value="">2 plot</option>
                    <option value="">More</option>
                </select>
                <button className={styles.button}>Find Now</button>
            </div>
        </div>
    )
}

export default Nav