import React from 'react'; 
import Footer from '../../components/Footer';
import {Container} from 'react-bootstrap';
import {imageData} from '../data';
import './other.css';
import GalleryItem from '../GalleryItem';

const Other = () => { 
  const images = imageData.map((tupples, index) => 
    tupples.map((url, elementIndex) => (
    <GalleryItem  
      key={url} 
      index={elementIndex} 
      src={url} 
      columnOffset={index*14} 
      />
    ))
  ); 
  return <div className='mt-5'>
    <Container fluid>
      <div className="main-container">
        <div className="scroll-container">
          <div className="content">
            <div className="gallery">
              { images }
              <div className="gallery-helper">
                scroll to discover more
              </div>
              <div className="behind-text fill">
                this are my works with love
              </div>
              <div className="behind-text outline">
                this are my works with love
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Container>
  </div>;
};

export default Other;


