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
    }}>About Happy Hydrologist</h1>
    
    <p style={{
        fontSize: 25,
        fontWeight: 'bolder',
        color: 'RoyalBlue'
    }}> 
    <p>This app is made for a hydrologist team that requires a nifty app to make their job easy!</p>
    </p>
    </main>
  
  </Container>
)

export default AboutContainer