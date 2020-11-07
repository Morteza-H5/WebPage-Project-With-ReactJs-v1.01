import React , {Component} from 'react';
import { Button } from 'primereact/button';
import {stack as Menu } from 'react-burger-menu';
import{ SiWikipedia , BiPhoneCall,  CgMenuGridO, FcApproval, FcConferenceCall}from 'react-icons/all';
import Desktop from '../Desktop';
import Mobile from '../Mobile';
import Tablet from '../Tablet';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false,
              };
    }
    /////// chang close menu/////////
    changCmenu(){
        if(this.state.open===true){
        this.setState({
          open:false,
        })
       }
        else{ this.setState({
         open:true,
       })
     }
      }
      //////////Render//////////
    render() { 
        return ( 
       <div>
            {/*..............Desktop.......*/}
            <Desktop  >
            <div className="desktop-head">
                         <hr className="desktop-head-gradient"/>
                         <a className="logo0" href="www.5040.ir">
                           <span className="logo1"></span>
                           <span className="logo2 "></span>
                           <span className="logo3"></span>
                           <span className="logo4"></span>
                           <span className="logo5"></span>
                         </a>
                        <a href="/" className="a-desktop" style={{'marginLeft':'79%','marginTop':'1.25%','position':'inherit'}}>ویکی 5040</a>
                        <a href="/" className="a-desktop" style={{'marginLeft':'69%','marginTop':'1.25%','position':'inherit'}}>دستاوردها</a>
                        <a href="/" className="a-desktop " style={{'marginLeft':'60%','marginTop':'1.25%','position':'inherit'}}>بازاریابی</a>
                        <a href="/" className="a-desktop" style={{'marginLeft':'50%','marginTop':'1.25%','position':'inherit'}}>تماس با ما</a>
                         <Menu right  width={400} menuClassName="menu" burgerButtonClassName={ "button-menu-desktop" } customBurgerIcon={ <CgMenuGridO/>} onOpen={ this.changCmenu.bind(this) } isOpen={this.state.open} >
              
                              <Button icon="pi pi-times" className="p-button-text p-button-danger  p-button-rounded " onClick={this.changCmenu.bind(this)} /><br/><br/>
                              <a id="home" className="a font-family0" href="/" >5040 ویکی <SiWikipedia style={{'backgroundColor':'white','color':'black'}}/></a><br/><hr/>
                              <a id="about" className="a font-family0" href="/about">تماس با ما <BiPhoneCall  style={{'color':'blue'}}/></a><br/><hr/>
                              <a id="contact" className="a font-family0" href="/contact" > دستاورد ها <FcApproval/></a><br/><hr/>
                              <a id="contact" className="a font-family0" href="/contact" > بازار یابی <FcConferenceCall/></a><br/><hr/>
  
                          </Menu>
            </div>
            </Desktop>
          <Tablet>
            <div className="tablet-head">
              <hr  className="desktop-head-gradient"/>
                        <a className="logo0 logo0-tablet" href="www.5040.ir">
                           <span className="logo1 "></span>
                           <span className="logo2 "></span>
                           <span className="logo3 "></span>
                           <span className="logo4 "></span>
                           <span className="logo5 "></span>
                         </a>
              <Menu right  menuClassName="menu" burgerButtonClassName={" button-menu-tablet" } customBurgerIcon={ <CgMenuGridO  label="menu"/> } isOpen={this.state.open} onOpen={this.changCmenu.bind(this)}>  
                <Button icon="pi pi-times" className="p-button-rounded p-button-help p-button-text" onClick={this.changCmenu.bind(this)} /><br/><br/>
                <a id="home" className="a font-family0" href="/" >5040 ویکی <SiWikipedia style={{'backgroundColor':'white','color':'black'}}/></a><br/><hr/>
                <a id="about" className="a font-family0" href="/about">تماس باما <BiPhoneCall  style={{'color':'blue'}}/></a><br/><hr/>
                <a id="contact" className="a font-family0" href="/contact" > دستاوردها <FcApproval/></a><br/><hr/>
                <a id="contact" className="a font-family0" href="/contact" > بازاریابی <FcConferenceCall/></a><br/><hr/>
              </Menu>
            </div>
            
          </Tablet>
        {/*.................Mobile......*/}
          <Mobile>
            <div className="mobile-head">
              <hr className="desktop-head-gradient"/>
              <a className="logo0 logo0-mobile" href="www.5040.ir">
                           <span className="logo1 "></span>
                           <span className="logo2"></span>
                           <span className="logo3 "></span>
                           <span className="logo4 "></span>
                           <span className="logo5 "></span>
                         </a>
              <Menu right width={450} menuClassName="menu" burgerButtonClassName={" button-menu-mobile"} customBurgerIcon={ <CgMenuGridO/> } isOpen={this.state.open}  onOpen={this.changCmenu.bind(this)} >  
                  <Button icon="pi pi-times" className="p-button-rounded p-button-help p-button-text" onClick={this.changCmenu.bind(this)} /><br/><br/>
                  <a id="home" className="a-mobile font-family0" href="/" >5040 ویکی <SiWikipedia style={{'backgroundColor':'white','color':'black'}}/></a><br/><hr/>
                  <a id="about" className="a-mobile  font-family0" href="/about">تماس باما <BiPhoneCall  style={{'color':'blue'}}/></a><br/><hr/>
                  <a id="contact" className="a-mobile font-family0" href="/contact" > دستاوردها <FcApproval/></a><br/><hr/>
                  <a id="contact" className="a-mobile font-family0" href="/contact" > بازاریابی <FcConferenceCall/></a><br/><hr/>
              </Menu>
            </div>

          </Mobile>
    </div>
         )
        }
}
 
export default Header;