import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import classes from './addProduct.module.css';

class AddProduct extends Component {
    state = {
        product_id: '',
        name: '',
        description: '',
        price: '',
        discount: '',
        category: '',
        userid: ''
        ,
        updateFlag: false
    }

    getUserId() {
        const userID = localStorage.getItem('userid');
        this.setState({ userid: userID });
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.props.history.push('./login');
        }
        let productID = this.props.match.params.proID;
        if (productID) {
            let productsCopy = [...this.props.products];
            let productIndex = productsCopy.findIndex(pro => pro._id === productID);
            let productDetails = productsCopy[productIndex];
            this.setState({
                product_id: productDetails._id,
                name: productDetails.name,
                description: productDetails.description,
                price: productDetails.price,
                discount: productDetails.discount,
                category: productDetails.category,
                updateFlag: true
            })
        }
        this.getUserId();
    }
    render() {
            return (
                <>
                <div className={classes.add}>
                    <input className={classes.input3} onChange={(event) => { this.setState({ name: event.target.value }) }} value={this.state.name} placeholder="Product Name"></input>
                    <br></br>
                    <input className={classes.input3} onChange={(event) => { this.setState({ description: event.target.value }) }} value={this.state.description} placeholder="Product Description"></input>
                    <br></br>
                    <input className={classes.input3} onChange={(event) => { this.setState({ price: event.target.value }) }} value={this.state.price} placeholder="Product Price"></input>
                    <br></br>
                    <input className={classes.input3} onChange={(event) => { this.setState({ discount: event.target.value }) }} value={this.state.discount} placeholder="Product Discount"></input>
                    <br></br>
                    <input className={classes.input3} onChange={(event) => { this.setState({ category: event.target.value }) }} value={this.state.category} placeholder="Product Category"></input>
                    <br></br>
                    <button className={classes.input3}
                        onClick={(event) => {
                            event.preventDefault();
                            this.getUserId();
                            actions.saveProduct(this.state)
                                .then(this.props.history.push('/productsperuser'))
                        }}>Save</button>
                </div>
            </>
        )
    
        
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(AddProduct);