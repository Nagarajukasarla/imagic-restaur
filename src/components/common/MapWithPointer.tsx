import React from 'react';
import { Map, Marker } from 'pigeon-maps';

interface MapWithPointerProps {
    center: [number, number];
    zoom?: number;
    popupText?: string;
}

const MapWithPointer: React.FC<MapWithPointerProps> = ({
    center,
    zoom = 13,
    popupText = "We are here!"
}) => {
    return (
        <div className="w-full h-[400px]">
            <Map 
                height={400}
                center={center} 
                zoom={zoom} 
                attribution={false}
            >
                <Marker 
                    width={50}
                    anchor={center} 
                    color="#ca9d75"
                />
            </Map>
        </div>
    );
};

export default MapWithPointer;
