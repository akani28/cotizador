import React from 'react'

const CardCotizador = () => {
  return (
    <main className='capitalize w-[400px] p-4 font-bold flex flex-col gap-4'>
        <section className='flex justify-between border-[2px] p-4'>
            <div>
                <p>Empresa:</p>
                <p>Contacto:</p>
                <p>direccion:</p>
                <p>Email:</p>
            </div>
            <div>
                <p>nro.</p>
                <p>cotizacion nro.</p>
                <p>fecha:</p>
            </div>
        </section>
        <section className='border-[2px] p-4'>
            <p>Rango de temperaturas</p>
            <p>tipo</p>
            <p>dimensiones</p>
            <p>espesor</p>
            <p>hoja</p>
            <p>bisagras</p>
            <p>cerradura</p>
            <p>marco</p>
            <p>jamba</p>
            <p>contramarco</p>
            <p>caucho perimetral</p>
            <p>caucho sastrera</p>
            <p>resistencias marco</p>
            <p>resistencias puerta</p>
            <p>resistencias piso</p>
            <p>riel en piso</p>
            <p>proteccion</p>
            <p>antipanico</p>
        </section>
    </main>
  )
}

export default CardCotizador