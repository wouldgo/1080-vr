import React from 'react';
import {
  View,
  VrButton,
  Environment,
  asset,
  staticAssetURL
} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import VideoModule from 'VideoModule';

const playerSym = Symbol('PLAYER-SYM')
  , runningSym = Symbol('RUNNING-SYM');

export default class VideoControls extends React.Component {
  constructor(props) {
    super(props);

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
    return (
      <View>
        <AmbientLight
          intesity={0.01}
          color={'#fff'}/>
        <PointLight
          intesity={1.0}
          color={'#fff'}
          style={{
            'transform': [
              {
                'translate': [
                  0,
                  2,
                  3
                ]
              }
            ]
          }}/>
        <VrButton onClick={() => {
            if (!this[runningSym]) {

              this.startVideo()
            } else {

              this.stopVideo();
            }

            this[runningSym] = !this[runningSym];
          }}>
          <Entity
            source={{
              'gltf2': asset('3d/play-button/model.gltf')
            }}
            style={{
              'transform': [
                {'scaleX': 0.004},
                {'scaleY': 0.004},
                {'scaleZ': 0.004}
              ]
            }}
          />
        </VrButton>
      </View>
    );
  }
}
