import React, {useContext, useState } from 'react';
import Select from 'react-select';
import {indicadorAnio} from '../docs/data.ts';
import { InstContext } from '../InstContext';

// componente para el selector del año
function Anio(props){
  const listaAnio = indicadorAnio;
  const [selected, setAnio] = useState(listaAnio[0].value);

  const {value2, setValue2} = useContext(InstContext);
  // Asignar el valor según la selección
  const handleSelectChange = ({value}) =>{
    console.log(value);
    setAnio(value);
    setValue2(value);
  }

return(
  <div class="flex-initial  m-1">
    <div class="max-w-screen-2xl">
      <p class="text-center ">{props.indicador}</p >
      <Select
      defaultValue={{ label: listaAnio[0].label, value: listaAnio[0].value}}
      options={listaAnio}
      onChange={handleSelectChange}
      />
    </div> 
  </div>
);
}

export default Anio;