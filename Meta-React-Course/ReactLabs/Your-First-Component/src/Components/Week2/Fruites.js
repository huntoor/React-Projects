import React from "react";

function Fruites(props) {
    return (
      <div>
        {props.fruites.map(f => <p key={f.id}>{f.fruitName}</p>)}
      </div>
    );
}

export default Fruites;