import React, { useState,useContext } from 'react';
import styles from './home.module.css'

// Context
import AppContext from '../context/AppContext';

// components
import ModalContainer from '../modal'


// Images
import Image from 'next/image';

import addCart from '../images/icon-cart.svg'

import product_1 from '../images/image-product-1.jpg'
import product_2 from '../images/image-product-2.jpg'
import product_3 from '../images/image-product-3.jpg'
import product_4 from '../images/image-product-4.jpg'

import product_1thumb from '../images/image-product-1-thumbnail.jpg'
import product_2thumb from '../images/image-product-2-thumbnail.jpg'
import product_3thumb from '../images/image-product-3-thumbnail.jpg'
import product_4thumb from '../images/image-product-4-thumbnail.jpg'

import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'

const Home = () => {

    const product = [product_1, product_2, product_3, product_4]
    const [Open, setOpen] = useState(false);
    const [item, setItem] = useState(0);

    const {cartItem , setCartItem } =useContext(AppContext)

    // const getProduct = () => {
    //     console.log(product_1);
    // }

    const openModal = () => {
        setOpen(true)
    }

    // cart function

    const addItem = () => {
        setItem(item = item + 1)
    }

    const removeItem = () => {
        {
            (item > 0)
                ? setItem(item = item - 1) : item
        }
    }

    const addToCart = () => {
        // console.log(`add to cart ${item} ` );
        setCartItem(cartItem=item)
        console.log(cartItem);
    }

    return (
        <section className={styles.homeContainer}>
            <div className={styles.homePictures} >
                <Image
                    className={styles.image}
                    src={product_1}
                    alt="Sneakers product"
                    width={500}
                    height={500}
                    onClick={() => openModal()}
                />
                <div className={styles.thumbImages}>
                    <Image
                        className={styles.thumbImage}
                        src={product_1thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    // onClick={getProduct}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_2thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_3thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_4thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                </div>

            </div>
            <article className={styles.homeArticles}>
                <div className={styles.company}>SNEAKER COMPANY</div>

                <h1 className={styles.title} >Fall Limited Edition Sneakers</h1>
                <p>  These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className={styles.prices}>

                    <div className={styles.priceContainer} >
                        <div className={styles.price}>$125</div>
                        <div>50%</div>
                    </div>
                    <div>$250</div>

                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.toggleButton}  >
                        <div  onClick={removeItem} ><Image src={minus} /></div>
                        <div className={styles.toggleNumber}>{item}</div>
                        <div  onClick={addItem}><Image src={plus} /></div>
                    </div>


                    <button className={styles.addCartButton} onClick={ addToCart }>
                        <Image src={addCart} />
                        Add to cart
                    </button>
                </div>
            </article>

            {Open && (
                <ModalContainer
                    setOpen={setOpen}
                    product={product}
                />
            )}
        </section>
    );
};

export default Home;
