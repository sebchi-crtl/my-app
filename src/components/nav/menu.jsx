import '../../App.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu(){

    return(
        <div className="mynav">
            <div className="head mt-2" style={{display:'flex'}}>
                <div className="lang">
                <Nav>
                    <Nav.Item >
                    <ul>
                        <li>
                        <Nav.Link style={{paddingLeft:0, paddingRight:1, color:'#ebed75'}} eventKey="1" href="#/home">
                            EN 
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link style={{paddingLeft:0, paddingRight:0, color:'#ebed75'}} eventKey="1" href="#/home">
                            | FR
                        </Nav.Link>
                        </li>
                    </ul>
                    </Nav.Item>
                </Nav>
                </div>
                <div className="menu">
                <Nav>
                    <Nav.Item className="tab">
                    <ul>
                        <li>
                        <Nav.Link eventKey="2">
                            <Link style={{color:'#ebed75'}} to="works">Work</Link>
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link eventKey="2">
                            <Link style={{color:'#ebed75'}} to="/">About</Link> 
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link style={{color:'#ebed75'}} eventKey="2">
                            Contact 
                        </Nav.Link>
                        </li>
                    </ul>
                    </Nav.Item>
                </Nav>
                </div>
                <div className="portfolio">
                <Nav className="dropdown">
                    Sebastine's Portfolio
                </Nav>
                </div>
            </div>
            <hr className="hr" style={{
                margin:0,
                padding: 0,
                backgroundColor: '#ebed75',
                height: 2,
            }} />
        </div>
    );
}

export default Menu;