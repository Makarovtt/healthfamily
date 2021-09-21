import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ButtonMobileNav from '../Navigation/UI/ButtonMobileNav';
import MobileNav from '../Navigation/UI/MobileNav';





const adress = 'улица Набережная Приволжского затона, 17 / 1';

const phone = '+7 (8512) 51-81-51';


function Layout({ title = 'Топинговые полы', description, children }) {


    const { push } = useRouter();

    const [mobileMenu, setMobileMenu] = useState(false);



    const clickButtonMobile = () => {
        setMobileMenu(false);
        push('/#form');
    }


    return (
        <>
            <Head>
                <title>{`${title}`}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"></link>
            </Head>

            <MobileNav active={mobileMenu} clickButtonMobile={clickButtonMobile} adress={adress} phone={phone} />

            {/* <Navigation adress={adress} /> */}


            <ButtonMobileNav
                activeBtn={mobileMenu}
                setActiveBtn={setMobileMenu} />

            {children}

            <Footer phone={phone} adress={adress} />
        </>
    )
}

export default Layout
