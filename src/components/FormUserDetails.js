import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import {Toolbar, AppBar, Button} from '@material-ui/core';


export class FormUserDetails extends Component {
    
    
    continue = event =>{
        const {values} = this.props;
        event.preventDefault();
        if(values.firstName === '' || values.lastName === ''){
            this.props.handleErrorText()
        } else if(values.phoneNumber.length > 15){
            
        }else{
            this.props.nextStep()
        }
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
                alignItems: 'center'
            },
            button: {
                margin: '15px'
            }
        }
        
        return (
            <div>
                <AppBar style={styles.appbar}position="static"> 
                    <Toolbar style={styles.customToolbar}>
                        Enter Your Information Here
                    </Toolbar> 
                </AppBar>
                <br/>
                <TextField  id="standard-basic" label="First Name" onChange={this.props.handleChange('firstName')} defaultValue={values.firstName} />
                <br/>
                <TextField id="standard-basic" label="Last Name" onChange={this.props.handleChange('lastName')} defaultValue={values.lastName}/>
                <br/>
                <TextField id="standard-basic" label="Email Address" onChange={this.props.handleChange('emailAddress')} defaultValue={values.emailAddress}
                helperText="If you've registered this information before, you can leave it blank"/>
                <br/>
                <TextField id="standard-basic" label="Phone Number" onChange={this.props.handleChange('phoneNumber')} defaultValue={values.phoneNumber}
                helperText="If you've registered this information before, you can leave it blank"/>
                <br/>
                <br/>
                <Button variant="contained" style={styles.button} primary="true"  onClick={this.continue}>Continue</Button>
                <h1>{values.errorText}</h1>
                <h1>{values.phoneErrorText}</h1>
            </div>
        )
    }
}

export default FormUserDetails
