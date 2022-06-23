import { Container, Navbar, Nav} from "react-bootstrap"
import "./Home.css"
export default function NavBar(){
    return (
        <div>
            <Navbar expand="md" variant="light" bg="light" fixed="top" className="nav" scrolling >
                <Container>
                <Navbar.Brand href="#Home">MA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#projects" style={{color:"black"}}>Projects</Nav.Link>
                        <Nav.Link download="MansoorAnis.pdf" href="https://drive.google.com/file/d/1LGZtslx1Vs2LLp393aVc0eliWUWaEZ_3/view?usp=sharing" style={{color:"black"}}>Resume</Nav.Link>
                        <Nav.Link href="mailto: mansooranis03@gmail.com" style={{color:"black"}}>Conatct</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}