import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  asset
} from 'react-360';
import TitleScreen from './title-screen';

const stageStatus = {
  'GREETINGS': 'greetings'
}
, styles = StyleSheet.create({
  'frontImage': {
    'width': 1024,
    'height': 128
  },
  'view': {
    'padding': 10,
    'alignItems': 'center'
  }
});

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'stage': stageStatus.GREETINGS
    };
  }

  render() {
    if (this.state.stage === stageStatus.GREETINGS) {
      return (
        <View style={styles.view}>
          <TitleScreen/>
          <Image style={styles.frontImage} source={asset('image/front.png')}/>
        </View>
      );
    }

    return null;
  }
}
