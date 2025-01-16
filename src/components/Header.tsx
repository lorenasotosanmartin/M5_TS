import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

  return (
    <Navbar expand="lg">
      <Container className="justify-content-center my-3">
        <a href="/home">
          <img  src="src\assets\img\logo.png" alt="Logo clinica chillán" title="Logo clinica chillán"
            width="100" height="45"/>
        </a>
      </Container>
    </Navbar>
  );
}