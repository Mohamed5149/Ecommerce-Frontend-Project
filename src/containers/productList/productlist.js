import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/productCard/productCard';
import * as actions from '../../store/actions/actions';

class ProductList extends Component {
    state = {
        url: ''
    }
    componentDidMount() {
        if (!this.state.url || this.state.url !== this.props.match.url) {
            if (this.props.match.url.includes("user")) {
                this.props.getPerUser();
            }
            else {
                this.props.get();
            }
            this.setState({ url: this.props.match.url })
        }
    }
    componentDidUpdate() {
        if (!this.state.url || this.state.url !== this.props.match.url) {
            if (this.props.match.url.includes("user")) {
                this.props.getPerUser();
            }
            else {
                this.props.get();
            }
            this.setState({ url: this.props.match.url })
        }
    }
    editProducthandler(id) {
        this.props.history.push(`/editproducts/${id}`);
    }
    render() {
        let cards;
        cards = this.props.products.map((product) => {
            return (
                <div key={product._id}>
                    <ProductCard
                        url={this.props.match.url}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        discount={product.discount}
                        category={product.category}
                        deleteproduct={() => this.props.delete(product._id)}
                        editproduct={() => this.editProducthandler(product._id)}
                    >
                    </ProductCard>
                </div>
            )
        })
        return (
            <section>
                {cards}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        get: () => dispatch(actions.getAllProduct()),
        getPerUser: () => dispatch(actions.getProductsPerUser()),
        delete: (id) => dispatch(actions.deleteProduct(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);