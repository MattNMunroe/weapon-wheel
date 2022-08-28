import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'


function SearchBar(props) {
const [ history, setHistory ] = useState([]);
const [ input, setInput ] = useState("")

const API = process.env.REACT_APP_API_URL

const handleOnChange = (event) => {
    setInput(event.target.value)
  };
console.log(input)

//   submitAndReset = () => {
//     this.props.handleSearch(this.state.input);
//     this.setState({ input: "" });
//   };


    return (
        <div>
            <input
            type='text'
            className="search-field"
            value={input}
            onChange={handleOnChange}
            placeholder='Search...'
            />
            <button onClick={() => props.handleSearch(input)}>Submit</button>
        </div>
    )
}

export default SearchBar