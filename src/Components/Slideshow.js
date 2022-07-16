import React, {useRef, useEffect} from 'react';
import {ReactComponent as ArrowLeft} from '../shared/images/LeftArrow.svg';
import {ReactComponent as ArrowRight} from '../shared/images/RightArrow.svg';
import Car0 from '../shared/images/Car0.png';
import Car1 from '../shared/images/Car1.jpg';
import Car2 from '../shared/images/Car2.webp';
import Car3 from '../shared/images/Car3.webp';
import Car4 from '../shared/images/Car4.png';
import Car5 from '../shared/images/Car5.jpg';
import './Slideshow.css';

const Slideshow = () => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    //Boton para moverse al siguiente
    const siguiente = () => {
        if (slideshow.current.children.length > 0) {
            //Obtener el primer elemento que tenga el slideshow
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `500ms ease-out all`;

            const slideWidth = slideshow.current.children[0].offsetWidth;

            //Mover el slideshow
            slideshow.current.style.transform = `translateX(-${slideWidth}px)`;

            const transicion = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                //Tomar el primer elemento y mandarlo al final 
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }   

            //Eventlistener para cuando termina la transicion
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    
    //Boton para moverse al slider al anterior
    const anterior = () => {
        if (slideshow.current.children.length > 0) {
            //Obtener el primer elemento que tenga el slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const slideWidth = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideWidth}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `500ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    //Slider automatico
    useEffect(() => {
        //Intervalo
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 5000);

        //Pausarlo si esta el mouse encima
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        })

        //Reanudar el autoplay
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, 5000);
        })
    }, []);

    return (
        <div className="container">
            <div className="slideshowContainer" ref={slideshow}>
                <div className="slide">
                    <img src={Car0} resizeMode="stretch" width={1000} />
                </div>
                <div className="slide">
                    <img src={Car1} resizeMode="stretch" width={1000} />
                </div>
                <div className="slide">
                    <img src={Car2} resizeMode="stretch" width={1000} />
                </div>
                <div className="slide">
                    <img src={Car3} resizeMode="stretch" width={1000} />
                </div>
                <div className="slide">
                    <img src={Car4} resizeMode="stretch" width={1000} />
                </div>
                <div className="slide">
                    <img src={Car5} resizeMode="stretch" width={1000} />
                </div>
            </div>
            <div className="controles">
                <button className="botonIzquierdo" onClick={anterior}>
                    <ArrowLeft />
                </button>
                <button className="botonDerecho" onClick={siguiente}>
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
}   

export default Slideshow;