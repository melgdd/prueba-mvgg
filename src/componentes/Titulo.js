import React from 'react';

// componente para el selector del año
function Titulo(props){
return(
  <div >
    <div>
      <h1 class=" text-4xl text-center">{props.titulo}</h1 >
    </div> 
  </div>
);
}

export default Titulo;