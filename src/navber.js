const navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
               
                <div className="links" style={{
                    display: 'flex',
                    justifyContent: 'Center', 
                    alignItems: 'center',
                    flexDirection: 'column',  
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    borderBottom: '2px solid #ccc'
                }}> 
                    <a href="/">Home</a> <br />
                    <a href="/about">About </a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
     );
}
 
export default navbar;