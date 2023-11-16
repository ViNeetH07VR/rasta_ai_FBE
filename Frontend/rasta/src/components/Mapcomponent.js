import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGlrYS0xOTAxMDEiLCJhIjoiY2xvbXJieHJ6MTVncTJpczJhZnh4N3Z6dSJ9.btunGukUKM2vCeMJtrOwuw';

//index.html has the reference linkage to the magbox-gl

const Mapcomponent=()=>{
    console.log("mapbox")
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(78.381914);
const [lat, setLat] = useState(17.450764);
const [zoom, setZoom] = useState(12);

//routeGeoJSON is a static data for representation
const routeGeoJSON = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                id: 'route-1',
                title: 'Route HitechCity',
                description: 'This is the route that you have selected.',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                   [78.382589, 17.449566],
                   [78.382197, 17.450083],
                   [78.381916, 17.450498],
                   [78.381570, 17.450938],
                   [78.380804, 17.451769],
                   [78.379919, 17.452729]
                   
                ],
            },
        },
        
    ],
};


useEffect(() => {

    if (map.current) 
    return;

    console.log("Entered Use effect")

    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/rishika-190101/clonw3gbd00db01nzepkb9gnx',
        center: [lng, lat],
        zoom: zoom,
    });

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric', 
    });

    map.current.addControl(directions, 'top-left');

    map.current.on('load', () => {
       
        console.log("On loading",routeGeoJSON)
        map.current.addSource('routes', {
            type: 'geojson',
            data: routeGeoJSON,
        });

        map.current.addLayer({
            id: 'route-layer', 
            type: 'line',
            source: 'routes',
            paint: {
                'line-color': 'yellow',
                'line-width': 4,
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            interactive: true, // should be interactive
        });

        map.current.on('click', 'route-layer', (event) => {

            const routeProperties = event.features[0].properties;
            const routeId = routeProperties.id;
        
            
            console.log('Clicked route ID: ', routeId);
        
            //To display a pop up
            const popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(event.lngLat)
                .setHTML(
                    `<h3>${routeProperties.title}</h3><p>${routeProperties.description}</p>`
                )
                .addTo(map.current);
        });

        routeGeoJSON.features[0].geometry.coordinates.forEach((coordinate) => {
            const marker = new mapboxgl.Marker()
                .setLngLat(coordinate)
                .addTo(map.current);
            
            
            
            const popup = new mapboxgl.Popup({ offset: [0, -15]})
                .setHTML('<img src="../src/assets/images/pothholes.jpg" alt="Pothhole Image" />');
    
          
            marker.setPopup(popup);
        });

        // Changing the cursor style when hovering over the route.
        map.current.on('mouseenter', 'route-layer', () => {
            console.log("On mouseseenter")
            mapContainer.current.style.cursor = 'pointer';
        });

        // Changing it back to the default cursor when the mouse leaves the route.
        map.current.on('mouseleave', 'route-layer', () => {
            mapContainer.current.style.cursor = '';
        });
    });
        
        map.current.on('click', function (e) {
        const clickedCoordinates = e.lngLat;
        console.log('Clicked Coordinates:', clickedCoordinates);
        
        const osmApiUrl = `https://overpass-api.de/api/interpreter?data=[out:json];way(around:10,${clickedCoordinates.lat},${clickedCoordinates.lng})[highway];out;`;

    fetch(osmApiUrl)
    .then(response => response.json())
    .then(data => {
    const roadDetails = data.elements[0];
    const roads= data.elements;
    const roadNodes = roadDetails.nodes;

  
    const wayIds = roadDetails.id;
    const routeIds = roadDetails.tags.route_id;
    const routeNames = roadDetails.tags.name;

    const fetchNodeDetails = async (nodeId) => {
        const apiUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(${nodeId});out;`;
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
    
            if (data.elements && data.elements.length > 0) {
                const node = data.elements[0];
                const coordinates = { lat: node.lat, lon: node.lon };
                const marker = new mapboxgl.Marker()
                .setLngLat({ lng: coordinates.lon, lat: coordinates.lat })
                .addTo(map.current);
                return coordinates;
            }
    
            return null; 
            
        } catch (error) {
            console.error('Error fetching node details:', error);
            return null;
        }
    };

    
    // Fetch coordinates for each node
    const fetchCoordinatesForNodes = async () => {
        const coordinatesPromises = roadNodes.map(async (nodeId) => {
            const coordinates = await fetchNodeDetails(nodeId);
            return coordinates;
        });

        
        const coordinatesArray = await Promise.all(coordinatesPromises);
        console.log('Coordinates for nodes:', coordinatesArray);
        coordinatesArray.forEach(async (coordinates) => {
            try {
              const response = await axios.get(`http://localhost:5000/fetch/`, {
                lat: 78.37982,
                lon: 17.450771,
              });
        
              console.log('Response from server:', response.data,response);
            } catch (error) {
              console.error('Error making GET request:', error.message);
            }
          });
        
    };
    
    // Call the function that derives coordinates for each node
    fetchCoordinatesForNodes();

    const fetchWayDetails = async (wayId) => {
        const apiUrl = `https://overpass-api.de/api/interpreter?data=[out:json];way(${wayId});out;`;
    
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("data",data)
            
            if (data.elements && data.elements.length > 0) {
                const way = data.elements[0];
                console.log("way",way.nodes,way.nodes.length)
                const first=way.nodes[0];
                const last=way.nodes[way.nodes.length]
                const coordinates1=await fetchNodeDetails(first)
                const coordinates2=await fetchNodeDetails(last)
                console.log("cordinates",coordinates1,coordinates2)
                
                const marker2 = new mapboxgl.Marker({color:'red'})
                
                .setLngLat({ lng: coordinates2.lon, lat: coordinates2.lat })
                .addTo(map.current);

                const marker = new mapboxgl.Marker({color:'red'})
                
                .setLngLat({ lng: coordinates1.lon, lat: coordinates1.lat })
                .addTo(map.current);
                // const coordinates = way.geometry.map((node) => ({ lat: node.lat, lon: node.lon }));
                return coordinates1;
            }
    
            return null;
        } catch (error) {
            console.error('Error fetching way details:', error);
            return null;
        }
    };
    
    // Fetch coordinates for the specified way
    const fetchCoordinatesForWay = async () => {
        const coordinates = await fetchWayDetails(wayIds);
        console.log('Coordinates for way:', coordinates);
    };
    
    // Call the function to fetch coordinates for the specified way
    fetchCoordinatesForWay();

    // roads.forEach(road => {
    //     console.log("roaddddddddddddddddddddddddddd",road)
    //     if (road.lat && road.lon) {
    //         const marker = new mapboxgl.Marker()
    //             .setLngLat({ lng: road.lon, lat: road.lat })
    //             .addTo(map.current);
    //     }
    // });

    // Process the obtained information
    console.log('Way IDs:', wayIds);
    console.log('Route IDs:', routeIds);
    console.log('Route Names:', routeNames);
    console.log('Roadnodes:', roadNodes);
})
.catch(error => console.error('Error fetching OSM data:', error));;

const residentialRoadsUrl = `https://overpass-api.de/api/interpreter?data=[out:json];way(around:10,${clickedCoordinates.lat},${clickedCoordinates.lng})[highway=residential];out;`;

fetch(residentialRoadsUrl)
    .then(response => response.json())
    .then(data => {
        const residentialRoads = data.elements[0];
        console.log('Nearby Residential Roads:', residentialRoads);
    })
    .catch(error => console.error('Error fetching nearby residential roads:', error));


    });
    function getRouteIds(roadDetails) {
        // Check if the road is part of a relation (route)
        if (roadDetails.tags && roadDetails.tags.type === 'route' && roadDetails.tags.route_id) {
            return [roadDetails.tags.route_id];
        }
    
        // Check if the road is part of multiple relations
        if (roadDetails.members) {
            return roadDetails.members
                .filter(member => member.type === 'relation' && member.role === 'street')
                .map(member => member.ref);
        }
    
        return undefined;}
}, [lng,lat,zoom]);
return (
    <div>
    <div ref={mapContainer} className="map-container"/>
    
    </div>
  );
}

export default Mapcomponent;