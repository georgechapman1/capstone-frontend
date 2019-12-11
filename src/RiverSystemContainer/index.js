import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import '../index.css'
import { Container, Item, Button, Card } from 'semantic-ui-react';
import EditRiverModal from '../EditRiverModal';
import RiverList from '../RiverList';

// this is our presentational component

class RiverSystemContainer extends Component { 
    constructor () {
        super();
        this.state = {
            rivers: [],
            showEditModal: false,
            riverToEdit: {
                riverSystem: '',
                stationName: '',
                timeOfReading: '',
                gaugeHeight: '',
                discharge: '',
                ltMeanFlow: '',
                ltMedianFlow: ''
            },
           
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
//EDITING
    openAndEdit = (riverFromTheList) => {
    
        this.setState({
          showEditModal: true,
          riverToEdit: {
            ...riverFromTheList
          } 
        })
        console.log(this.state.riverToEdit, 'river to edit')
        console.log(this.state.showEditModal, riverFromTheList, 'is it hitting true')
      }
      handleEditChange = (e) => {
    
        this.setState({
          riverToEdit: {
            ...this.state.riverToEdit,
            [e.currentTarget.name]: e.currentTarget.value
          }
        });
      }
    
    closeAndEdit = async (e) => {
        e.preventDefault();
        try {
    
          const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/rivers/' + this.state.riverToEdit.river_section_number, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state.riverToEdit),
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          const editResponseParsed = await editResponse.json();
          console.log(editResponseParsed, ' parsed edit')
    
          const newRiverArrayWithEdit = this.state.rivers.map((river) => {
    
            if(river.river_section_number === editResponseParsed.data.river_section_number){
              river = editResponseParsed.data
            }
    
            return river
          });
    
          this.setState({
            showEditModal: false,
            rivers: newRiverArrayWithEdit
          });
          this.getAllRivers()
        } catch(err){
          console.log(err)
        }
    }
    deleteRiver= async(riverId) => {
        console.log(riverId)
        const deleteResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/rivers/' + riverId.river_section_number,  {
            method: 'DELETE',
            credentials: 'include'
        });
        const deleteResponseParsed = await deleteResponse.json();
        // console.log(deleteResponseParsed)
        if (deleteResponseParsed.status.code === 200) {
            this.setState({
                rivers: this.state.rivers.filter((river) => river.river_section_number !== riverId.river_section_number),
                })
        // console.log('hitting delete after set state')
        } else {
            alert('there is an issue');
        } 
    }
    render(){   //card template so I can populate it, run a reference to the function
            return(
               
                <Container>
                    <RiverList rivers={this.state.rivers} openAndEdit={this.openAndEdit} deleteRiver={this.deleteRiver}/>
                    {this.state.showEditModal ? <EditRiverModal handleEditChange={this.handleEditChange} open={this.state.showEditModal} riverToEdit={this.state.riverToEdit} closeAndEdit={this.closeAndEdit}/> : null }
                
                </Container>
            )
    }
    
}


export default RiverSystemContainer