import styled from 'styled-components/native';
import MapView, {Marker} from 'react-native-maps';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

interface MapProps {
  x?: string;
  y?: string;
}
const Map = ({x, y}: MapProps) => {
  const location = useMemo(() => {
    if (!x || !y) return {latitude: 37.78825, longitude: -122.4324};
    return {
      latitude: Number(y),
      longitude: Number(x),
    };
  }, [x, y]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          ...location,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{...location}}></Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});
