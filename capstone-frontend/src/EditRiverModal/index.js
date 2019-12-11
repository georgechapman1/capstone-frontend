import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditRiverModal = (props) => {
  console.log('ed', props)
  return (
    <Modal open={props.open}>
      <Header>Edit River</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
           <Label>
           River System:
          </Label>
          <Form.Input type='text' name='river_system' value={props.riverToEdit.river_system} onChange={props.handleEditChange}/>
          <Label>
            Station Name:
          </Label>
          <Form.Input type='text' name='station_name' value={props.riverToEdit.station_name} onChange={props.handleEditChange}/>
          <Label>
            Time of Reading:
          </Label>
          <Form.Input type='text' name='time_of_reading' value={props.riverToEdit.time_of_reading} onChange={props.handleEditChange}/>
          <Label>
            Gauge Height:
          </Label>
          <Form.Input type='text' name='gauge_height' value={props.riverToEdit.gauge_height} onChange={props.handleEditChange}/>
          <Label>
           Discharge:
          </Label>
          <Form.Input type='text' name='discharge' value={props.riverToEdit.discharge} onChange={props.handleEditChange}/>
          <Label>
           Mean Flow:
          </Label>
          <Form.Input type='text' name='lt_mean_flow' value={props.riverToEdit.lt_mean_flow} onChange={props.handleEditChange}/>
          <Label>
           Median Flow:
          </Label>
          <Form.Input type='text' name='lr_median_flow ' value={props.riverToEdit.lr_median_flow } onChange={props.handleEditChange}/>
          <Modal.Actions>
            <Button color='green' type='submit'>Edit River</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditRiverModal;

