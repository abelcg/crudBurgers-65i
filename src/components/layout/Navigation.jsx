import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <Navbar className='bg-red' expand='lg'>
        <Container>
          <Navbar.Brand className='logo' href='/'>
            Crud Hamburguesería
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto color-nav'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/product/table'>
                Manage Products
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
