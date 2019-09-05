import React from 'react';
import './Switch.scss';

class Switch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: 'myonoffswitch-' + Math.random().toString().substr(2, 15),
            isChecked: !!this.props.value
        };
    }

    handleSwitchToggle = () => {
        this.setState((prevState) => ({ isChecked: !prevState.isChecked }), () => {
            this.props.onSwitchToggle && this.props.onSwitchToggle(this.state.isChecked);
        })
    }

    render () {
        return (
            <div className="onoffswitch">
                <input 
                    type="checkbox" 
                    name="onoffswitch" 
                    className="onoffswitch-checkbox" 
                    id={this.state.id} 
                    checked={this.state.isChecked} 
                    onChange={this.handleSwitchToggle}
                />
                <label className="onoffswitch-label" htmlFor={this.state.id}>
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        );
    }
}

export default Switch;