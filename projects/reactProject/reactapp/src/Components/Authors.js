import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }
    componentWillMount() {
        axios.get('https://vschool-cors.herokuapp.com?url=http://poetrydb.org/author')
            .then(response => {
                this.setState({ authors: response.data.authors })
            })
            .catch(function (err) {
                console.log(err)
            })
    }



    render() {
        const postAuthors = this.state.authors.map(author => (
            <div key={author} className="Author">
                <Link to={`/Authors/${author}`}>
                    <h1>{author}</h1>
                </Link>
            </div>
        ))
        return (
            <div className="AuthorCrate">
                <div className="AuthorTitle">
                    Authors 
                </div> 
                {postAuthors}
            </div>
        )
    }
}
export default Authors