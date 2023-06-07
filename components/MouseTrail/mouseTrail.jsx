'use client'
import React, { useEffect } from 'react';
import './mouseTrail.css'

export default function MouseTrail() {
    useEffect(() => {
        document.addEventListener("mousemove", trail);

        return () => document.removeEventListener("mousemove", trail);
    }, []);

    const trail = (event) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.style.left = `${event.pageX}px`;
        dot.style.top = `${event.pageY}px`;
        dot.style.animation = `trail 0.5s ease-out forwards`;
        document.body.appendChild(dot);
    
        setTimeout(() => {
            dot.remove();
        }, 500);
    };
    

    return null;
}
