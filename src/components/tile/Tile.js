import React from "react";

export const Tile = ({ info }) => {
  const infArray = Object.values(info);
  console.log(infArray)
    
  return (
    <div className="tile-container">
      {
        infArray.map((e, i) => {
            if(i === 0){
                return <p key={i} className="tile-title">{e}</p>
            }else{
                return <p key={i} className="tile">{e}</p>
            }
        })
      
      }

    </div>
  );
};
