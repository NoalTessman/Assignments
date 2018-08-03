import React, { Component } from 'react';
import { connect} from 'react-redux';
import { addItem } from "../actions/itemActions"
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
         modal: !this.state.modal
        });}
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit= (e) =>{
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            year: this.state.year,
            price: this.state.price,
            room: this.state.room,
            url: this.state.url,
            type: this.state.type,
            dateAdded: Date.now
        }

        this.props.addItem(newItem);
    }
        render(){
            return (
                <div>
                            <form onSubmit={this.onSubmit}>
                                <input type="text" id="item" name="name" placeholder="Add Furniture Item" onChange={this.onChange}/>
                                <input type="number" id="item" name="year" placeholder="Add Furniture Year" onChange={this.onChange}/>
                                <input type="number" id="item" name="price" placeholder="Add Price" onChange={this.onChange}/>
                                <input type="text" id="item" name="room" placeholder="Add Room" onChange={this.onChange}/>
                                <input type="text" id="item" name="type" placeholder="Add Furniture Type" onChange={this.onChange}/>
                                <input type="text" id="item" name="url" placeholder="add image url" onChange={this.onChange}/>
                                <button>Submit</button>
                            </form>
                </div>
            );
        }
    }

const mapStateToProps = state => ({
    item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);