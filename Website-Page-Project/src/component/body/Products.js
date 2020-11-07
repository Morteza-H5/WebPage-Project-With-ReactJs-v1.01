import React, { Component } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import  Desktop from '../Desktop';
import Tablet from '../Tablet';
import Mobile from '../Mobile';



class Products extends Component {
  constructor(props){
      super(props);
      this.state = {
        Products:[
         {image:'I.jpg',name:"Galaxy TAB 10.1 2019 LTE 32GB",price:'T 6,399,000'},
         {image:'I-1.jpg',name:"تبلت لنوو TAB M7 7305X 32GB",price:'T 3,499,000'},
         {image:'I-2.jpg',name:"Galaxy Tab A 8.0 2019 LTE 32GB SM-T295",price:'T 4,299,000'},
         {image:'I-3.jpg',name:'Galaxy TAB A 8.0 2019 LTE 32GB SM-P205',price:'T 7,799,000'},
         {image:'I-4.jpg',name:'  ظرفیت 1 ترابایتiPad Pro 2020 تبلت اپل  مدل ',price:'T 69,920,000'}
        ],
        Produc:[
          {image:'II-1.jpg',name:'vivoBook  X540MB 15 ASUS ',price:'T13,600,000'},
          {image:'II.jpg',name:'vivoBook  K543UB 15  ASUS ',price:'T18,940,000'},
          {image:'II-4.jpg',name:'ThinkPad E590-E 15.6  lenovo',price:'T15,900,000'},
          {image:'II-5.jpg',name:'MacBook Pro MVVKK2 16 2019',price:'T89,954,000'},
          {image:'II-2.jpg',name:'ROG Zephyrus Duo 15 GX550LWS ASUS ',price:'T129,500,000'},
          {image:'II-3.jpg',name:'ZenBook Duo UX481FLC -AP 14 ASUS ',price:'T46,900,000'},
        ],
        Prod:[
            {image:'III.jpg',name:'Astro Observation ',price:'T445,000'},
            {image:'III-3.jpg',name:'تلسکوپ کد 1010',price:'T2,200,000'},
            {image:'III-1.jpg',name:'PowerSeeker ',price:'T4,290,000'},
            {image:'III-2.jpg',name:'Celestial ody Accidence ',price:'T690,000'},
        ],
        Pro:[
            {image:'V.jpg',name:'LG model SXP450WB',price:'T74,300,000'},
            {image:'V-1.jpg',name:'سلیور  SR-103',price:'T16,400,000'},
            {image:'V-2.jpg',name:'SAMSUNG model FSR12',price:'T91,500,000'},
            {image:'V-3.jpg',name:'دوو  D2S-3033S',price:'T45,374,000'},
        ],
        Pr:[
            {image:'vi.jpg',name:'خودرو  بوگاتی اتوماتیک سال 2016',price:'ناموجود'},
            {image:'vi-1.jpg',name:'خودرو لامبورگینی اتوماتیک سال 2016',price:'ناموجود'},
            {image:'vi-2.jpg',name:'خودرو بی ام دبلیو اتوماتیک سال 2016',price:'ناموجود'},
            {image:'vi-3.jpg',name:'خودرو هامر اتوماتیک سال 2016',price:'ناموجود'},
        ]
          };

          this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];
  }
productTemplate(product) {
    return (
        <div className="product-item">
            <div className="product-item-content">
                <div >
                    <img src={product.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                </div>
                <div>
                     <h2 className="name">{product.name}</h2>
                     <h3 className="price">{product.price}</h3>
                    <br/>
                    <div >
                        <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                        <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                        <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                    </div>
                </div>
            </div>
        </div>
        );
}
    render() { 
        return (
            <div>
                <Desktop>
                {/* header={<h3 ></h3>} */}
                    <Carousel value={this.state.Products} autoplayInterval={3300}  numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel0-des" circular  itemTemplate={this.productTemplate.bind(this)}  />
                    <Carousel value={this.state.Produc} autoplayInterval={3000}  numVisible={2} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel1-des" circular  itemTemplate={this.productTemplate.bind(this)} />
                    <Carousel value={this.state.Prod} autoplayInterval={2900}  numVisible={1} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel2-des" circular  itemTemplate={this.productTemplate.bind(this)} />
                    <Carousel value={this.state.Pro} autoplayInterval={3600}  numVisible={1} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel3-des" circular  itemTemplate={this.productTemplate.bind(this)} />
                    <Carousel value={this.state.Pr} autoplayInterval={3000}  numVisible={1} numScroll={1}   responsiveOptions={this.responsiveOptions} className="carousel-des carousel4-des" circular  itemTemplate={this.productTemplate.bind(this)} />
                </Desktop>
                <Tablet>
                     <Carousel value={this.state.Products} autoplayInterval={3300}  numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel-tab" circular  itemTemplate={this.productTemplate.bind(this)}/>
                     <Carousel value={this.state.Produc} autoplayInterval={3000}  numVisible={2} numScroll={1}  className="carousel-des carousel1-tab" circular  itemTemplate={this.productTemplate.bind(this)} />
                     <Carousel value={this.state.Prod} autoplayInterval={2900}  numVisible={1} numScroll={1}  className="carousel-des carousel2-tab" circular  itemTemplate={this.productTemplate.bind(this)} />
                     <Carousel value={this.state.Pro} autoplayInterval={3600}  numVisible={1} numScroll={1}  className="carousel-des carousel3-tab" circular  itemTemplate={this.productTemplate.bind(this)} />
                     <Carousel value={this.state.Pr} autoplayInterval={3600}  numVisible={1} numScroll={1}   className="carousel-des carousel4-tab" circular  itemTemplate={this.productTemplate.bind(this)} />
                </Tablet>
                <Mobile>
                  <Carousel value={this.state.Products} autoplayInterval={3300}  numVisible={3} numScroll={1} responsiveOptions={this.responsiveOptions}  className="carousel-des carousel-mob" circular  itemTemplate={this.productTemplate.bind(this)}/>
                  <Carousel value={this.state.Produc} autoplayInterval={3000}  numVisible={2} numScroll={1}   className="carousel-des carousel1-mob" circular  itemTemplate={this.productTemplate.bind(this)} />
                  <Carousel value={this.state.Prod} autoplayInterval={2900}  numVisible={1} numScroll={1}   className="carousel-des carousel2-mob" circular  itemTemplate={this.productTemplate.bind(this)} />
                  <Carousel value={this.state.Pro} autoplayInterval={3000}  numVisible={1} numScroll={1}  className="carousel-des carousel3-mob" circular  itemTemplate={this.productTemplate.bind(this)} />
                  <Carousel value={this.state.Pr} autoplayInterval={3600}  numVisible={1} numScroll={1}   className="carousel-des carousel4-mob" circular  itemTemplate={this.productTemplate.bind(this)} />
                </Mobile>
            </div>
        );
    }
}
 
export default Products;