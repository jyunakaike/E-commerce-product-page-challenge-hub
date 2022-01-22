import '../style.css'
import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import AppContext from '../context/AppContext'

export default function MyApp({ Component, pageProps }) {
    const [cartItem, setCartItem] = useState(0);

    return (
        <AppContext.Provider value={{cartItem, setCartItem}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContext.Provider>

    )
}