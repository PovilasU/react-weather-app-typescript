import React, { useState } from "react";
import Formfield from "./FormField";

interface LocationSearchProps {
    updateLocations: (locations: any[]) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = (props) => {
    const API_ROOT =
        "https://geocoding-api.open-meteo.com/v1/search?format=json&count=10";
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg(null);
        const location = e.currentTarget.location.value;
        try {
            const res = await fetch(API_ROOT + `&name=${location}`);
            const locations = await res.json();
            if (locations.results) {
                props.updateLocations(locations.results);
            } else {
                setErrorMsg("No results found");
                props.updateLocations([]);
            }
        } catch (error) {
            setErrorMsg("An error occurred");
            props.updateLocations([]);
        }
    };

    return (
        <form id="location-search" className="module" onSubmit={handleSearch}>
            <h2>Enter a location</h2>
            <Formfield title="Location" name="location" placeholder="Location" />
            <div className="jcsb">
                <div className="error">{errorMsg}</div>
                <button>Search</button>
            </div>
        </form>
    );
};

export default LocationSearch;
