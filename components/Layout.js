import Navbar from './Navbar';
import { useEffect } from 'react';
import {useRouter} from 'next/router';
import NProgress from 'nprogress';

const Layout = ({children, title, footer = true }) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url)
      NProgress.start();
    }

    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])



  return (
    <>
    <Navbar />
    <main className="container py-4">

      {title && (
        <h1 className="text-center">
          {title}
        </h1>
        )}


    	{children}
    </main>
    {
      footer && (
        <footer className="bg-light  text-dark text-center">
          <div className="container p-4">
            <h4>&copy; Manuel Teran Portafolio</h4>
            <p>2020 - {new Date().getFullYear()}</p>

            <p>⚡ Diseño y Desarrollo por Manuel Teran</p>
          </div>
      </footer>
      )
    }

  </>
  )
}

export default Layout;