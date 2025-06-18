import 'dotenv/config';

if (process.env.NODE_ENV === 'development') {
    console.log('API Key loaded:', process.env.GOOGLE_MAPS_API_KEY ? 'YES' : 'NO');
}

export default {
    expo: {
        name: "WebGIS-React-Native",
        slug: "WebGIS-React-Native",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "webgisreactnative",
        userInterfaceStyle: "automatic",
        newArchEnabled: true,
        splash: {
            image: "./assets/images/splash-icon.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        ios: {
            supportsTablet: true,
            config: {
                googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
            }
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            edgeToEdgeEnabled: true,
            package: "com.brad.stricherz.WebGISReactNative",
            config: {
                googleMaps: {
                    apiKey: process.env.GOOGLE_MAPS_API_KEY
                }
            }
        },
        web: {
            bundler: "metro",
            output: "static",
            favicon: "./assets/images/favicon.png"
        },
        plugins: [
            "expo-router",
        ],
        experiments: {
            typedRoutes: true
        }
    }
};