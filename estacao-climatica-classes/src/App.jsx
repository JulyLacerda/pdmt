import React from 'react'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      latitute: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
  }

  obterEstacao = (data,latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //21/12
    const d3 = new Date(anoAtual, 11, 21)
    //21/03
    const d4 = new Date(anoAtual, 2, 22)
    const estaNoSul = latitute < 0
    if (data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
  
  }

  icones = {
    'Primavera' : 'seedling',
    'Verão' : 'clouds-sun',
    'Outono' : 'tree',
    'Inverno' : 'snowflake',

  }  

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude)
        const icone = this.icones[estacao]
        this.setState ({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleTimeString(),
          icone: icone
        })
      },
      (erro) => {

      }

    )
  }

  render(){
  return (
    <div>Meu App</div>
  )
 }
}

export default App