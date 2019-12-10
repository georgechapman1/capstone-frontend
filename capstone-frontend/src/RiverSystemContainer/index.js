import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import '../index.css'
import { Item, Button, Card } from 'semantic-ui-react';

// this is our presentational component

class RiverSystemContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            rivers: []
        }
    }

    componentDidMount(){
        this.getAllRivers();
    }

    getAllRivers = async () => {
        try {
            const rivers = await fetch(process.env.REACT_APP_API_URL + '/api/v1/rivers/')
            const parsedRivers = await rivers.json()
            console.log(parsedRivers, 'This is the parsed rivers')
            this.setState({
                rivers: parsedRivers.data
            })
            console.log("THIS.STATE.RIVERS::", this.state.rivers)
        } catch(err) {
            console.log(err)
        }
    }
// child compoenent to create a card template to push in object
    render(){   //card template so I can populate it, run a reference to the function
        const renderRivers = this.state.rivers.map((river)=>{
            return(
                <Card className="cards">
                    <Card.Header style={{ font_size: '100px' }}>
                        {river.river_system},
                        {river.station_name}
                    </Card.Header>
                    <Card.Content>
                        Time of Reading: {river.time_of_reading},
                        Gauge Height: {river.gauge_height},
                        Discharge: {river.discharge},
                        Mean Flow:{river.lt_mean_flow},
                        Median Flow: {river.lt_median_flow}
                    </Card.Content>
                    <Button floated='right'>Add River</Button>
                </Card>
            )
        })
         

            // return(<Card><Card.Description>River System:{river.river_system}</Card.Description> <Card.Header>Station Name: {river.station_name}</Card.Header></Card>)
        return(
                // <div className="ui items">
                //     <div className="item">
                //         <div className="middle aligned content">
                //             <div className="header">
                //                 River System: Station Name
                //             </div>
                //             <div className="description">
                //                 <Card.Group itemsPerRow={4}>
                //                     {renderRivers}
                                    
                //                 </Card.Group>
                //             </div>
                //             <div className="extra">
                //                 <div className="ui right floated button">
                //                 Add to My Rivers
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>


                <div >
                    <Card.Group itemsPerRow={3}>
                        {renderRivers}
                    </Card.Group>
                </div>

        )

}}
export default RiverSystemContainer