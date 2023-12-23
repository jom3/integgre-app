import { create } from "zustand";

interface SidenavState{
  isActive:boolean;
  openSidenav:()=>void;
  closeSidenav:()=>void;
}

export const useSidenavStore = create<SidenavState>((set)=>({
  isActive:true,
  openSidenav:(()=>{
    set(()=>({isActive: true}))
  }),
  closeSidenav:(()=>{
    set(()=>({isActive: false}))
  })
}))