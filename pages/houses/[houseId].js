import Footer from '../../components/footer'
import SideBar from '../../components/Sidebar'
import TopNav from '../../components/TopNav'
import styles from '../../styles/House.module.css'

const House = () => {
    return (
        <div className={styles.container}>hello</div>
    )
}

export default House

House.getLayout = function PageLayout(page) {
    return (
        <>
            <TopNav />
            {/* <SideBar /> */}
            {page}
            <Footer />
        </>
    )
}