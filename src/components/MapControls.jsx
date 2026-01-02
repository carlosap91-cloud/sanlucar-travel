import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

export const MapSearch = () => {
    const map = useMap();

    useEffect(() => {
        const geocoder = L.Control.geocoder({
            defaultMarkGeocode: false,
        })
            .on('markgeocode', function (e) {
                const latlng = e.geocode.center;
                L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.setView(latlng, 16);
            })
            .addTo(map);

        return () => map.removeControl(geocoder);
    }, [map]);

    return null;
};

export const MapRouting = () => {
    const map = useMap();

    useEffect(() => {
        // Basic routing control
        // Note: This uses the demo OSRM server which might be rate limited users should provide their own in production
        const routingControl = L.Routing.control({
            waypoints: [
                // Default: No waypoints, let user select
                // L.latLng(36.778082, -6.353364) // Sanlúcar Center
            ],
            routeWhileDragging: true,
            language: 'es', // Try to set language to Spanish
            showAlternatives: true,
            lineOptions: {
                styles: [{ color: '#6FA1EC', weight: 4 }]
            },
            geocoder: L.Control.Geocoder.nominatim() // Allow searching in the routing inputs
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map]);

    return null;
};
