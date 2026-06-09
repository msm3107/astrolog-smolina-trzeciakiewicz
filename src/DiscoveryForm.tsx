import { useState } from "react";
import type { AstroObject } from "./AstroObject";

interface DiscoveryProps {
    onAddObject: (newObject: AstroObject) => void;
}

export default function DiscoveryForm(props: DiscoveryProps) {
    const [objectName, setObjectName] = useState("");
    const [objectType, setObjectType] = useState("");
    const [objectDistance, setObjectDistance] = useState("");
    const [objectImgPath, setObjectImgPath] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newAstroObject: AstroObject = {
            id: crypto.randomUUID(),
            name: objectName,
            type: objectType,
            distance: Number(objectDistance),
            imgPath: objectImgPath
        };

        props.onAddObject(newAstroObject);

        setObjectName("");
        setObjectType("");
        setObjectDistance("");
        setObjectImgPath("");
    }

    return (
        <div className="discovery-form">
            <h2>Zgłoś nowy obiekt</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Nazwa:
                    <input
                        type="text"
                        value={objectName}
                        onChange={(e) => setObjectName(e.target.value)}
                    />
                </label>

                <label>
                    Typ:
                    <input
                        type="text"
                        value={objectType}
                        onChange={(e) => setObjectType(e.target.value)}
                    />
                </label>

                <label>
                    Dystans:
                    <input
                        type="number"
                        value={objectDistance}
                        onChange={(e) => setObjectDistance(e.target.value)}
                    />
                </label>

                <label>
                    Link do obrazka:
                    <input
                        type="url"
                        value={objectImgPath}
                        onChange={(e) => setObjectImgPath(e.target.value)}
                    />
                </label>

                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}