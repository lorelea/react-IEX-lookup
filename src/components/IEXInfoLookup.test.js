import React from 'react';
import ReactDOM from 'react-dom';
import IEXInfoLookup from './IEXInfoLookup';

it('IEXInfoLookup render test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IEXInfoLookup />, div);
    ReactDOM.unmountComponentAtNode(div);
});