import React from 'react';
import Suggestions from './Suggestions'
import APICall from '../APICall';

class SymbolLookup extends React.Component {
    state = {
        options: [],
        query: '',
        symbol: {},
        company: {},
        latestPrice: ''
    };

    getAllSymbols = () => {
        APICall.getAllSymbols()
            .then(response => {
                this.setState({
                    options: response
                });
            })
    };

    getSymbolInfo = () => {
        APICall.getSymbolInfo(this.state.query)
            .then(response => {
                this.setState({
                    options: response
                });
            })
    };

    getCompanyInfo = () => {
        APICall.getCompanyInfo(this.state.query)
            .then(response => {
                this.setState({
                    company: response
                });
            })
    };
    
    getLatestPrice = () => {
        APICall.getLatestPrice(this.state.query)
            .then(response => {
                this.setState({
                    latestPrice: response
                });
            })
    };

    getInfo = () => {
        this.getSymbolInfo();
        this.getLatestPrice();
        this.getCompanyInfo();
    };

    onInputChange = () => {
        this.setState({
            query: this.search.value
        }, this.getInfo);
    };

    onSelectChange = (event) => {
        this.setState({
            symbol: event.target.value
        }, this.getInfo);
    };

    render() {
        // this.getAllSymbols();

        return (
            <div>
                <input
                    type="search"
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.onInputChange}
                />
                <Suggestions options={this.state.options} />
                {/* <label>
                    Select a symbol:
                    <select value={this.state.query} onChange={this.onSelectChange}>
                        {this.state.options.map((x,y) => <option key={y} value={x.symbol}>{x.symbol}</option>)}
                    </select>
                </label>
                <p>{this.state.query}</p>
                <code>{ JSON.stringify(this.state.symbol)}</code>
                <code>{ this.state.latestPrice}</code>
                <code>{ JSON.stringify(this.state.company)}</code> */}
            </div>
        );
    };
}

export default SymbolLookup;