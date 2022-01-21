import React from 'react';
import style from './navbar.module.css'



import Image from 'next/image';
import Logo from '../../images/logo.svg'
import checkout from '../../images/icon-cart.svg'
import profile from '../../images/image-avatar.png'

const Navbar = () => {
    return (
        <div className={style.headerContainer} >
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
                <Image src={checkout} />
                <Image src={profile} height={30} width={30} />

            </div>
        </div>
    )

};

export default Navbar;
