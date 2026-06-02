import type {AstroObject} from "./AstroObject.ts";

interface CatalogProps{
    objectList: AstroObject[];
}
export default function CatalogList(props:CatalogProps) {
    return (
        <div className="catalog-list">
            {props.objectList.map((object:AstroObject) => {object.name})}
        </div>
    )
}