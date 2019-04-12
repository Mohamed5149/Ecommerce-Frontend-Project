import { Component } from 'react';

class logout extends Component {
    componentDidMount(){
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        this.props.history.push("/login")
    }
    render() {
        return (null)
    }
}
export default logout;