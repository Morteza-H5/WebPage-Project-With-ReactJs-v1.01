import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Desktop from '../Desktop';
import Tablet from '../Tablet';
import Mobile from '../Mobile';


class Gallry extends Component {
  constructor(props){
    super(props);
    this.state={
      images :[
        {original: 'c.jpg'},
        {original: 'b.jpg'},
        {original: 'a.jpg'} 
      ]
    };
  }
    render() { 
        return ( 
          <div>
            <Desktop>
                <div className="gallery-desktop">
                    <ImageGallery items={this.state.images}  showThumbnails={false} autoPlay={true}   slideInterval={5000}    infinite={true}  showIndex={false} isRTL={true}   showBullets={true} />
                </div>
            </Desktop>
            <Tablet>
                <div className="gallery-Tablet">
                   <ImageGallery items={this.state.images}  showThumbnails={false} autoPlay={true}   slideInterval={6000}   infinite={true}  isRTL={true}   showBullets={true} />
                </div>
            </Tablet>
            <Mobile>
                <div className="gallery-mobile">
                  <ImageGallery items={this.state.images}  showThumbnails={false} autoPlay={true}   slideInterval={6000}   infinite={true}  isRTL={true}   showBullets={true} />
                </div>

            </Mobile>
          </div>
              );
    }
}
 
export default Gallry ;