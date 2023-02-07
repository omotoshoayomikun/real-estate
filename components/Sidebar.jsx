import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'
import { GoMail } from 'react-icons/go'
import { useSelector, useDispatch } from 'react-redux'
import { handleSide } from '../redux/sidebarSlice'

const SideBar = () => {
    const selectorIndex = useSelector((state) => state.sidebar.index)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(handleSide(false));
    }


    return (
        <div className={selectorIndex? styles.container : styles.sub_container}>
            <div className={styles.fade}  onClick={handleClick}></div>
            {/*  -------------------------------  */}
            <div className={selectorIndex? styles.sm_sidebar: styles.sm_sidebar_sub}>
                <ul className={styles.sm_ul}>
                    <li className={styles.sm_list}>
                        <Link href='/' passHref>
                            <a className={styles.a}  onClick={handleClick}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.sm_list}>
                        <Link href='/' passHref>
                            <a className={styles.a}  onClick={handleClick}>Properties</a>
                        </Link>
                    </li>
                    <li className={styles.sm_list}>
                        <Link href='/' passHref>
                            <a className={styles.a}  onClick={handleClick}>Patnership</a>
                        </Link>
                    </li>
                    <li className={styles.sm_list}>
                        <Link href='/' passHref>
                            <a className={styles.a}  onClick={handleClick}>About Us</a>
                        </Link>
                    </li>
                    <li className={styles.sm_list}>
                        <Link href='/' passHref>
                            <a className={styles.a}  onClick={handleClick}>Contact</a>
                        </Link>
                    </li>
                </ul>
            <div className={styles.text}>
                <Link href="mailto:omotoshoayomikun@gmail.com">
                    <a className={styles.df}> <GoMail style={{ fontSize: '23px', marginRight: '10px', color: '#00b3b3' }} /> omotoshoayomikun@gmail.com</a>
                </Link>
            </div>
            </div>
            {/* --------------------- */}
        </div>
    )
}

export default SideBar