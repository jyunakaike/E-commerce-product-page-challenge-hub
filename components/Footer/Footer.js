import React from 'react';

const Footer = () => {
    return (

        < div className="attribution" >
            Challenge by < a href="https://www.frontendmentor.io?ref=challenge" target="_blank" > Frontend Mentor</a >.
            Coded by < a href="#" > Your Name Here</a >.
            <style jsx>
            {`
                .attribution {
                    font - size: 11px;
                    text-align: center; 
                    padding-top: 30px;
                }
                .attribution a {
                    color: hsl(228, 45%, 44%); 
                }
                @media (max-width: 375px) {
                    .attribution {
                        font - size: 11px;
                        text-align: center; 
                        padding-top: 30px;
                    }
                    .attribution a {
                        color: hsl(228, 45%, 44%); 
                    }
                }
            `}
            </style>
        </div >


    );
};

export default Footer;
