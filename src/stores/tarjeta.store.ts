import { create } from "zustand";

export interface Persona{
  nombre:string;
  ci:number;
  email:string;
  estado:number;
  telefono:string;
  monto?:number
}

interface TarjetaState{
  personas:Persona[],
  setPersona:(persona:Persona)=> void,
  sComputed:{
    tarjetasSolicitadas:Persona[]
  },
  aComputed:{
    tarjetasAprobadas:Persona[]
  },
  aceptarTarjeta:(ci:number)=>void,
  denegarTarjeta:(ci:number)=>void

}

export const useTarjetaStore = create<TarjetaState>((set, get)=>({
  personas:[
    {
      nombre:'usuario 1', ci:10001, estado:1, email:'usuario1@gmail.com', telefono:'+591 ########',monto:1001
    },
    {
      nombre:'usuario 2', ci:10002, estado:1, email:'usuario2@gmail.com', telefono:'+591 ########',monto:1002
    },
    {
      nombre:'usuario 3', ci:10003, estado:2, email:'usuario3@gmail.com', telefono:'+591 ########',monto:1003
    },
    {
      nombre:'usuario 4', ci:10004, estado:2, email:'usuario4@gmail.com', telefono:'+591 ########',monto:1004
    },

  ],
  setPersona:(persona:Persona)=>{
    set((state)=>({personas:[...state.personas, persona]}))
  },
  sComputed:{
    get tarjetasSolicitadas(){
      return get().personas.filter(persona=>persona.estado==1)
    }
  },
  aComputed:{
    get tarjetasAprobadas(){
      return get().personas.filter(persona=>persona.estado==2)
    }
  },
  aceptarTarjeta:(ci:number)=>{
    set((state)=>({
      personas:state.personas.map((persona)=>{
        if(persona.ci===ci){
          return {
            ...persona,
            estado:2
          };
        }else{
          return persona;
        }
      })
    }))
  },
  denegarTarjeta:(ci:number)=>{
    set((state)=>({
      personas:state.personas.map((persona)=>{
        if(persona.ci===ci){
          return {
            ...persona,
            estado:0
          };
        }else{
          return persona;
        }
      })
    }))
  }
  
}))