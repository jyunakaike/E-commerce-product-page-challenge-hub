import React, {useState , useContext} from 'react';
import style from './navbar.module.css';
import AppContext from '../../context/AppContext';
// components
import CartMenu from '../CartMenu'


import Image from 'next/image';
import Logo from '../../images/logo.svg'
import checkout from '../../images/icon-cart.svg'
import profile from '../../images/image-avatar.png'

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);

    const {cartItem , setCartItem } =useContext(AppContext)


    const handleToggleCart = () => {
        setShowCart(!showCart)
    }


    return (
        <nav className={style.headerContainer} >
            {/* This is Navbar */}
            <div className={style.titleContainer}>
                <Image src={Logo}  width={160} height={40} ></Image>
                <div className={style.categoryContainer} >
                    <div>Collections</div>
                    <div>Men </div>
                    <div>Women </div>
                    <div>About </div>
                    <div>Contact </div>
                </div>
            </div>
            <div className={style.cartProfile}>
                <Image src={checkout} onClick={handleToggleCart} />
                {(cartItem > 0) ? cartItem : null}
                <Image src={profile} height={30} width={30} />
            </div>
            {showCart && <CartMenu cartItem={cartItem} /> }

        </nav>


    )

};

export default Navbar;
