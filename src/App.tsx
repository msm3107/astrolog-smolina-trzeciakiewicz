import { useState } from "react";
import type { AstroObject } from "./AstroObject";
import CatalogList from "./CatalogList";
import ObjectDetails from "./ObjectDetails";
import DiscoveryForm from "./DiscoveryForm";
import "./App.css";

export default function App() {
    const [objectList, setObjectList] = useState<AstroObject[]>([
        {
            id: "1",
            name: "Mars",
            type: "Planeta",
            distance: 225_000_000,
            imgPath: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
        },
        {
            id: "2",
            name: "Słońce",
            type: "Gwiazda",
            distance: 149_600_000,
            imgPath: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg"
        }
    ]);

    const [selectedObject, setSelectedObject] = useState<AstroObject | null>(null);

    function addObject(newObject: AstroObject) {
        setObjectList([...objectList, newObject]);
    }

    return (
        <main className="app">
            <h1>AstroLog - Katalog Ciał Niebieskich</h1>

            <div className="layout">
                <CatalogList
                    objectList={objectList}
                    selectedObject={selectedObject}
                    onSelectObject={setSelectedObject}
                />

                <ObjectDetails selectedObject={selectedObject} />

                <DiscoveryForm onAddObject={addObject} />
            </div>
        </main>
    );
}