import { useState } from "react";
import "./App.css";
import CardCotizador from "./components/CardCotizador";

function App() {
  const [puerta, setPuerta] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    getValueSelect();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const handleClick = () => {
    console.log(puerta);
  };
  const getValueSelect = () => {
    var select = document.getElementById("puertas");
    select.addEventListener("change", function () {
      var selectedOption = this.options[select.selectedIndex];
      console.log(selectedOption.text)
    });
  };

  return (
    <>
      <main className="flex justify-center flex-col items-center capitalize">
        <h2 className="text-center">Cotizador de puertas</h2>
        <div className="flex">
          <div className="bg-red-600 p-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-2 justify-center items-center"
            >
              <section>
                <label htmlFor="puertas">Seleccione el tipo de puerta</label>
                <select
                  name="puertas"
                  id="puertas"
                  value={puerta}
                  onChange={handleChange}
                >
                  <option name="option" value="Sobrepuesta abatible escotilla refrigeracion 66MM">
                    Sobrepuesta abatible escotilla refrigeracion 66MM
                  </option>
                  <option value="Sobrepuesta abatible escotilla congelacion mediaTemp 92MM">
                    Sobrepuesta abatible escotilla congelacion mediaTemp 92MM
                  </option>
                  <option value="Sobrepuesta abatible escotilla congelacion baja temp">
                    Sobrepuesta abatible escotilla congelacion baja temp
                  </option>
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

              <section>
                <label htmlFor="espesor">espesor</label>
                <select name="espesor" id="espesor">
                  <option value="66">66</option>
                  <option value="92">92</option>
                  <option value="N/A">N/A</option>
                </select>
              </section>

              <section>
                <label htmlFor="hoja">Hoja</label>
                <select name="hoja" id="hoja">
                  <option value="LAMINA 9010 0.60mm">LAMINA 9010 0.60mm</option>
                  <option value="LAMINA ACERO INOX 430">
                    LAMINA ACERO INOX 430
                  </option>
                  <option value="LAMINA ACERO INOX 340">
                    LAMINA ACERO INOX 340
                  </option>
                  <option value="LAMINA PRFV 2.00mm">LAMINA PRFV 2.00mm</option>
                  <option value="N/A">N/A</option>
                </select>
              </section>

              <button onClick={handleClick}>cotizar</button>
            </form>
          </div>
          <div className="bg-gray-400 p-2">
            <CardCotizador />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
