const Header = () => {

    return (
        <div className="navbar bg-base-100 rounded-2xl shadow-2xl">
            <div className="navbar-start">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full">
                        <img alt="Oceanskies Logo" src="/oslogo.png" />
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Certificate Mate</a>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

export default Header;