import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';

import Image from 'next/image';

import product_1thumb from '../images/image-product-1-thumbnail.jpg'
import product_2thumb from '../images/image-product-2-thumbnail.jpg'
import product_3thumb from '../images/image-product-3-thumbnail.jpg'
import product_4thumb from '../images/image-product-4-thumbnail.jpg'

export default function ModalContainer({ setOpen, product }) {
    const [productImage, setProductImage] = useState(product[0]);
    const [opacity, setOpacity] = useState('thumb1');

    const id = ['thumb1','thumb2','thumb3','thumb4']

    function close() {
        setOpen(false);
    }

    const changeImage = (num, event) => {
        setProductImage(product[num])
        // setOpacity(true)
        // event.target.getElementById()
        console.log(event);
        setOpacity(event.target.id)
    }



    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={style.overlay}>
                <button onClick={close} >Close</button>
                <div className={style.modal}>
                    <div>
                    <Image
                        className={style.image}
                        src={productImage}
                        height={1000}
                        width={1000}
                    />

                    </div>
                    
                    <div className={style.thumbImages}>
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage :style.thumbImageOpacity  }
                            className={(opacity === id[0])? style.thumbImage :style.thumbImageOpacity}
                            src={product_1thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[0]}
                            onClick={(e) => changeImage(0, e)}
                        />
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[1])? style.thumbImage :style.thumbImageOpacity}
                            src={product_2thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[1]}
                            onClick={(e) => changeImage(1, e)}
                        />
                        <Image
                            // className={style.thumbImage}

                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[2])? style.thumbImage :style.thumbImageOpacity}
                            
                            src={product_3thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[2]}
                            onClick={(e) => changeImage(2, e)}
                        />
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[3])? style.thumbImage :style.thumbImageOpacity}
                            src={product_4thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[3]}
                            onClick={(e) => changeImage(3, e)}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal-root'),
    );
}

