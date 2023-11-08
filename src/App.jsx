
import './App.css'
import CardCotizador from './components/CardCotizador'

function App() {
  

  return (
    <>
    <main className='flex justify-center flex-col items-center'>
    <h2 className='text-center'>Cotizador de puertas</h2>
    <div className='flex'>
      <div className='bg-red-600 p-2'>
      <form>
      <section>
      <label htmlFor="puertas">Seleccione el tipo de puerta</label>
      <select name="puertas" id="puertas">
        <option value="Sobrepuesta abatible escotilla refrigeracion 66MM">Sobrepuesta abatible escotilla refrigeracion 66MM</option>
        <option value="Sobrepuesta abatible escotilla congelacion mediaTemp 92MM">Sobrepuesta abatible escotilla congelacion mediaTemp 92MM</option>
        <option value="Sobrepuesta abatible escotilla congelacion baja temp">Sobrepuesta abatible escotilla congelacion baja temp</option>
      </select>
      </section>

      <section>
      <label htmlFor="temp">Temperaturas</label>
      <select name="temp" id="temp">
        <option value="> 4°C">Superior a 4°C</option>
        <option value="De 4°C a -20°C">De 4°C a -20°C</option>
        <option value="Inferior a -20°C">Inferior a -20°C</option>
      </select>
      </section>

      <section>
      <label htmlFor="dimensiones">Dimensiones</label>
      <select name="dimensiones" id="dimensiones">
        <option value="2x2">2x2 [m]</option>
        <option value="3x3">3x3 [m]</option>
        <option value="4x4">4x4 [m]</option>
      </select>
      </section>
      

    </form>

      </div>
      <div className='bg-gray-400 p-2'>
      <CardCotizador/>
      </div>

    </div>

    </main>
  
    
   
      
    </>
  )
}

export default App
