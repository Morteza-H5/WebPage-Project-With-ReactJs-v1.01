import React, { Component } from 'react';
import Desktop from '../Desktop';
import Tablet from '../Tablet';
import Mobile from '../Mobile';

class Barchasb extends Component {
    render() { 
        return ( 
            <div >
                <Desktop>
                  <a className="bar1 a"  href="/">5040</a>
                  <a className="bar2 bar1 a" href="/">5040</a>
                  <a className="bar1 bar3  a"  href="/">5040</a>
                  <a className="bar1 bar4 a"  href="/">5040</a>
                </Desktop>
                <Tablet>
                  <a className="bar1 bar1-tab a"  href="5040.ir">5040</a>
                  <a className="bar1 bar1-tab bar2-tab a " href="5040.ir">5040</a>
                  <a className="bar1  bar1-tab  bar3-tab a"  href="5040.ir">5040</a>
                  <a className="bar1 bar1-tab bar4-tab a"  href="5040.ir">5040</a>
                </Tablet>
                <Mobile>
                    <a className="bar1 bar1-mob a"  href="5040.ir">5040</a>
                    <a className="bar1 bar1-mob bar2-mob a " href="5040.ir">5040</a>
                    <a className="bar1  bar1-mob  bar3-mob a"  href="5040.ir">5040</a>
                    <a className="bar1  bar1-mob  bar4-mob a"  href="5040.ir">5040</a>
                </Mobile>
            </div>
         );
    }
}
 
export default Barchasb;