import React from 'react'

const Suggestions = (props) => {
    const options = props.options.map(option => (
        <li key={option.symbol}>{option.symbol}</li>
    ));
    return options.length ? <ul>{options}</ul> : <p>No Data</p>
}

export default Suggestions;