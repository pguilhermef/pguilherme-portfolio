import Footer from "./Footer"
import Navbar from "./Navbar"

function MainContainer({children}) {
  return (
    <>
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </>
  )
}

export default MainContainer
