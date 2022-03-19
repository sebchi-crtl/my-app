  import '../App.css';
import shit from '../custoji.png'
import me from '../sebpng.png'
import meback from '../—Pngtree—memphis style line point line_3797580.png'
import my_logo from '../my_logo.png'
import {Container, Row} from 'react-bootstrap';

export default function Banner(){

    
    // let imagexs = document.querySelectorAll(".img");
    // const image1 = document.getElementById('image1');

    // window.addEventListener('scroll', function() {
    //     const value = window.scrollY;
    //     image1.style.top = value * 1 + 'px';
    //     image1.style.right = value * 2 + 'px';
    // })


    return(
        <div className='banner' id="banner">
            <Container fluid>
                <div className='title'>
                    <Row>
                        <div className="col-md-6 i-left">
                            <h1><img id='me' className='hi_icon' src={my_logo} alt="imag1"></img>Hi! 
                            </h1>
                            <h2 className='pb-3'><span>I'm</span> Chiemelie Nwobodo</h2>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Software Engineer</div>
                                    <div className="i-title-item">Web Developer</div>
                                    <div className="i-title-item">Fashion Designer</div>
                                </div>
                            </div>
                            <h6 className='pt-5'>
                                As a designer and developer currently based in
                                Nigeria with 4+ years of experience,
                                I help companies ideate, build amazing websites and services that are easy to use
                                and deliver end to end solutions for digital products.
                            </h6>
                            {/* <h2>I'm not a great programmer
                                I'm just a good programmer
                                with great habits
                            </h2> */}
                        </div>
                        <div className="col-md-6 i-right">
                            <div>
                                <img id='me' className='i-bg' src={meback} alt="imag1"></img> 
                            </div>
                            {/* <img id='me' className='me' src={me} alt="imag1"></img>   */}
                        </div>
                    </Row>
                    
                    
                    {/* <img id='image1' className='imag1' style={{opacity:0.5 }} src={shit} alt="imag1"></img> */}
                    
                </div>
            </Container>
        </div>
    )
}

