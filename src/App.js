import React, { useState } from 'react';
import { InstContext } from './InstContext';
import './App.css';
import Institucion from './componentes/Institucion';
import Anio from './componentes/Anio';
import Trimestre from './componentes/Trimestre';
import Grafica from './componentes/Grafica';
import Descarga from './componentes/Descarga';
import Titulo from './componentes/Titulo';



function App() {
  // Establecer los valores default de la gráfica
  const [value, setValue] = useState("todas");
  const [value2, setValue2] = useState("todos");
  const [value3, setValue3] = useState("todos");
  

  return (
    <div className="App">
      <div>
        <Titulo titulo="Identificación humana en México"/>
      </div>
      <InstContext.Provider value={{ value, setValue, value2, setValue2, value3, setValue3}}>
        <div class='max-w-screen-2xl items-center '>
          <div class='flex items-stretch m-2'>
            <Institucion indicador="Institución"/> 
            <Anio indicador="Año"/>
            <Trimestre indicador="Trimestre"/>
          </div>
          <div>
            <div>
              <Descarga/>
            </div>
          </div>
          <div className='contenedor-principal-grafica'>
            <div>
              <Grafica 
              />
            </div>
          </div>
        </div>
      </InstContext.Provider>
      
    </div>
  );
}

export default App;
