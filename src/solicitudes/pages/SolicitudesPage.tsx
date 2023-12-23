import { useTarjetaStore } from "../../stores/tarjeta.store"
import { SolicitudCard } from "../components/SolicitudCard"

export const SolicitudesPage = () => {
  const personas = useTarjetaStore((state)=>state.sComputed.tarjetasSolicitadas)
  return (
    <div className="flex flex-col bg-blue-400 px-20 py-10 rounded-xl border-2 border-dev_06 shadow-lg shadow-dev_06">
      <h1 className="text-3xl text-dev_06 text-center p-10">Tarjetas solicitadas</h1>
      {
        personas.map(persona=>(
          <SolicitudCard key={persona.ci} persona={persona}/>
        ))
      }
    </div>
  )
}
