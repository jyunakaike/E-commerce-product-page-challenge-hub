import React, { useState, useContext } from 'react';
import style from './navbar.module.css';
import AppContext from '../../context/AppContext';
// components
import CartMenu from '../CartMenu'


import Image from 'next/image';
import Logo from '../../images/logo.svg'
import checkout from '../../images/icon-cart.svg'
import profile from '../../images/image-avatar.png'

const Navbar = () => {
    let categoryArray = [null ,null, null, null, null,]

    const [showCart, setShowCart] = useState(false);
    const { cartItem, setCartItem } = useContext(AppContext)
    const [category, setCategory] = useState(categoryArray);
    
    const handleToggleCart = () => {
        setShowCart(!showCart)
    }

    const categoryClick = (num) => {
        setCategory(category=num)
    }

    return (
        <nav className={style.headerContainer} >
            {/* This is Navbar */}
            <div className={style.titleContainer}>
                <Image src={Logo} width={200} ></Image>
                <div className={style.categoryContainer} >
                    <div className={(category ===1 )? style.categoryClickedColor : null} onClick={() => categoryClick(1)} >Collections</div>
                    <div className={(category ===2 )? style.categoryClickedColor : null} onClick={() => categoryClick(2)} >Men </div>
                    <div className={(category ===3 )? style.categoryClickedColor : null} onClick={() => categoryClick(3)} >Women </div>
                    <div className={(category ===4 )? style.categoryClickedColor : null} onClick={() => categoryClick(4)} >About </div>
                    <div className={(category ===5 )? style.categoryClickedColor : null} onClick={() => categoryClick(5)} >Contact </div>
                </div>
            </div>
            <div className={style.cartProfile}>
                <Image src={checkout} width={30} height={30} onClick={handleToggleCart} />
                {(cartItem > 0) ? cartItem : null}
                <Image src={profile} height={30} width={30} />
            </div>
            {showCart && <CartMenu  cartItem={cartItem} />}
            


        </nav>
    )
};

export default Navbar;
