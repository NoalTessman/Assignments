import React, { Component } from 'react';
import axios from 'axios';

class AuthorPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors:[]
        };
    }
    componentDidMount(){
        axios.get('https://vschool-cors.herokuapp.com?url=http://poetrydb.org/author')
        .then(response => {
            this.setState({ authors: response.data.authors })
        })
        .catch(function(err){
            console.log(err)
        })
    }

    

    render() {
        const postAuthors = this.state.authors.map(author =>(
            <div key={author} className="Author">
                <h1>{author}</h1>
            </div>
        ))
        return (
            <div class="AuthorCrate">>
                { postAuthors }
            </div>
        )
    }
}
export default AuthorPost