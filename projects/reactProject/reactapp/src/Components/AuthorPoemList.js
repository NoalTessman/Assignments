import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AuthorPoemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poems: []
        };
    }
    componentWillMount() {
        axios.get(`https://vschool-cors.herokuapp.com?url=http://poetrydb.org/author/${this.props.match.params.name}`)
            .then(response => {
                this.setState({ poems: response.data })
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render() {
        const poems = this.state.poems.map(poem => {
            return (
                <div key={poem} className="Poem">
                    <Link to={`/Authors/${poem.author}/${poem.title}`}>
                        {poem.title}
                    </Link>
                </div>
            )
        })
        return (
            <div className="PoemCrate">
                <div className="backToAuthors">
                    <Link to="/Authors">
                    Back To Authors
                    </Link>
                    </div>
                <div className="PoemTitle">
                    {this.props.match.params.name} Poems
                </div>
                        {poems}
            </div>
        )
    }
}

