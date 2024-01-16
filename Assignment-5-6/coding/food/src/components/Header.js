import FoodFireLogo from '../Images/Food Fire Logo.png';
const Title=()=>{
    return (
        <a href='/'>
            <img className='logo' src={FoodFireLogo} alt="Food Fire Logo"/>
        </a>
    )

}
const Header=()=>{
    return(
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contanct Us</li>
                    <li>
                        <i className='fa-solid fa-cart-shopping'></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;