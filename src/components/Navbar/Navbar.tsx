import './Navbar.css'

function Navbar() {
    return (
        <div id="nav-bar">
            <h2 className="name">Jane</h2>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#hero">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar