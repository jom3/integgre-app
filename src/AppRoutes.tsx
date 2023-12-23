import { Route, Routes } from "react-router-dom"
import { HomePage } from "./home"
import { Navbar, SideNav } from "./shared"
import { VentasPage } from "./ventas"
import { SolicitudesPage } from "./solicitudes"
import { AprobacionesPage } from "./aprobaciones"
import { BienvenidosPage } from "./home/pages/BienvenidosPage"

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<BienvenidosPage/>} />
          <Route path="ventas" element={<VentasPage />}/>
          <Route path="solicitudes" element={<SolicitudesPage />}/>
          <Route path="aprobaciones" element={<AprobacionesPage />}/>
        </Route>
      </Routes>
    </>
  )
}
