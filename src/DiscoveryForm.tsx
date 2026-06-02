import type {AstroObject} from "./AstroObject.ts";
import {useState} from "react";

interface DiscoveryProps{
    objectList: AstroObject[];
    setObjectList: (objectList: AstroObject[]) => void;
}
export default function DiscoveryForm(props: DiscoveryProps){

    const [objectName, setObjectName] = useState("");
    const [objectType, setObjectType] = useState("");
    const [objectDistance, setObjectDistance] = useState(0);
    const [objectImgPath, setObjectImgPath] = useState("");

    function handleUpdateList(){
        const newAstroObject = {
            name: objectName,
            type: objectType,
            objectDistance: objectDistance,
            objectImgPath: objectImgPath,
        };
        props.setObjectList([...newAstroObject]);
    }

    return (
        <div className="discovery-form">
            <h1>Zgłoś anomalię/objekt</h1>
            <form>
                Nazwa: <input type="text" onChange={(e)=>setObjectName(e.target.value)}/>
                Typ: <input type="text" onChange={(e)=>setObjectType(e.target.value)}/>
                Dystans: <input type="number" onChange={(e)=>setObjectDistance(parseInt(e.target.value))}/>
                Link do obrazka: <input type="url" onChange={(e)=>setObjectImgPath(e.target.value)}/>

                <button onClick={() => {handleUpdateList()}}></button>
            </form>
        </div>
    )
}