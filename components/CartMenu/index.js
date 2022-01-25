import React from 'react';
import style from './cartMenu.module.css'

import Image from 'next/image';
import productImage from '../../images/image-product-1.jpg'
import deleteIcon from '../../images/icon-delete.svg'

const Menu = ({ cartItem , setCartItem}) => {
    let total = (125.00 * cartItem)

    const removeCart = () => {
        setCartItem(0);
    }


    return (
        <div className={style.Menu}>

            <div className={style.Title}>
                Cart
            </div>

            <div className={style.separator} />
            {
                (cartItem > 0)
                    ? (
                        <div className={style.container}>
                            <div className={style.containerDetail} >
                                <Image src={productImage} height={50} width={50} />
                                <div className={style.Detail}>
                                    <div className={style.DetailInfo} >
                                        Fall Limited Edition Sneaker
                                    </div>
                                    <div className={style.priceContainer}>
                                        <p> {`$125.00 x ${cartItem} `} </p>
                                        <p className={style.bold}> {` $ ${total}`} </p>
                                    </div>
                                </div>
                                <div className={style.deleteIconContainer}>
                                <Image width={20} height={20} src={deleteIcon} onClick={removeCart} />
                                </div>
                                
                            </div>
                            <button className={style.buttonCheckout} >Checkout</button>
                        </div>

                    )
                    : <div className={style.emptyContainer}>
                        Your Cart is empty.
                    </div>
            }

        </div>
    );
}

export default Menu;