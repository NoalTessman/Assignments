import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import { getItems , deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
class FurnitureList extends Component {

    componentDidMount(){
        this.props.getItems();    }
    
    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                {items.map(({_id,name, year, room, type, url, price}) => (
                    <div key={_id}> NAME: {name}, YEAR {year}, PRICE: {price}, ROOM {room}, TYPE OF FURNITURE: {type}, IMAGE{url} <br/>
                <button onClick={this.onDeleteClick.bind(this, _id)}>DELETE</button></div> 
                ))}
            </div>
        );
    }
}

FurnitureList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state)=> ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(FurnitureList);
