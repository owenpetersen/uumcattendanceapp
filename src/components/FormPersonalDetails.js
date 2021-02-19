import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import {Toolbar, AppBar, Button, TextField} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export class FormPersonalDetails extends Component {
    continue = event =>{
        event.preventDefault();
        this.props.nextStep()
    }

    back = event =>{
        event.preventDefault();
        this.props.prevStep()
    }

    visitorCheckBox(input){
        input = !input
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
                <br/>
                <TextField
                id="date"
                label="Event Date"
                type="date"
                defaultValue="2020-01-1"
                onChange={this.props.handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <br/>
                <br/>
                <label htmlFor="eventsList">What event are you attending? </label>
                <select name="eventsList" id="eventsList">
                    <option value="9AM Service">9AM Service</option>
                    <option value="11AM Service">11AM Service</option>
                    <option value="Youth Group">Youth Group</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Other">Other</option>
                </select>

                <br/>
                <br/>
                <FormControlLabel
                control={<Checkbox checked={this.props.virtualFlag} onCheck={this.props.handleCheckbox("virtualFlag")} name="virtual" />}
                label="Are you attending virtually?" 
                />
                <br/>
                <br/>
                    <FormControlLabel
                    control={<Checkbox checked={this.props.visitorFlag} onClick={this.props.handleCheckbox("visitorFlag")} name="visitor" />}
                    label="Are you a visitor?" 
                    />
                    <br/>
                    <br/>
                    <TextField id="standard-basic" style ={styles.textfield} label="Prayer Requests" onChange={this.props.handleChange('prayerRequests')} defaultValue={values.prayerRequests}/>
                    <br/>
                    <br/>
                    <Button variant="contained" style={styles.button}  onClick={this.back}> Back</Button>

                    <Button variant="contained" style={styles.button} primary="true" onClick={this.continue}>Continue</Button>
                
                
                <br/>

                
                
            </div>
        )
    }
}

export default FormPersonalDetails