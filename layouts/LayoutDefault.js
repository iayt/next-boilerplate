import Head from 'next/head'
// import styles from './LayoutDefault/LayoutDefault.module.css'
import Header from './LayoutDefault/Header'
import Footer from './LayoutDefault/Footer'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next-Boilerplate ia</title>
      </Head>

      <Header />

      <main>{children}</main>
      
      <Footer />
    </>
  )
}

export default Layout