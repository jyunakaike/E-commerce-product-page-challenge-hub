import React from 'react';
import styles from './home.module.css'


// Images
import Image from 'next/image';
import product_1 from '../images/image-product-1.jpg'
// import product_2 from '../images/image-product-2.jpg'
// import product_3 from '../images/image-product-3.jpg'
// import product_4 from '../images/image-product-4.jpg'

import product_1thumb from '../images/image-product-1-thumbnail.jpg'
import product_2thumb from '../images/image-product-2-thumbnail.jpg'
import product_3thumb from '../images/image-product-3-thumbnail.jpg'
import product_4thumb from '../images/image-product-4-thumbnail.jpg'

const Home = () => {
    // const imageClick =()=> {
    //     console.log('clicked')
    // }
    return (
        <section className={styles.homeContainer}>
            <div className={styles.homePictures} >
                <Image
                    className={styles.image}
                    src={product_1}
                    alt="Sneakers product"
                    width={500}
                    height={500}
                />
                <div className={styles.thumbImages}>
                    <Image
                        className={styles.thumbImage}
                        src={product_1thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={() => {
                            imageClick()
                        }}
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
                        <div>+</div>
                        <div>3</div>
                        <div>+</div>
                    </div>
                    <button> Add to cart</button>
                </div>
            </article>
        </section>
    );
};

export default Home;
