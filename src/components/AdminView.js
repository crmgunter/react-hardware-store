import React, { Component } from 'react';

class AdminView extends Component {
    render() {
        return (
            <div>
                <h1>Admin</h1>
                <h3>Products</h3>
                <hr/>
                <div>
                    <h5>Hammer</h5>
                    <p>Description: It's a hammer</p>
                    <p>Price: $12.95</p>
                </div>
                <hr />
                <div>
                    <h5>Nail</h5>
                    <p>Description: It's a nail</p>
                    <p>Price: $0.65</p>
                </div>
                <hr/>

                <h3>Create a New Product</h3>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>Create New Product</button>
            </div>
        );
    }
}

export default AdminView;