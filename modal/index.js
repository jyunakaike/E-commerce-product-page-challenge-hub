import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';

import Image from 'next/image';

import product_1thumb from '../images/image-product-1-thumbnail.jpg'
import product_2thumb from '../images/image-product-2-thumbnail.jpg'
import product_3thumb from '../images/image-product-3-thumbnail.jpg'
import product_4thumb from '../images/image-product-4-thumbnail.jpg'

export default function ModalContainer({ setOpen, product /*data, setData */ }) {
    const [productImage, setProductImage] = useState(product[0]);
    
    function close() {
        setOpen(false);
    }

    const changeImage =(num)=>{
        return setProductImage(product[num])
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className={style.overlay}>
                <button onClick={close} >Close</button>
                <div className={style.modal}>
                <Image 
                    className={style.image}
                    src={productImage}
                    height={1000}
                    width={1000}
                />
                <div className={style.thumbImages}>
                    <Image
                        className={style.thumbImage}
                        src={product_1thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={()=>changeImage(0)}
                    />
                    <Image
                        className={style.thumbImage}
                        src={product_2thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={()=>changeImage(1)}
                    />
                    <Image
                        className={style.thumbImage}
                        src={product_3thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={()=>changeImage(2)}
                    />
                    <Image
                        className={style.thumbImage}
                        src={product_4thumb}
                        alt="Sneakers product"
                        width={100}
                        height={100}
                        onClick={()=>changeImage(3)}
                    />
                </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal-root'),
    );
}

