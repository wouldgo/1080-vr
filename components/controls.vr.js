import React from 'react';
import {
  View,
  VrButton,
  asset
} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

const scaleValue = 0.004;

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
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
        <VrButton onClick={() => { this.props.toggleVideo() }}>
          <Entity
            source={{
              'gltf2': asset('3d/play-button/model.gltf')
            }}
            style={{
              'transform': [
                {'scaleX': scaleValue},
                {'scaleY': scaleValue},
                {'scaleZ': scaleValue}
              ]
            }}
          />
        </VrButton>
      </View>
    );
  }
}
