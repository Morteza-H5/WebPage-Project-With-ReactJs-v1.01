import React, { Component } from 'react';
import Header from './Head/header';
import Body from './body/body';
import Footter from './footer/footer'
import Tablet from './Tablet';

class App extends Component {


    render() {
        return (
          <div className="body" >
                    <Header/>
                    <Body/>
                    <Footter/>
             <Tablet>
                    <Header/>
                    <Body/>
                    <Footter/>
                    <div style={{'padding':'156.75em 0em'}}></div>
             </Tablet>
            
          </div>
        );
    }
}

export default App;