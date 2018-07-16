import REACT from 'react';
import ReactDOM from 'react-dom';
 
//Action creators
export const cgetTodos = ()=> {
    const results = axios.get(someurl)
    return dispatch =>{
        axios.get('https://api.vschool.io/natej/todo)
        .then(response =>{dispatch({
                type:"Get_todos",
                todos:response.data
            })
        })
    })
}