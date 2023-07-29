import Nav from "./Header/Nav"
import Navi from "./Header/Navi"
import Footer from "./Footer/Footer"
export default function Mainlayout(props) {
    return (
      <>
        <Navi></Navi>
        <Nav></Nav>
        {props.children}
        {/*<Footer></Footer>*/}
      </>
    )
  }