
import { Link } from "react-router-dom";
import AppBarStyled from "./AppBarStyled";
import logo from '../../assets/img/logo/logo.png'
import NavBar from "../navBar/NavBar";


const AppBar = () => {

    return (
      <>
        <AppBarStyled >
        <Link className='logo' to='/dairy'>
      <img src={logo} alt='logo' width='46'></img>
      <p>Slim<span>Mom</span></p>
    </Link>
       <NavBar/>     
        </AppBarStyled>
        </>
    )
  }
  
  export default AppBar



  /* { /*320 < window.innerWidth < 767 && <MobileBar/> }
    {/*window.innerWidth < 1279 ? <TabletBar/> : <DesktopBar/>}
  
    {/*isAuth &&  <UserMenu/>}
    {/*window.innerWidth < 767 && isAuth ? <button onClick={onHandelClick}> {click ? ( <Cross width={25}/> && <Modal/> )  :
           <BurgerIcon width={30} />}
          </button>  :
    <Navigation/>} */