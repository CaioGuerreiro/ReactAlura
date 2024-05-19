
import { useState } from 'react';
import Banner from './componentes/Banner';

import Formulario from './componentes/Formulario';
import Time from './componentes/Time'
import { IColaborador } from './shared/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Mobile',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Back-End',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) =>{
   
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner imagemPath='/imagens/banner.png'/>     
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
