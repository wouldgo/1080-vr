import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Controls from '../components/controls.vr';
import { store } from '../store';

export default class ControlsRenderer extends Component {
    render() {
        return (
          <Provider store={store}>
            <Controls />
          </Provider>
        );
    }
}
