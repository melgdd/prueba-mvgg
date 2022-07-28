import React, {useContext, useState } from 'react';
import Select from 'react-select';
import {indicadorInstitucion} from '../docs/data.ts';
import { InstContext } from '../InstContext';

// componente para el selector de la Institución
function Institucion(props){
  const listaInstitucion = indicadorInstitucion;
  const [selected, setInstitucion] = useState(listaInstitucion[0].value);

  const {value, setValue} = useContext(InstContext);
  // Asignar el valor según la selección
  const handleSelectChange = ({value}) =>{
    console.log(value);
    setInstitucion(value);
    setValue(value);
  }
  
return(
  <div class="flex-initial m-1">
    <div class="max-w-screen-2xl">
      <p class="text-center ">{props.indicador}</p >
      <Select 
      defaultValue={{ label: listaInstitucion[0].label, value: listaInstitucion[0].value}}
      options={listaInstitucion}
      onChange={handleSelectChange}
      />
    </div> 
  </div>
);
}

export default Institucion;