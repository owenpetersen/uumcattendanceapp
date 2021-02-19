import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import {Toolbar, AppBar, Button, TextField} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class VisitorInfo extends Component {
    
    continue = event =>{
        event.preventDefault();
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
                alignItems: 'center',
                position: 'static'
            },
            button: {
                margin: '15px'
            },
            checkbox: {
                position: 'absolute', 
                left: '50%', 
                top: '40%',
                transform: 'translate(-50%, -50%)',
                
            },
            textfield: {
                width: '500px'
            }
            
        }
        
        return (
            <div>

            <AppBar style={styles.appbar}> 
                    <Toolbar style={styles.customToolbar}>
                        Enter Your Information Here
                    </Toolbar> 
                </AppBar>
            <FormControlLabel
            control={<Checkbox checked={this.props.pastorContactFlag} onClick={this.props.handleCheckbox("pastorContactFlag")} name="pastor" />}
            label="Would you like a pastor to contact you?"
            />
            <br/>
            <br/>
            <FormControlLabel
            control={<Checkbox checked={this.props.prayerTeamContactFlag} onClick={this.props.handleCheckbox("prayerTeamContactFlag")} name="prayer" />}
            label="Would you like the prayer team to contact you?"
            />
            <br/>
            <br/>
            <FormControlLabel
            control={<Checkbox checked={this.props.stephenMinistryContactFlag} onClick={this.props.handleCheckbox("stephenMinistryContactFlag")} name="stephen" />}
            label="Would you like the Stephen Ministry team to contact you?"
            />
            <br/>
            <Button variant="contained" style={styles.button}  onClick={this.back}> Back</Button>

            <Button variant="contained" style={styles.button} primary="true" onClick={this.continue}>Continue</Button>
            </div>
        )
    }
}

export default VisitorInfo
