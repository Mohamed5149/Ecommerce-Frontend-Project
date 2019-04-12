import React from 'react';
import classes from './product.module.css';

const ProductCard = (props) => {
    let deleteButton = props.url.includes("user") ? <button className={classes.btn3} onClick={props.deleteproduct}>Delete</button> : null;
    let UpdateButton = props.url.includes("user") ? <button className={classes.btn3} onClick={props.editproduct}>Update</button> : null;
    return (
        <>
            <div className={classes.product}>
                <h3 className={classes.h3Class}>Product Name :</h3>{props.name}<hr />
                <h3 className={classes.h3Class}>Product Description :</h3>{props.description}<hr />
                <h3 className={classes.h3Class}>Product Price:</h3>{props.price}<hr />
                <h3 className={classes.h3Class}>Product Discount :</h3>{props.discount}<hr />
                <h3 className={classes.h3Class}>Product Category :</h3>{props.category}<hr />
                {deleteButton}
                {UpdateButton}
            </div>
        </>
    )
}

export default ProductCard;