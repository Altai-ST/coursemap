import React from 'react'
import GoogleMap from 'google-map-react';
import styled from './map.module.scss'
import Search from '../search';
// гугл карта
export default function Map(props) {
    console.log(props.map)
  return (
    <div className={props.map === "maps" ? styled.mapf : styled.maps}>
        <GoogleMap
            center={[42.87590872340157, 74.5699139686407]}
            zoom={13}
        >
        </GoogleMap>
    </div>
  )
}
