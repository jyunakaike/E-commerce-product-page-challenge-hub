import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';

import Image from 'next/image';

import closeIcon from '../images/icon-close.svg';
import nextIcon from '../images/icon-next.svg';

import product_1thumb from '../images/image-product-1-thumbnail.jpg'
import product_2thumb from '../images/image-product-2-thumbnail.jpg'
import product_3thumb from '../images/image-product-3-thumbnail.jpg'
import product_4thumb from '../images/image-product-4-thumbnail.jpg'

export default function ModalContainer({ setOpen, product }) {
    const id = ['thumb1', 'thumb2', 'thumb3', 'thumb4'] //id thumb

    const [opacity, setOpacity] = useState(id[0]); // change opacity 
    const [productImage, setProductImage] = useState(product[0]); // change Image
    const [IconNumber, setIconNumber] = useState(0); // couunt icon number

    function close() {
        setOpen(false);
    }

    const IconNumberOnclick=  (num)=>{
        setIconNumber(IconNumber =num)
        changeImage(IconNumber, id[IconNumber])

    } 

    const ChangeImageWithIcon = (Iconbool) => {
        // console.log(product.length);
        if (Iconbool) {
            if (IconNumber === 3) {
                null
            }
            else {
                setIconNumber(IconNumber = IconNumber + 1)
                console.log(IconNumber);
                changeImage(IconNumber, id[IconNumber])
            }
        }
        else {
            if (IconNumber === 0) {
                null
            }
            else {
                setIconNumber(IconNumber = IconNumber - 1)
                console.log(IconNumber);
                changeImage(IconNumber, id[IconNumber])
            }
        }
    }
    
    const changeImage = (num, event) => {
        setProductImage(product[num])
        setOpacity(event)
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={style.overlay}>
                <div className={style.modal} >
                    <div className={style.buttonClose} >
                        {/* <button  onClick={close} > */}
                        <Image
                            src={closeIcon}
                            width={30}
                            height={30}
                            onClick={close}
                        />
                        {/* </button> */}
                    </div>

                    <div className={style.MainImageContainer}>
                        <div className={style.nextIcon} onClick={() => ChangeImageWithIcon(false)} >
                            <Image
                                className={style.reverseIcon}
                                src={nextIcon}
                            />
                        </div>
                        <Image
                            className={style.image}
                            src={productImage}
                            height={500}
                            width={500}

                        />
                        <div className={style.nextIcon} onClick={() => ChangeImageWithIcon(true)}>
                            <Image
                                src={nextIcon}
                            />
                        </div>
                    </div>

                    <div className={style.thumbImages}>
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage :style.thumbImageOpacity  }
                            className={(opacity === id[0]) ? style.thumbImage : style.thumbImageOpacity}
                            src={product_1thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[0]} //thumb1
                            onClick={() => IconNumberOnclick(0)}
                        />
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[1]) ? style.thumbImage : style.thumbImageOpacity}
                            src={product_2thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[1]}//thumb2 
                            onClick={() => IconNumberOnclick(1)}
                        />
                        <Image
                            // className={style.thumbImage}

                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[2]) ? style.thumbImage : style.thumbImageOpacity}

                            src={product_3thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[2]} //thumb3
                            onClick={() => IconNumberOnclick(2)}
                        />
                        <Image
                            // className={style.thumbImage}
                            // className={(!opacity) ? style.thumbImage : style.thumbImageOpacity}
                            className={(opacity === id[3]) ? style.thumbImage : style.thumbImageOpacity}
                            src={product_4thumb}
                            alt="Sneakers product"
                            width={100}
                            height={100}
                            id={id[3]} //thumb4
                            onClick={() => IconNumberOnclick(3)}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal-root'),
    );
}

