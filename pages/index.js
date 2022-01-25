import React, { useState, useContext } from 'react';
import styles from './home.module.css'

// Context
import AppContext from '../context/AppContext';

// components
import ModalContainer from '../modal'


// Images
import Image from 'next/image';

import addCart from '../images/icon-cartWhite.svg'

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

    const product = [product_1, product_2, product_3, product_4] // product array for modal, changeMainImage 

    const { cartItem, setCartItem } = useContext(AppContext) // context of cart 
    const [Open, setOpen] = useState(false); //for modal    
    const [item, setItem] = useState(0); //add to cart 
    const [thumb, setThumb] = useState(product[0]); // change Main image 
    const [hoverIndicator, setHoverIndicator] = useState(0); //hover 
    const [clicked, setClicked] = useState(1); //clicked 
    

    // open Modal
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
    // add to cart
    const addToCart = () => {
        // console.log(`add to cart ${item} ` );
        setCartItem(cartItem = item)
        // console.log(cartItem);
    }

    //  Change Main image
    const changeImage = (num) => {
        setThumb(thumb = product[num - 1])
        setClicked(num)
    }
    // hover 
    const hoverImage =(num)=> {
        setHoverIndicator( hoverIndicator = num)
    }
    const hoverImage1 =()=> {
        setHoverIndicator( hoverIndicator = 0)
    }

    return (
        <section className={styles.homeContainer}>
            <div className={styles.homePictures} >
                <Image
                    className={styles.image}
                    src={thumb}
                    alt="Sneakers product"
                    width={500}
                    height={500}
                    onClick={() => openModal()}
                />
                <div className={styles.thumbImages}>
                    <Image 
                        className={(hoverIndicator ===1 || clicked ===1 ) ? styles.thumbImageOpacity:styles.thumbImage } 
                        src={product_1thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={() => changeImage(1)}
                        onMouseEnter={()=>hoverImage(1)}
                        onMouseLeave={hoverImage1}
                    />

                    <Image
                        className={(hoverIndicator ===2  || clicked ===2  ) ? styles.thumbImageOpacity:styles.thumbImage }
                        src={product_2thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={() => changeImage(2)}
                        onMouseEnter={()=>hoverImage(2)}
                        onMouseLeave={hoverImage1}
                    />
                    <Image
                        className={(hoverIndicator ===3 || clicked ===3 ) ? styles.thumbImageOpacity:styles.thumbImage }
                        src={product_3thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={() => changeImage(3)}
                        onMouseEnter={()=>hoverImage(3)}
                        onMouseLeave={hoverImage1}
                    />
                    <Image
                        className={(hoverIndicator ===4 || clicked ===4 ) ? styles.thumbImageOpacity:styles.thumbImage }
                        src={product_4thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={() => changeImage(4)}
                        onMouseEnter={()=>hoverImage(4)}
                        onMouseLeave={hoverImage1}
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
                        <div className={styles.price}>$125.00</div>
                        <div className={styles.sale} >50%</div>
                    </div>
                    <div className={styles.prevPrice}>$250</div>

                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.toggleButton}  >
                        <span onClick={removeItem} ><Image src={minus} /></span>
                        <div className={styles.toggleNumber}>{item}</div>
                        <span onClick={addItem}><Image src={plus} /></span>
                    </div>


                    <button className={styles.addCartButton} onClick={addToCart}>
                        <Image src={addCart} />
                        <p>Add to cart</p>
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
