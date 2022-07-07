import { useState } from 'react';
import Banner from './componentes/Banner';
import Colaborador from './componentes/Colaborador';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: 'Front-End',
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8FFFF"
    },
    {
      nome: 'Data Science',
      corPrimaria: "#A6D157",
      corSecundaria: "#E9FFE3"
    },
    {
      nome: 'Develops',
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: 'UX e Design',
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: 'Mobile',
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: 'Inovação e Lista de Times',
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores= {colaboradores.filter(colaborador => colaborador.time === time.nome)}
    />)}
 
    </div>
  );
}

export default App;