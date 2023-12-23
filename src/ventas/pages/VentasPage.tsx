import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTarjetaStore } from "../../stores/tarjeta.store";

interface VentasForm{
  nombre:string;
  ci:number;
  estado:number;
  email:string;
  telefono:string;
  monto?:number
}

const schema = z.object({
  nombre:z.string({ required_error: "Nombre requerido"}).min(4,{message:'El nombre tiene que tener al menos 4 caracteres'}),
  ci:z.number({invalid_type_error:'Se requiere solo numeros'}).min(1,{message:'El nombre tiene que tener al menos 1 caracter'}),
  email:z.string({ required_error: "Email requerido"}).email({message:'Formato de correo invalido'}),
  telefono:z.string({ required_error: "Telefono requerido"}).min(8,{message:'El nombre tiene que tener al menos 8 caracteres'}),
})


export const VentasPage = () => {

  const setPersona = useTarjetaStore((state)=>state.setPersona)


  const {register, handleSubmit, formState:{errors}, reset} = useForm<VentasForm>({resolver:zodResolver(schema)});

  const submitData = (data:VentasForm) => {
    setPersona({...data, estado:1})
    reset()
  }

  return (
    <div className="p-5 bg-dev_02 rounded border-2 border-dev_06 shadow-black shadow-xl">
      <h1 className="text-center text-dev_05 text-3xl">Solicitud de tarjetas de crédito</h1>
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col items-center  mt-10">
        <label className="w-full flex justify-between gap-2">
        <span className="text-dev_05 font-semibold">Nombre:</span>
          <input type="text" className="p-2 outline-none rounded text-dev_06 border-2 border-dev_06" {...register("nombre")}/>
        </label>
          {errors.nombre && <span className="text-dev_05 underline">{errors.nombre.message}</span>}
        <label className="w-full flex justify-between gap-2 mt-5">
          <span className="text-dev_05 font-semibold">Documento de identidad:</span>
          <input type="text" className="p-2 outline-none rounded text-dev_06 border-2 border-dev_06" {...register("ci",{valueAsNumber:true})} />
        </label>
        {errors.ci && <span className="text-dev_05 underline">{errors.ci.message}</span>}

        <label className="w-full flex justify-between gap-2 mt-5">
        <span className="text-dev_05 font-semibold">Correo electronico:</span>

          <input type="text" className="p-2 outline-none rounded text-dev_06 border-2 border-dev_06" {...register("email")} />
        </label>
        {errors.email && <span className="text-dev_05 underline">{errors.email.message}</span>}

        <label className="w-full flex justify-between gap-2 mt-5">
        <span className="text-dev_05 font-semibold">Telefono:</span>
          <input type="text" className="p-2 outline-none rounded text-dev_06 border-2 border-dev_06" {...register("telefono")} />
        </label>
        {errors.telefono && <span className="text-dev_05 underline">{errors.telefono.message}</span>}

        <button type="submit" className="bg-dev_06 p-2 text-dev_05 font-semibold border-2 border-dev_06 rounded mt-5 hover:bg-dev_01 hover:text-dev_06 transition-all duration-200">Registrar</button>
      </form>
    </div>
  );
};
