import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import '../index.css'

// this is our presentational component
const RiverSystemList = (props) => {
    const RiverSystemList = props.crimes.map((crime, i) => {
        return(
        <Segment key={i}>
            <span>Block: {crime.block}</span> - <br/>
            <strong>Description: {crime.description}</strong>
            <Button onClick={() => props.deleteCrime(crime.id)}>Delete</Button>
        </Segment>
    )
    })
    return(
        <React.Fragment>
            <h5>River Systems</h5>
            <ul>
                {riverSystemList}
            </ul>
        </React.Fragment>
    )
}
export default RiverSystemList