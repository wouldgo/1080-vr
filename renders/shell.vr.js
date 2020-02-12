import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Shell from '../components/shell.vr';
import { store } from '../store';

export default class ShellRenderer extends Component {
    render() {
        return (
          <Provider store={store}>
            <Shell />
          </Provider>
        );
    }
}
