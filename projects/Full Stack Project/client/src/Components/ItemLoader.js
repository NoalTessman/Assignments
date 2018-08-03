import React,{Component} from 'react'
import { getItems } from '../actions/itemActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ItemLoader extends Component {
    
    componentDidMount(){
        this.props.getItems();    }

    render(){
        const { items } = this.props.item;
        const furnMapper = items.map(item => (
            <div key={item._id} className="Item">
                <div className="furnPicDiv"><img className="furnPic" src={item.url}/></div>
                <div className="furntitle"> {item.name}</div>
                <div className="furnPrice">{item.price} $</div>
            </div>
        ))
    return (
        <div className="ItemContainer">
            {furnMapper}
        </div>
    )}

}
const mapStateToProps = (state)=> ({
    item: state.item
});


export default connect(mapStateToProps, { getItems })(ItemLoader);


