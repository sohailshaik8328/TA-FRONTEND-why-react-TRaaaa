
function Header() {
    return (
        <header className="header_section">
            <div className="container">
                <div className="header flex">
                    <section className="header_left">
                        <h1 className="brand">Gizmo</h1>
                    </section>
                    <section className="header_right">
                        <nav className="nav">
                            <ul className='flex'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </div>
        </header>
    )
}
export default Header