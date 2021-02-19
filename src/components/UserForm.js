import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails'
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'
import Success from './Success'
import VisitorInfo from './VisitorInfo'

export class UserForm extends Component {
    
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: '',
            numberOfAttendees: 1,
            eventType: "",
            visitorFlag: false,
            memberFlag: false,
            pastorContactFlag: false,
            prayerTeamContactFlag: false,
            stephenMinistryContactFlag: false,
            virtualFlag: false,
            prayerRequests: "",
            date: "",
            errorText: '',
            phoneErrorText: '',
            step: 1

        }
        this.prevStep = this.prevStep.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.addtoDB = this.addtoDB.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleErrorText = this.handleErrorText.bind(this)
        this.handlePhoneError = this.handlePhoneError.bind(this)
        
    }

    handleErrorText(){
        this.setState({errorText: "First and Last Name Required"})
    }

    

    handlePhoneError(){
        this.setState({phoneErrorText: "Only numbers may be entered. Please check your input"})
    }

    nextStep = () => {
        const{step} = this.state

        if(this.state.visitorFlag){
            this.setState( {
                step: step + 1
        })
        } else if(this.state.step === 2){
            this.setState( {
                step: step + 2
        })
        } else{
            this.setState( {
                step: step + 1
        })
        }
        
    }

    addtoDB(){
        const requestOptions = {
            FirstName: this.state.firstName,
	        LastName: this.state.lastName,
            EmailAddress: this.state.emailAddress,
            PhoneNumber: this.state.phoneNumber,
            NumberOfAttendees: this.state.numberOfAttendees,
            EventType: this.state.eventType,
            MemberFlag: this.state.memberFlag,
            VisitorFlag: this.state.visitorFlag,
            PastorContactFlag: this.state.pastorContactFlag,
            PrayerTeamContactFlag: this.state.prayerTeamContactFlag,
            StephenMinistryContactFlag: this.state.stephenMinistryContactFlag,
            PrayerRequests: this.state.prayerRequests,
            VirtualFlag: this.state.virtualFlag
          }
          const requestData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestOptions)
          }
          
          fetch("http://localhost:5000/api/events/4/attendance", requestData)
            .then(console.log("done"))
    }

    prevStep = () => {
        const{step} = this.state

        if(this.state.visitorFlag){
            this.setState( {
                step: step - 1
        })
        } else if(!this.state.visitorFlag && this.state.step === 4){
            this.setState( {
                step: step - 2
        })
        } else{
            this.setState( {
                step: step - 1
        })
        }

        
    }

    handleChange = input => event =>{
        this.setState({[input]: event.target.value})
    }

    handleDateChange(event){
        this.setState({date: event.target.value})
    }

    handleCheckbox = input => () =>{
        switch(input){
            case 'visitorFlag':
                return(
                    this.setState((prevState) => {
                        return{
                            visitorFlag: !prevState.visitorFlag
                        }
                        
                    }) 
                )
            case 'pastorContactFlag':
                return(
                    this.setState((prevState) => {
                        return{
                            pastorContactFlag: !prevState.pastorContactFlag
                        }
                    })
                )
            case 'prayerTeamContactFlag':
                return(
                    this.setState((prevState) => {
                        return{
                            prayerTeamContactFlag: !prevState.prayerTeamContactFlag
                        }
                    })
                )
            case 'stephenMinistryContactFlag':
                return(
                    this.setState((prevState) => {
                        return{
                            stephenMinistryContactFlag: !prevState.stephenMinistryContactFlag
                        }
                    })
                )
            case 'virtualFlag':
                return(
                    this.setState((prevState) => {
                        return{
                            virtualFlag: !prevState.virtualFlag
                        }
                    })
                )

            default:
                return(
                    console.log('error')
                )
        }
        
        //console.log("pastor", this.state.pastorContactFlag)
    }

    render() {
        const{step} = this.state
        const{firstName, lastName, emailAddress, phoneNumber, errorText, phoneErrorText} = this.state
        const values = {firstName, lastName, emailAddress, phoneNumber, errorText, phoneErrorText}
        const{numberOfAttendees, visitorFlag, memberFlag, pastorContactFlag, prayerTeamContactFlag, stephenMinistryContactFlag, prayerRequests} = this.state
        const flags = {numberOfAttendees, visitorFlag, memberFlag, pastorContactFlag, prayerTeamContactFlag, stephenMinistryContactFlag, prayerRequests}

        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        handleErrorText={this.handleErrorText}
                        handlePhoneError={this.handlePhoneError}
                        />
                )
            case 2:
                return(
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    flags = {flags}
                    handleCheckbox = {this.handleCheckbox}
                    handleChange = {this.handleChange}
                    handleDateChange = {this.handleDateChange}
                    />
                )
            case 3:
                return(
                    <VisitorInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    flags = {flags}
                    handleCheckbox = {this.handleCheckbox}
                    handleChange = {this.handleChange}
                    />
                )        
            case 4:
                return(
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    flags = {flags}
                    />
                )
            case 5:
                
                return(
                    <Success
                    addtoDB={this.addtoDB}
                    />
                )
            default:
                return(
                    <h1>error</h1>
                )
        }
    }
}

export default UserForm
