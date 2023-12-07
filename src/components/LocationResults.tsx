

interface Location {
    id: number;
    country: string;
    admin1: string;
}

interface LocationResultsProps {
    locations: Location[];
    updateSelection: (location: Location) => void;
}

export default function LocationResults({ locations, updateSelection }: LocationResultsProps) {
    function handler(location: Location) {
        updateSelection(location);
    }

    return (
        <div id="location-results" className="module">
            {locations.map((location) => (
                <div className="location" key={location.id}>
                    <div className="region">
                        <div>{location.country} </div>
                        <div className="subregion">{location.admin1} </div>
                    </div>
                    <div>
                        <button onClick={() => handler(location)}>Select</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
