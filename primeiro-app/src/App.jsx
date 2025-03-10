import './styles.css'
function App(){
  const estiloBotao = {paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}
  const texotDoRotulo = 'Nome:'
  const obterTextoDoRotulo = () => 'Enviar'
  const aoClicarNoBotao = () => alert('Clicou')
  return(
  <div
    style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label
      htmlFor= "nome"
      className='rotulo'
      style={{display: 'block', marginBotton: 4}}>
        {texotDoRotulo}
        </label>
       <input
         type="text" 
         id="nome"
         style={estiloBotao}
       />
       <button
       onClick={() => aoClicarNoBotao() }
       style={{marginTop: 12, paddingTop: 8,baddingBotton: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%',borderRadius: 8}}>
        {obterTextoDoRotulo ()}
       </button>
  </div>
  )
}

export default App