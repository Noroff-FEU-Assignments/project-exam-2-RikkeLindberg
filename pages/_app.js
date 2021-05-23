import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { AuthProvider } from '../context/AuthContext'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
