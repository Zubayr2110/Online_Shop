import Header from "../Header/Header";
import Mainpart from "./Mainpart";
import Footer from "../Footer/Footer";



export default function Main({user}) {
  return (
    <>
      <Header user={user}/> 
      <Mainpart/>
      <Footer/>
    </>

  )
}
