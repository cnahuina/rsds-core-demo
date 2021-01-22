import React, { Component } from 'react'

import { ColorHeadingComponent, ColorHeadingTwoComponent } from 'rsds-core'

export default class App extends Component{

  render(){
    return (
      <div>
        <ColorHeadingComponent
          text = "Color Heading H1"
          color = {"red"}
        />
        
        <ColorHeadingTwoComponent 
          text = "Color Sub Heading h2" 
          color = {"blue"}
        />

      </div>
    );
  }
  
}
