
 const Navbar = () => {
    return (
        <nav>
            <span><a href="http://">SoftLife</a>.</span>
            <ul className="nav-items">
                <li><a href="http://">Home</a></li>
                <li><a href="http://">Our Staff</a></li>
                <li><a href="http://">News</a></li>
                <li><a href="http://">Gallery</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Contact</a></li>

            </ul>

            <button type="button" className="rounded-full bg-pink-600 py-2 px-4">Enroll Now</button>
        </nav>
    )
}

export default Navbar