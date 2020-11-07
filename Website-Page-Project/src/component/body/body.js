import React, {Component } from 'react';
import Gallry from './Gallery';
import Barchasb from './Barchasb';
import Products from './Products';



class Body extends Component {
    render() { 
     return (  
                <div>  
                    <Gallry/>
                    <Barchasb/>
                    <Products/>
                </div>
            );
    }
}
export default Body;