import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Orange from '../Images/Orange.jpeg'
import BlueWhite from '../Images/BlueWhite.jpeg'
import Pink from '../Images/Pink.jpeg'
import WinterFlowers from '../Images/WinterFlowers.jpeg'
import SpringFlowers from '../Images/SpringFlowers.jpeg'
import Green from '../Images/Green.jpeg'
import Dalmatian from '../Images/Dalmatian.jpeg'
import WorkTy from '../Images/WorkTy.jpeg'
import LavaLamp from '../Images/LavaLamp.jpeg'
import SeaFoam from '../Images/Seafoam.jpeg'
import StrongPrint from '../Images/StrongPrint.jpeg'


 
export default class DemoCarousel extends Component {
    
    
    render() {
        return (
            <Carousel width='50%'>
            
                <div className='fabricimage'>
                    <img className='fabricimage' src={Orange} />
                    <p className="legend">Orangtastic</p>
                </div>
                <div>
                    <img className='fabricimage' src={BlueWhite} />
                    <p className="legend">SeaWaves</p>
                </div>
                <div>
                    <img className='fabricimage' src={Pink} />
                    <p className="legend">Bubblegum</p>
                </div>
                <div>
                    <img className='fabricimage' src={WinterFlowers} />
                    <p className="legend">WinterFlowers</p>
                </div>
                <div>
                    <img className='fabricimage' src={SpringFlowers} />
                    <p className="legend">SpringFlowers</p>
                </div>
                <div>
                    <img className='fabricimage' src={Green} />
                    <p className="legend">ForestFlowers</p>
                </div>
                <div>
                    <img className='fabricimage' src={Dalmatian} />
                    <p className="legend">Dalmatian</p>
                </div>
                <div>
                    <img className='fabricimage' src={WorkTy} />
                    <p className="legend">Classic</p>
                </div>
                <div>
                    <img className='fabricimage' src={LavaLamp} />
                    <p className="legend">LavaLamp</p>
                </div>
                <div>
                    <img className='fabricimage' src={SeaFoam} />
                    <p className="legend">SeaFoam</p>
                </div>
                <div>
                    <img className='fabricimage' src={StrongPrint} />
                    <p className="legend">StrongPrint</p>
                </div>
                
            </Carousel>
        );
    }
};
