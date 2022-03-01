import { getCenter } from 'geolib';
import next from 'next';
import React, { useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

function Mapped({searchResults}) {
    const [selectedLocation,setSelectedLocation] = useState({})
    const coordinates = searchResults.map(result=>({
        longitude:result.long,
        latitude:result.lat,
    }))

    const center=getCenter(coordinates);
    const [viewport, setViewPort] = useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom:11
    })
    
  return (
    <Map
    
    mapStyle="mapbox://styles/abdelsha/cl07fp3c5000014ny77e5jlw5"
    mapboxAccessToken={process.env.mapbox_key}
    initialViewState={{...viewport}}
    onViewportChange={(nextViewport)=> setViewPort(nextViewport)}
    >
   
     {searchResults.map((results) =>(
         
         <div key={`${results.long}${results.lat}`}>
             <Marker
                longitude={results.long} latitude={results.lat} offsetLeft={-20} offsetTop={-10}>
                 <p 
                 role="img"
                 onClick={()=>setSelectedLocation(results)}
                 area-aria-label='push-pin'
                 className='cursor-pointer text-2xl animate-bounce'>📌</p>

             </Marker>
             
             {selectedLocation.long === results.long ? (
                 <Popup
                    onClose={()=>setSelectedLocation({})}
                     
                     closeOnClick={true}
                     longitude={results.long}
                     latitude={results.lat}
                 
                 >
                     {results.title}
                 </Popup>
             ):(
                  false
             )}
         </div>
     ))}   
    </Map>
  )
}

export default Mapped