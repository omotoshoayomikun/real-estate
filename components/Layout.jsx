
import Footer from "./footer"
import Nav from "./Nav"
import Sidebar from './Sidebar'

const Layout = ( {children} ) => {
    return (
        <div>
            <Nav />
            <Sidebar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout