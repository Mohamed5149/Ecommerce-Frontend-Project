import React, { Component } from 'react';
import * as actions from '../../store/actions/actions';
import classes from './login.module.css';

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        errorFlag: false
    }
    render() {
        let error = this.state.errorFlag ? <h3>Login Error</h3> : null;
        return (
            <>
                {error}
                <div className={classes.LogForm}>
                    <input className={classes.input2} onChange={(event) => { this.setState({ username: event.target.value }) }} placeholder="User Name"></input>
                    <input className={classes.input2} onChange={(event) => { this.setState({ password: event.target.value }) }} type="password" placeholder="Password"></input>
                    <button className={classes.btn2} onClick={(event) => {
                        event.preventDefault();
                        actions.login(this.state).then(res => {
                            localStorage.setItem('token', res.data.token);
                            localStorage.setItem('userid', res.data.user._id);
                            this.props.history.push('/products');
                        }).catch(err => {
                            this.setState({ errorFlag: true })
                        })
                    }}>Login</button> 
                </div>
            </>
        )
    }
}
export default LoginForm;