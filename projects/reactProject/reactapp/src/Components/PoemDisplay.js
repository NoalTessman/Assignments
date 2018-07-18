import React, {
    Component
} from 'react'
import axios from 'axios'
export default class PoemDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: [],
        };
    }
    componentWillMount() {
        axios.get(`https://vschool-cors.herokuapp.com?url=http://poetrydb.org/title/${this.props.match.params.poem}`)
            .then(response => {
                    this.setState({lines:response.data[0].lines})
                    this.setState({title:response.data[0].title})
                })
                    .catch(function (err) {
                    console.log(err)
                })
            }

        render() {
            const postPoem = this.state.lines.map(line => (
                        <div key={line} className="PoemLine"> 
                            <p>{line}</p>
                        </div>
            ))
            return ( 
            <div className = "PoemDisplay" >
                <div className = "poemTitle">
                </div>
                {postPoem}
             </div>
            )
        }
    }