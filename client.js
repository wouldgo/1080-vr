import {ReactInstance, Surface, Location} from 'react-360-web';

const rotate = (v, q) => {
  const qx = q[0]
    , qy = q[1]
    , qz = q[2]
    , qw = q[3]
    , vx = v[0]
    , vy = v[1]
    , vz = v[2]
    , qx2 = qx + qx
    , qy2 = qy + qy
    , qz2 = qz + qz
    , xx2 = qx * qx2
    , yy2 = qy * qy2
    , zz2 = qz * qz2
    , xy2 = qx * qy2
    , xz2 = qx * qz2
    , yz2 = qy * qz2
    , wx2 = qw * qx2
    , wy2 = qw * qy2
    , wz2 = qw * qz2;

  return [
    ((1 - yy2 - zz2) * vx + (xy2 - wz2) * vy + (xz2 + wy2) * vz),
    ((xy2 + wz2) * vx + (1 - xx2 - zz2) * vy + (yz2 - wx2) * vz),
    ((xz2 - wy2) * vx + (yz2 + wx2) * vy + (1 - xx2 - yy2) * vz)
  ];
}
, areDifferent = (first, second) => {
  if (first.length !== second.length) {

    return true;
  }

  for (let index = 0; index < first.length; index += 1) {
    const aFirstElm = first[index]
      , aSecondElm = second[index];

    if (aFirstElm !== aSecondElm) {

      return true;
    }
  }

  return false;
}
, init = (bundle, parent, options = {}) => {
  let oldRotation = [];
  const shellSurface = new Surface(1100, 600, Surface.SurfaceShape.Cylinder)
    , controlsLocation = new Location([0, -0.5, -2])
    , calculateControlsLocation = newRotation => {
      const multiplier = 2
        , newX = newRotation[0] * multiplier
        , newY = newRotation[1] * multiplier - 0.5
        , newZ = newRotation[2] * multiplier;

      return [
        newX,
        newY,
        newZ
      ];
    }
    , r360 = new ReactInstance(bundle, parent, {
      'fullScreen': true,
      'frame': () => {
        const cameraQuat = r360.getCameraQuaternion()
          , newRotation = rotate([0, 0, -1], cameraQuat);

          if (!areDifferent(oldRotation, newRotation)) {

            return;
          }

        const newPositions = calculateControlsLocation(newRotation)

        oldRotation = newRotation;
        controlsLocation.setWorldPosition(...newPositions);
        controlsLocation.setWorldRotation(...cameraQuat);
      },
      ...options
    });

  //r360.renderToSurface(
  //  r360.createRoot('Shell'),
  //  shellSurface
  //);

  r360.renderToLocation(
    r360.createRoot('VideoControls'),
    controlsLocation
  );

  r360.compositor.setBackground(null);
};

window.React360 = {init};
