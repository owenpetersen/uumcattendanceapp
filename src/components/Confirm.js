import React, { Component } from 'react'

import {Toolbar, AppBar, Button, List, ListItem, ListItemText} from '@material-ui/core';



export class Confirm extends Component {
    continue = event =>{
        event.preventDefault();
        console.log(this.props.firstName)
        this.props.nextStep()
    }

    back = event =>{
        event.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        const {values} = this.props;
        
        
        const styles = {
            customToolbar: {
                minHeight: 80,
                alignitems: "center",
                fontSize: '40px'
            },
            appbar: {
                alignitems: 'center'
            },
            button: {
                margin: '15px'
            },
            displayText: {
                secondary: '30px'
            }
            
        }
        
        return (
            <div>
                <AppBar style={styles.appbar}position="static"> 
                    <Toolbar style={styles.customToolbar}>
                        Check Your Information
                    </Toolbar> 
                </AppBar>
                <br/>
                <List alignitems='flex-start'>
                    <ListItem >
                        <ListItemText primary="First Name" secondary={values.firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={values.lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email Address" secondary={values.emailAddress} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Phone Number" secondary={values.phoneNumber} />
                    </ListItem>
                </List>

                <Button variant="contained" style={styles.button}  onClick={this.back}> Back</Button>

                <Button variant="contained" style={styles.button} primary="true" onClick={this.continue}>Continue</Button>
                
                
                <br/>

                
                
            </div>
        )
    }
}

export default Confirm
