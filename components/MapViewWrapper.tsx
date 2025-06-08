import MapView, { UrlTile, PROVIDER_DEFAULT } from 'react-native-maps'
import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function MapViewWrapper() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_DEFAULT}
        mapType="none"
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <UrlTile
          urlTemplate="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
