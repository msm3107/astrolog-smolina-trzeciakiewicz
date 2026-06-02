import type {AstroObject} from "./AstroObject.ts";

interface CatalogProps{
    objectList: AstroObject[];
}
export default function CatalogList(props:CatalogProps) {
    return (
        <div className="catalog-list-container">
            <ul className="catalog-list">
                {
                    props.objectList.map((object:AstroObject) => {
                        return (
                            <li>
                                <h3>{object.name}</h3>
                                <img src={object.imgPath}/>
                                <button content="see more" onClick={}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}