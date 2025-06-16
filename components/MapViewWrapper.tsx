import React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewWrapper() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 38.6570,
                    longitude: -90.2994,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});