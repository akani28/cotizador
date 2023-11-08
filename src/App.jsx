
import './App.css'
import CardCotizador from './components/CardCotizador'

function App() {
  

  return (
    <>
    <h3>Cotizador de puertas</h3>
    <form>
      <section>
      <label htmlFor="puertas">Seleccione el tipo de puerta</label>
      <select name="puertas" id="puertas">
        <option value="Sobrepuesta abatible escotilla refrigeracion 66MM">Sobrepuesta abatible escotilla refrigeracion 66MM</option>
        <option value="Sobrepuesta abatible escotilla congelacion mediaTemp 92MM">Sobrepuesta abatible escotilla congelacion mediaTemp 92MM</option>
        <option value="Sobrepuesta abatible escotilla congelacion baja temp">Sobrepuesta abatible escotilla congelacion baja temp</option>
      </select>

      </section>
      

    </form>
    <CardCotizador/>
      
    </>
  )
}

export default App
