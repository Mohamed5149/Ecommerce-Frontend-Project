import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/productCard/productCard';
import * as actions from '../../store/actions/actions';
import Spinner from '../../components/Spinner/spinner';

class ProductList extends Component {
    state = {
        url: '',
        loading: true
    }
    componentDidMount() {
        if (!this.state.url || this.state.url !== this.props.match.url) {
            if (this.props.match.url.includes("user")) {
                this.props.getPerUser().then(res => {
                    this.setState({ loading: false })
                });
            }
            else {
                this.props.get().then(res => {
                    this.setState({ loading: false })
                });
            }
            this.setState({ url: this.props.match.url })
        }
    }
    componentDidUpdate() {
        if (!this.state.url || this.state.url !== this.props.match.url) {
            if (this.props.match.url.includes("user")) {
                this.props.getPerUser().then(res => {
                    this.setState({ loading: false })
                });
            }
            else {
                this.props.get().then(res => {
                    this.setState({ loading: false })
                });
            }
            this.setState({ url: this.props.match.url })
        }
    }
    editProducthandler(id) {
        this.props.history.push(`/editproducts/${id}`);
    }
    render() {
        let cards;
        if (this.state.loading === true) {
            cards = <Spinner></Spinner>
        }
        else {
            if (this.props.match.url.includes("user")) {
                cards = this.props.userproducts.map((product) => {
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
            }
            else {
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
            }
        }

        return (
            <section>
                {cards}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        userproducts: state.userproducts
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