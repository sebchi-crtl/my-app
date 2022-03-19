
import '../App.css';
// import {Button, Container, Row} from 'react-bootstrap';

export default function Offers(){

    let images = document.querySelectorAll('.img');
    let slider = document.querySelector('.slider');
    let sliderWidth;
    let imageWidth;
    let current = 0;
    let target = 0;
    let ease = .05

    images.forEach((img, idx) => {
        img.style.backgroundImage = `url(./image/${idx+1}.jpg)`
    });

    function lerp(start, end, t){
        return start * (1-t) + end * t;
    }

    function setTransform(el, transform){
        el.style.transform = transform;
    }

    function init(){
        sliderWidth = slider.getBoundingClientRect().width;
        imageWidth = sliderWidth / images.length;
        document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
        
    }

    function animate(){
        current = parseFloat(lerp(current, target, ease)).toFixed(2);
        target = window.scrollY;
        setTransform(slider, `translateX(-${current}px)`)
        requestAnimationFrame(animate);
    }

    init();
    animate()

    return (
      <div className="slider">
          <div className="slider-inner">
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
            <div className="item">
                <div className="img">
                    
                </div>
            </div>
          </div>
      </div>
    )
  
}


