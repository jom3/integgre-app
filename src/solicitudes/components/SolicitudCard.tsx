import { Persona, useTarjetaStore } from "../../stores/tarjeta.store"

interface Props{
  persona:Persona
}

export const SolicitudCard = ({persona}:Props) => {

  const aceptarTarjeta = useTarjetaStore((state)=>state.aceptarTarjeta)
  const denegarTarjeta = useTarjetaStore((state)=>state.denegarTarjeta)

  return (
    <div className="flex justify-center items-center bg-dev_01 mt-5 p-2 border-2 border-dev_06 shadow-lg shadow-dev_06 rounded-lg hover:bg-dev_01">
    <div className="flex flex-row gap-5">
      <div className="flex flex-col">
        <span className="text-xl text-dev_06">Cliente: {persona.nombre}</span>
        <span className="text-xl text-dev_06">Telefono: {persona.telefono}</span>
      </div>
      <div className="flex flex-row items-center gap-5">
        <img onClick={()=>aceptarTarjeta(persona.ci)} src={'src/assets/checked.png'} alt=""  className="cursor-pointer rounded-full hover:shadow-md hover:shadow-dev_06"/>
        <img onClick={()=>denegarTarjeta(persona.ci)} src={'src/assets/delete.png'} alt=""  className="cursor-pointer rounded-full hover:shadow-md hover:shadow-dev_06"/>
      </div>
    </div>
  </div>
  )
}
