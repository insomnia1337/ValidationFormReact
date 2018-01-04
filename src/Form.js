import React from 'react'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends React.Component{

    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        userName: "",
        userNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""

    };





   change = (e) =>{
       this.props.onChange({[e.target.name]: e.target.value})
       this.setState({
       [e.target.name]: e.target.value
       });
   };

   validate = () => {
    let isError = false;
    const errors = {
        firstNameError: "",
        lastNameError: "",
        userNameError: "",
        emailError: "",
        passwordError: ""
    };
    if (this.state.userName.length < 5){
            isError = true;
            errors.userNameError = 'User needs to be atleast 5 characters long';

    }
    if (this.state.email.indexOf('@')===-1) {
        isError = true;
        errors.emailError = 'Requires valid email';

}
        this.setState({
            ...this.state,
            ...errors
        });
    
        return isError;
    
};

   onSubmit = (e) =>{
       e.preventDefault();
     
       //this.props.onSubmit(this.state);
      const err = this.validate();

      if(!err){
       this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        userName: "",
        userNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
       })
       this.props.onChange({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
       });
    }
   };

render(){
    return(
        
        <form>
          <TextField
        name='firstName'
        hintText="First name"
        floatingLabelText="First name"
        floatingLabelFixed
        value={this.state.firstName} 
        onChange={e => this.change(e)} 
        errorText={this.state.firstNameError}
         />
        <br />
        <TextField
        name='lastName'
        hintText="Last name"
        floatingLabelText="Last name"
        floatingLabelFixed
        value={this.state.lastName} 
        onChange={e => this.change(e)} 
        errorText={this.state.lastNameError}
         />
         <br />
         <TextField
        name='userName'
        hintText="User name"
        floatingLabelText="User name"
        floatingLabelFixed
        value={this.state.userName} 
        onChange={e => this.change(e)} 
        errorText={this.state.userNameError}
         />
          <br />
          <TextField
        name='email'
        hintText="Email"
        floatingLabelText="Email"
        floatingLabelFixed
        value={this.state.email} 
        onChange={e => this.change(e)} 
        errorText={this.state.emailError}
         />
          <br />
          <TextField
        name='password'
        hintText="Password"
        floatingLabelText="Password"
        floatingLabelFixed
        value={this.state.password} 
        onChange={e => this.change(e)} 
        errorText={this.state.passwordError}
        type="password"
         />
          <br />
        <RaisedButton label="Submit" onClick={(e)=> this.onSubmit(e)} primary />
        </form>
    );
}

}


export default Form;