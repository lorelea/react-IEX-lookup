import React from 'react';
import './Autocomplete.scss';

class Autocomplete extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            query: ''
        };
    }

    handleInputChange = (event) => {
        const { items } = this.props;
        const query = event.target.value;
        let suggestions = [];
        if (query.length) {
            const regex = new RegExp(`^${query}`, 'i');
            suggestions = items.sort().filter(item => regex.test(item));
        }
        this.setState({ suggestions, query });
    }

    handleClearClick = () => {
        this.setState({ query: '' });
        this.search.focus();
    }

    handleSuggestionSelected = (value) => {
        this.setState({ 
            suggestions: [],
            query: value
        }, () => {
            this.props.onValueUpdated && this.props.onValueUpdated(value); 
        });
    }

    renderFilteredSuggestions () {
        const { suggestions } = this.state;
        if (!suggestions.length) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, index) => <li key={item + index} onClick={() => this.handleSuggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render () {
        return (
            <div className="my-autocomplete">
                <input
                    type="text"
                    ref={input => this.search = input}
                    placeholder={this.props.placeholder}
                    value={this.state.query}
                    onChange={this.handleInputChange}
                />
                {this.state.query && <span className="clearable" onClick={this.handleClearClick}></span>}
                {this.renderFilteredSuggestions()}
            </div>
        );
    }
}

export default Autocomplete;