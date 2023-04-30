import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const image=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef=React.useRef(null)
  const scroll=(direction)=>{
    const { current }= scrollRef
    if(direction==="left"){
      current.scrollLeft-=300;
    } else{
      current.scrollLeft+=300;
    }
  }
  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>photo gallery</h1>
        <p className='p__opensans' style={{color:"#aaa",marginTop:"2rem"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}>
          {image.map((img,index)=>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={img} alt="gallery_image" />
              <BsInstagram className='gallery__image-icon' style={{color:"#FFF"}}/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll("left")}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll("right")}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
