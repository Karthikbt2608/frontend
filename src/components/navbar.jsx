import '../styles/navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
          <div className="title">
            <h1>Foodie</h1>
          </div>
          <div className="links1  ">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Foods</a></li>
                <li><a href="">Add post</a></li>
                <li><a href="/login">logout</a></li>
            </ul>
          </div>
        </div>
     );
}
 
export default Navbar;