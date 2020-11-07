import React, { Component } from 'react';
import Desktop from '../Desktop'
import Tablet from '../Tablet';
import Mobile from '../Mobile'
class Footter extends Component {
    
    render() { 
        return (
            <div>
                <Desktop>
                <hr className="desktop-footer-gradient desktop-footer0-gradient"/>
                <div>
                    <span className="footer-des-br footer-des-br0"></span>
                    <span className="footer-des-br footer-des-br1"></span>
                    <span className="footer-des-br footer-des-br2"></span>
                    <span className="footer-des-br footer-des-br3"></span>
                    <span className="footer-des-br footer-des-br4"></span>
                    <span className="footer-des-br footer-des-br5"></span>
                    <span className="footer-des-br footer-des-br6"></span>
                </div>
                <div className="footer-des1">
                    <span className="footer-des-lo footer-des-lo0"></span>
                    <span className="footer-des-lo footer-des-lo1"></span>
                    <span className="footer-des-lo footer-des-lo2"></span>
                    <span className="footer-des-lo footer-des-lo3"></span>
                    <a href="/" className="footer-des-lo footer-des-lo4">.</a>
                    <a href="/" className="footer-des-lo footer-des-lo5">.</a>
                    <h2 className="footer-des-pro"><a style={{'textDecoration':'none','color':'black'} } href="مرتضی هوشمند برنامه نویس">&copy;Morteza Hooshmand</a></h2>
                </div>
                </Desktop>
                <Tablet>
                <hr className="desktop-footer-gradient  tab-footer-gradient "/>
                <div className="footer-tab1">
                   <a href="/" className=" footer-tab-lo4 ">.</a>
                   <a href="/" className="footer-tab-lo5">.</a>
                   <h2 className="footer-tab-pro"><a style={{'textDecoration':'none','color':'black'} } href="مرتضی هوشمند برنامه نویس">&copy;Morteza Hooshmand</a></h2>
                </div>
                </Tablet>
                <Mobile>
                <hr className="desktop-footer-gradient mob-footer-gradient "/>
                <div className="footer-mob1">
                    <a href="/" className=" footer-tab-lo4 ">.</a>
                    <a href="/" className="footer-tab-lo5">.</a>
                    <h2 className="footer-tab-pro"><a style={{'textDecoration':'none','color':'black'} } href="مرتضی هوشمند برنامه نویس">&copy;Morteza Hooshmand</a></h2>

                </div>
                </Mobile>
            </div>
         );
    }
}
 
export default Footter;