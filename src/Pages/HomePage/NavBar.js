import { Container, Navbar, Nav} from "react-bootstrap"
import "./Home.css"
export default function NavBar(){
    return (
        <div>
            <Navbar expand="md" variant="light" bg="light" fixed="top" className="nav" scrolling >
                <Container>
                <Navbar.Brand href="#">MA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home" style={{color:"black"}}>About</Nav.Link>
                        <Nav.Link href="#link" style={{color:"black"}}>Resume</Nav.Link>
                        <Nav.Link href="#link" style={{color:"black"}}>Conatct</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}