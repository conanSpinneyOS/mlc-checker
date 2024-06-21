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
              
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header;