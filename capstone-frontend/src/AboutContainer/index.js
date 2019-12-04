import React from 'react'
import { Container } from 'semantic-ui-react'

const AboutContainer = () => (
  <Container>
    <main style={{
      background: 'LightSlateGray',
      backgroundSize: 'cover'
     }}>

    <h1 style={{
        fontWeight: 'bolder',
        textAlign: 'center',
        padding: '15px',
        textTransform: 'uppercase',
        fontSize: '3em',
        color: 'RoyalBlue'
    }}>About Foam is the Home</h1>
    
    <p style={{
        fontSize: 25,
        fontWeight: 'bolder',
        color: 'RoyalBlue'
    }}> 
App for outdoor enthusiasts and related industry.  Provides flow rates and data of river sections, weather forecast for the sections, and campgrounds.  Will require web scraping for river data, API for weather, and may manually put in campgrounds which is the stretch goal.
User can view all major river systems.  They can select a river system and view data sets on different sections of the rivers.  Additionally, they can view the weather forecast for the area.  This will allow the user to see the status of their favored river, and the forecast to plan a recreational trip to the area.  The data will be in updated daily. Additionally, users can select favorite rivers.
    </p>
    </main>
  
  </Container>
)

export default AboutContainer