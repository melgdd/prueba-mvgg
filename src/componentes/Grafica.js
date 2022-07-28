import React, {useContext} from 'react';
import ReactECharts from 'echarts-for-react';
import {baseIdentificacion, anioTrimestre} from '../docs/data.ts';
import { InstContext } from '../InstContext';

// BD Años - Trimestres
const linAniosTrim = anioTrimestre;

// BD Identificacion
const bdIdentificacion = baseIdentificacion;

function Grafica(){
  // Asignar los valores de los selectores 
  const {value, setValue} = useContext(InstContext);
  const {value2, setValue2} = useContext(InstContext);
  const {value3, setValue3} = useContext(InstContext);

  // * Filtrar Institución
  var selectedIns = value;
  if(selectedIns ==='todas'){
    var bdIdentificacionI = bdIdentificacion;
  }else{
    var bdIdentificacionI = bdIdentificacion.filter(bdIdentificacion => {
      return bdIdentificacion.institucion === selectedIns;
    });
  }

  // * Filtrar Año
  var selectedYear = value2;
  if(selectedYear === 'todos'){
    var bdIdentificacionA = bdIdentificacionI;
    var filteredAnio = linAniosTrim;
  }else{
    var bdIdentificacionA = bdIdentificacionI.filter(bdIdentificacionI => {
      return bdIdentificacionI.anio == selectedYear;
    });
    var filteredAnio = linAniosTrim.filter(linAniosTrim => {
      return linAniosTrim.anio == selectedYear;
    });
  }

  // * Filtrar Trimestre
  var selectedTri = value3;
  if(selectedTri === 'todos'){
    var bdIdentificacionF = bdIdentificacionA;
    var filteredAnioTrim = filteredAnio;
  }else{
    var bdIdentificacionF = bdIdentificacionA.filter(bdIdentificacionA => {
      return bdIdentificacionA.trimestre == selectedTri;
    });
    var filteredAnioTrim = filteredAnio.filter(filteredAnio => {
      return filteredAnio.trim == selectedTri;
    });
  }

  // Obtener datos de Años-Trimestres Y
  var todosAniosTrim = [];
  for(let trim in filteredAnioTrim){
    todosAniosTrim.push(filteredAnioTrim[trim].anioTrim)
  }

  // Obtener datos de Oficio de Solicitud
  const dataOficiosDeSolicitud = [];
  for(let element in bdIdentificacionF){
    dataOficiosDeSolicitud.push(bdIdentificacionF[element].oficiosDeSolicitud)
  }
  // Obtener Datos de Personas Con Huella Confronta
  const dataPersonasConhuellaConfronta = [];
  for(let element in bdIdentificacionF){
    dataPersonasConhuellaConfronta.push(bdIdentificacionF[element].personasConhuellaConfronta)
  }

  // Obtener Datos de Personas Con Coincidencias Para Identificación
  const dataPersonasConCoincidenciasParaIdentificacion = [];
  for(let element in bdIdentificacionF){
    dataPersonasConCoincidenciasParaIdentificacion.push(bdIdentificacionF[element].personasConCoincidenciasParaIdentificacion)
  }

  // Obtener Datos de Personas Confirmadas con Dictamen Pericial
  const dataPersonasConfirmadasConDictamenPericial = [];
  for(let element in bdIdentificacionF){
    dataPersonasConfirmadasConDictamenPericial.push(bdIdentificacionF[element].personasConfirmadasConDictamenPericial)
  }

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36, containLabel: true},
    legend: {
      data: ['Oficios de Solicitud', 'Personas Con Huella Confronta', 'Personas Con Coincidencias Para Identificación', 'Personas Confirmadas Con Dictamen Pericial'],
      type: 'scroll',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: todosAniosTrim,

    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Oficios de Solicitud',
        data: dataOficiosDeSolicitud,
        type: 'line',
      },
      {
        name: 'Personas Con Huella Confronta',
        data: dataPersonasConhuellaConfronta,
        type: 'line',
      },
      {
        name: 'Personas Con Coincidencias Para Identificación',
        data: dataPersonasConCoincidenciasParaIdentificacion,
        type: 'line',
      },
      {
        name: 'Personas Confirmadas Con Dictamen Pericial',
        data: dataPersonasConfirmadasConDictamenPericial,
        type: 'line',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return(
    <div class='sm:min-w-200'>
        <h2 class="text-center text4xl">
            Datos a lo largo de los trimestres
        </h2>
        <div>
        <ReactECharts option={options} />
        </div>
    </div>
  );
  }
  
  export default Grafica;