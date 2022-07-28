import React, {useContext, useState } from 'react';
import Select from 'react-select';
import {indicadorTrimestre} from '../docs/data.ts';
import { InstContext } from '../InstContext';

// componente para el selector del trimestre
function Trimestre(props){
  const listaTrimestre = indicadorTrimestre;
  const [selected, setTrimestre] = useState(listaTrimestre[0].value);

  const {value3, setValue3} = useContext(InstContext);
  // Asignar el valor según la selección
  const handleSelectChange = ({value}) =>{
    console.log(value);
    setTrimestre(value);
    setValue3(value);
  }


return(
  <div className="m-1 items-center">
    <div class="max-w-screen-2xl">
      <p class="text-center ">{props.indicador}</p >
      <Select 
      defaultValue={{ label: indicadorTrimestre[0].label, value: indicadorTrimestre[0].value}}
      options={indicadorTrimestre}
      onChange={handleSelectChange}
      />
    </div> 
  </div>
);
}

export default Trimestre;