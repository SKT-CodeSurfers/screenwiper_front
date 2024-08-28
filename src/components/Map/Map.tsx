import styled from 'styled-components/native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          ...location,
          latitudeDelta: 0.005,
          longitudeDelta: 0.012,
        }}>
        <Marker coordinate={{...location}} pinColor={'#4277FF'}></Marker>
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
    marginVertical: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});
