import { Link } from "react-router-dom"
import { useSidenavStore } from "../../../stores/sidenav.store";

export const Navbar = () => {
  const isActive = useSidenavStore((state)=>state.isActive)
  const closeSidenav = useSidenavStore((state)=>state.closeSidenav)
  const imageUrl:string = 'src/assets/logo.png';
  return (
    <nav className="shadow bg-dev_06">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link onClick={()=>isActive?closeSidenav():''} to='/'><img src={imageUrl} alt="" className="w-12"/></Link>
        <span className="text-2xl text-dev_04">Banco Credit Suisse</span>
        <span></span>
    </div>
  </nav>
  )
}
