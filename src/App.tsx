import { useState } from 'react'

import './App.css'
import type {AstroObject} from "./AstroObject.ts";
import CatalogList from "./CatalogList.tsx";
import DiscoveryForm from "./DiscoveryForm.tsx";

function App() {
  const [objectList, setObjectList] = useState<AstroObject[]>([]);
  return (
    <>
      <CatalogList objectList ={objectList} />
      <DiscoveryForm objectList={objectList} setObjectList={setObjectList} />
      <h1 style={{color:"white"}}></h1>
    </>
  )
}

export default App
