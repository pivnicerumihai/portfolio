import Image from "next/image";
import React from "react";
import Button from "../Button/button";

export default function Hero () {
    const mockAPI = new Promise((resolve, reject) => { });
    return (
        <div style={{
            backgroundImage: `url(/images/home.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh' // Adjust the height as needed
        }}>
            <Button buttonName={'Projects'} mt={20} ml={6}/>
            <Button buttonName={'Skills'} mt={20} ml={6}/>
            <Button buttonName={'Contact'} mt={20} ml={6}/>
         
        </div>
    );

}
