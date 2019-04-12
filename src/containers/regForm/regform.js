import React, { Component } from 'react';
import * as  actions from '../../store/actions/actions';
import classes from './regForm.module.css';

class RegForm extends Component {
    state = {
        username: "",
        password: "",
        errorFlag: false
    }
    render() {
        let error = this.state.errorFlag ? <h3>Registration Error</h3> : null;
        return (
            <>
                <div className={classes.RegForm}>
                    {error}
                    <input className={classes.input1} onChange={(event) => { this.setState({ username: event.target.value }) }} placeholder="Name"></input>
                    <input className={classes.input1} onChange={(event) => { this.setState({ password: event.target.value }) }} type="password" placeholder="Password"></input>
                    <button className={classes.btn1} onClick={(event) => {
                        event.preventDefault();
                        actions.addUser(this.state).then(res => {
                            this.props.history.push('./login');
                        }).catch(err => {
                            this.setState({ errorFlag: true })
                        })
                    }}
                    >Save</button>
                </div>
            </>
        )
    }
}
export default RegForm;