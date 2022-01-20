import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css'


// export default function Modal({ children }) {
//     return  ReactDOM.createPortal(
//         <div>{children}</div>,
//         document.getElementById('modal')
//     );
// }

export default function ModalContainer({ setOpen, /*data, setData */ }) {
    // const [localData, setLocalData] = useState(data);
    // const { clicks } = localData;

    function close() {
        setOpen(false);
    }

    return ReactDOM.createPortal(
        <>
            <div className={style.overlay}>
                <div className={style.modal}>
                    <div className={style.header}>
                        <button onClick={close} >Close</button>
                    </div>
                </div>
            </div>
            {/* <div className={style.modal}>
            <div className={style.modalMain}>
                
            <button onClick={close} />
            </div>
            </div> */}
        </>,
        document.getElementById('modal-root'),
    );
}

