import type { AstroObject } from "./AstroObject";

interface DetailProps {
    selectedObject: AstroObject | null;
}

export default function ObjectDetails(props: DetailProps) {
    if (props.selectedObject === null) {
        return (
            <div className="object-details">
                <h2>Szczegóły</h2>
                <p>Wybierz obiekt z katalogu, aby zobaczyć szczegóły.</p>
            </div>
        );
    }

    return (
        <div className="object-details">
            <h2>{props.selectedObject.name}</h2>

            <img
                src={props.selectedObject.imgPath}
                alt={props.selectedObject.name}
                width="250"
            />

            <p>
                <strong>Typ:</strong> {props.selectedObject.type}
            </p>

            <p>
                <strong>Dystans:</strong> {props.selectedObject.distance} km
            </p>
        </div>
    );
}