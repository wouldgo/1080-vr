import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  asset
} from 'react-360';
import TitleScreen from './greetings/title-screen';
import VideoModule from 'VideoModule';

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

const playerSym = Symbol('PLAYER-SYM')
  , runningSym = Symbol('RUNNING-SYM');

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'stage': stageStatus.GREETINGS
    };

    this[playerSym] = VideoModule.createPlayer('stageVideo');
    this[runningSym] = false;
  }

  startVideo() {
    this[playerSym].play({
      'volume' : 1,
      'muted' : false,
      'source': {
        'url': staticAssetURL('video/palco.mp4')
      }
    });

    Environment.setBackgroundVideo('stageVideo');
  }

  stopVideo() {

    this[playerSym].pause();
    Environment.setBackgroundVideo(null);
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
