import React from 'react';
import styles from './home.module.css'


// Images
import Image from 'next/image';
import product_1 from '../images/image-product-1.jpg'


const Home = () => {
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
                        src={product_1}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_1}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_1}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                    <Image
                        className={styles.thumbImage}
                        src={product_1}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                    />
                </div>

            </div>
            <article className='homeArticles'>
                <div>SNEAKER COMPANY</div>

                <h1>Fall Limited Edition Sneakers</h1>
                <p>  These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div>
                    <div>$125</div>
                    <div>50%</div>
                    <div>$250</div>
                </div>
                <div>
                    <div>
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
