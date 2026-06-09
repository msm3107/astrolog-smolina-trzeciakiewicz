import type { AstroObject } from "./AstroObject";

interface CatalogProps {
    objectList: AstroObject[];
    selectedObject: AstroObject | null;
    onSelectObject: (object: AstroObject) => void;
}

export default function CatalogList(props: CatalogProps) {
    return (
        <div className="catalog-list-container">
            <h2>Katalog obiektów</h2>

            <ul className="catalog-list">
                {props.objectList.map((object: AstroObject) => {
                    const isSelected = props.selectedObject?.id === object.id;

                    return (
                        <li
                            key={object.id}
                            className={isSelected ? "catalog-item selected" : "catalog-item"}
                        >
                            <h3>{object.name}</h3>

                            <img
                                src={object.imgPath}
                                alt={object.name}
                                width="160"
                            />

                            <button
                                type="button"
                                onClick={() => props.onSelectObject(object)}
                            >
                                {isSelected ? "Wybrano" : "Zobacz więcej"}
                            </button>

                            {isSelected && (
                                <p className="small-info">
                                    Kliknięty obiekt jest teraz pokazany w panelu szczegółów.
                                </p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}