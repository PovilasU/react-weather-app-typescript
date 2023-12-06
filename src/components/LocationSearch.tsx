
import React from 'react';
import Formfield from "./FormField";

const LocationSearch: React.FC = (props) => {
    const API_ROOT = 'https://geocoding-api.open-meteo.com/v1/search?format=json&count=10';
    return (
             
        <form>
            <h2>Enter a location</h2>
            <Formfield title="Location" name="location" />
        </form>
    );
};

export default LocationSearch;


