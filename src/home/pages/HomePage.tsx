import { Outlet } from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-20">
      <Outlet />
    </div>
  )
}
