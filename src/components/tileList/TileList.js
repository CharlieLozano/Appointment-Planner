import React from "react";
import { Tile } from "../tile/Tile"


export const TileList = ({ list }) => {
    
    return (
    <div>
      {list.map((e, i) =>{
            return (
                <Tile key={i} info={e}/>
                )
        
            })
        }
    </div>
  );
};
