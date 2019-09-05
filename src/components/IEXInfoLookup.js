import React from 'react';
import './IEXInfoLookup.scss';
import WindowedSelect, { createFilter } from 'react-windowed-select';
import Autocomplete from './Autocomplete';
import Switch from './Switch'
import APICall from 'APICall';

class IEXInfoLookup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            symbols: [],
            activeSymbol: '',
            price: '',
            company: {},
            showAutocomplete: false
        };
    }

    getAllSymbols () {
        APICall.getAllSymbols()
            .then(response => {
                this.setState({
                    symbols: response
                });
            })
    }

    getLatestPrice () {
        APICall.getLatestPrice(this.state.activeSymbol)
            .then(response => {
                this.setState({
                    price: response
                });
            })
    }

    getCompanyInfo () {
        APICall.getCompanyInfo(this.state.activeSymbol)
            .then(response => {
                this.setState({
                    company: response
                });
            })
    }

    handleSymbolChanged = (activeSymbol) => {
        this.setState({ activeSymbol }, () => {
            this.getLatestPrice();
            this.getCompanyInfo();
        });
    }

    handleSwitchToggle = (isChecked) => {
        this.setState({
            showAutocomplete: isChecked
        });
    }

    componentDidMount () {
        this.getAllSymbols();
    }

    renderSymbolInfo () {
        let { symbols, activeSymbol, company: { description } } = this.state;
        if (!symbols.length || !activeSymbol) {
            return null;
        }
        const regex = new RegExp(`^${activeSymbol}`, 'i');
        let symbolInfo = symbols.find(item => regex.test(item.symbol));
        if (!symbolInfo) {
            return null;
        }
        return (
            <dl>
                <dt>Symbol</dt>
                <dd>{activeSymbol}</dd>
                <dt>Current Stock Price</dt>
                <dd>{this.state.price} {symbolInfo.currency}</dd>
                <dt>Description</dt>
                <dd>{description}</dd>
            </dl>
        );
    }

    render () {
        const items = this.state.showAutocomplete ? this.state.symbols.map(item => item.symbol) : [];
        const options = this.state.symbols.map(item => ({ value: item.symbol, label: item.symbol }));
        return (
            <div className="my-iex_info_lookup">
                <Switch
                    value={this.state.showAutocomplete}
                    onSwitchToggle={this.handleSwitchToggle}
                />
                {this.state.showAutocomplete && <Autocomplete
                    items={items}
                    placeholder="Start to type..."
                    value={this.state.activeSymbol}
                    onValueUpdated={this.handleSymbolChanged}
                />}
                <WindowedSelect
                    className={"my-iex_info_lookup-autocomplete " + (this.state.showAutocomplete ? 'hide' : '')}
                    filterOption={createFilter({ ignoreAccents: false })}
                    isLoading={!options.length}
                    options={options}
                    value={options.find(option => option.value === this.state.activeSymbol)}
                    onChange={(payload) => this.handleSymbolChanged(payload.value)}
                />
                {this.renderSymbolInfo()}
            </div>
        );
    }
}

export default IEXInfoLookup