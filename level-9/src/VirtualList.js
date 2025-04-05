import React from "react";
import { FixedSizeList as List } from 'react-window';


const VirtualList = () => {
    const itemcount =100000 
    const itemheight =50

    const row =({index,style})=>(
        <div style={{...style,padding:'10px',borderBottom:"1px solid #ccc"}}>
             🧾 Item #{index + 1}
        </div>
    )
  return (
    <div style={{margin:'20px'}}>
        <h2>📜 Virtual Scrolling List</h2>
      
      <List
        height={500}         // Viewport height
        itemCount={itemcount}
        itemSize={itemheight}
        width={"100%"}
      >
        {row}
      </List>
    </div>
  )
}
export default VirtualList