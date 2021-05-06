import { AuthorisationProvider } from "../context/AuthorisationContext";
import Layout from '../components/layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthorisationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthorisationProvider>
  )
}

export default MyApp
