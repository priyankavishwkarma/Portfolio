export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <a href="#">Anonymouse</a>
                </div>
                <div className="cross-icon">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <ul className="menu">
                    <li><a href="#" className="active"><i class="fa-solid fa-house"></i>Home</a></li>
                    <li><a href="#"><i class="fa-solid fa-user"></i>About</a></li>
                    <li><a href="#"><i class="fa-solid fa-list"></i>Services</a></li>
                    <li><a href="#"><i class="fa-solid fa-briefcase"></i>Portfolio</a></li>
                    <li><a href="#"><i class="fa-solid fa-comments"></i>Contact Me</a></li>
                </ul>
            </div>
        </>
    )
}