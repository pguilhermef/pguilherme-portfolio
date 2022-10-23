import Navbar from "./Navbar"

function MainContainer({children}) {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    </>
  )
}

export default MainContainer
