import { Map, NavigationControl, Marker, GeolocateControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "./Radar.css"

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Radar = () => {
    return ( 
        <>
            <div className="radar_wrapper">
                <div className="MapBox">
                    <Map
                        mapLib={import("mapbox-gl")}
                        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        initialViewState={{
                            latitude: 55.264621114433254,
                            longitude: 12.409809180550809,
                            zoom: 16
                        }}
                    >
                        <NavigationControl />
                        <Marker latitude={55.264621114433254} longitude={12.409809180550809} color="#f87318" />
                        <GeolocateControl 
                            trackUserLocation={true}
                            positionOptions={{ enableHighAccuracy: true}}
                            showAccuracyCircle={true}
                            auto
                        />
                    </Map>
                </div>
            </div> 
        </>
     );
}
 
export default Radar;