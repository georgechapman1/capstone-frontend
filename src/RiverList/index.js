import React, {Component} from 'react'
import {Button, Card} from 'semantic-ui-react'


class RiverList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const renderRivers = this.props.rivers.map((river)=>{
          return (
            <Card className="cards">
            <Card.Header key={river.river_section_number}>
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
            <Button onClick={() => this.props.openAndEdit(river)} >Edit River</Button>
            <Button onClick={() => this.props.deleteRiver(river)}>Delete River</Button>
            </Card>    
        
          ) 
      
    })
  
    return (
        <div>
            {renderRivers}
        </div>

    )
}
}    
export default RiverList

