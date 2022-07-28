import React from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import {baseCSV} from '../docs/data.ts';

// Componente para hacer la descarga de los datos
function Descarga(){
  const csvData = baseCSV;
  return(
    <div class="text-center-lg underline" >
        <h3>
          <CSVLink data={csvData}>Descargar todos los datos</CSVLink>
        </h3>
    </div>
  );
}
  
export default Descarga;