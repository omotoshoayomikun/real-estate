import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import Router from 'next/router';
import PageChange from '../components/PageChange/PageChange';

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading... ${url}`)
  // createRoot(
  //   <PageChange />
  // )
})
Router.events.on("routeChangeComplete", () => {
  console.log('router completed')
})



function MyApp({ Component, pageProps }) {
  if(Component.getLayout) {
    return (
      <Provider store={store}>
        {Component.getLayout(<Component {...pageProps} />)}
      </Provider>
    )
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
