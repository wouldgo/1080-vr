import {
  AppRegistry
} from 'react-360';

import ShellRenderer from './renders/shell.vr';
import ControlsRenderer from './renders/controls.vr';

AppRegistry.registerComponent('Shell', () => ShellRenderer);
AppRegistry.registerComponent('ControlsRenderer', () => ControlsRenderer);
