import React from 'react';
import style from './CartMenu.module.css'

import Image from 'next/image';
import productImage from '../../images/image-product-1.jpg'
import deleteIcon from '../../images/icon-delete.svg'

const Menu = ({ cartItem }) => {
    let total = (125.00 * cartItem)


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
                                <Image src={productImage} height={50} width={50}  />
                                <div className={style.Detail}>
                                    <div className={style.DetailInfo} >
                                        Fall Limited Edition Sneaker
                                    </div>
                                    <div>
                                        $125.00 x {cartItem} {total}
                                    </div>
                                </div>

                                <Image src={deleteIcon} />
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