import { Link, useLocation } from "react-router-dom";
import { useSidenavStore } from "../../../stores/sidenav.store";
import { IoMenu } from "react-icons/io5";

interface Navigation{
  name:string;
  path:string;
}

const sidenavItems:Navigation[]=[
  {
    name:'Solicitud de tarjetas',
    path:'/ventas'
  },
  {
    name:'Tarjetas solicitadas',
    path:'/solicitudes'
  },
  {
    name:'Tarjetas aprobadas',
    path:'/aprobaciones'
  }
  
]

export const SideNav = () => {
  const {pathname} = useLocation()
  const isActive = useSidenavStore((state)=>state.isActive)
  const closeSidenav = useSidenavStore((state)=>state.closeSidenav)
  const openSidenav = useSidenavStore((state)=>state.openSidenav)
  return (
    <>
      <button onClick={()=>openSidenav()} className={`p-2 bg-dev_05 rounded-full mt-2 ml-2 ${isActive?'hidden':'fixed bottom-2'}`}><IoMenu size='30'/></button>
      <aside className={`${isActive?'block':'hidden'} w-[300px] fixed bg-dev_02 p-2 mt-2 shadow-lg shadow-dev_06 rounded-tr-xl rounded-br-xl z-50`}>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          {
            sidenavItems.map(item=>(
              <Link to={item.path} onClick={()=>closeSidenav()} key={item.name} className={`w-full p-2 rounded text-center  font-semibold ${pathname===item.path?'bg-dev_06 text-dev_05':'bg-dev_05 text-dev_06 hover:bg-dev_01 hover:text-dev_05'}`}>{item.name}</Link>
            ))
          }
        </div>
      </aside>
    </>
  )
}
