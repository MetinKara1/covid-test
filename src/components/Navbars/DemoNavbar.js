import React from 'react';
import {Link} from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
    changeButtonText:
      window.location.href === 'https://covid19-tanimerkezi.com/bireylere-ozel'
        ? true
        : window.location.href ===
          'https://covid19-tanimerkezi.com/kurumlara-ozel'
        ? false
        : null,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    const {changeButtonText} = this.state;
    return (
      <>
        <header className='header-global'>
          <Navbar
            className='navbar-main navbar-transparent navbar-light headroom'
            expand='lg'
            id='navbar-main'
          >
            <Container>
              <NavbarBrand className='mr-lg-5' to='/' tag={Link}>
                <img
                  alt='...'
                  onClick={() => window.scrollTo(0, 0)}
                  src={require('assets/img/icons/common/lg.png')}
                />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse
                toggler='#navbar_global'
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col
                      className='collapse-brand'
                      xs='6'
                      // style={{background: '#0a1720'}}
                    >
                      <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img
                          alt='...'
                          src={require('assets/img/icons/common/lg2.png')}
                        />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='navbar-nav-hover align-items-lg-center' navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      nav
                      // onClick={() => this.setState({changeButtonText: true})}
                    >
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>
                        <Link
                          to='/'
                          style={{
                            color: `${
                              window.innerWidth > 992 ? 'white' : 'black'
                            } `,
                          }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Anasayfa
                        </Link>
                      </span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      nav
                      onClick={() => this.setState({changeButtonText: true})}
                    >
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>
                        <Link
                          to='/bireylere-ozel'
                          style={{
                            color: `${
                              window.innerWidth > 992 ? 'white' : 'black'
                            } `,
                          }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Bireylere Özel
                        </Link>
                      </span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-collection d-lg-none mr-1' />
                      <span
                        className='nav-link-inner--text'
                        onClick={() => this.setState({changeButtonText: false})}
                      >
                        <Link
                          to='/kurumlara-ozel'
                          style={{
                            color: `${
                              window.innerWidth > 992 ? 'white' : 'black'
                            } `,
                          }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {' '}
                          Kurumlara Özel
                        </Link>
                      </span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className='align-items-lg-center ml-lg-auto' navbar>
                  <NavItem className='d-none d-lg-block ml-lg-4'>
                    {changeButtonText !== null && (
                      <Button
                        className='btn-neutral btn-icon'
                        color='default'
                        // href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar'
                        target='_blank'
                        style={{scrollBehavior: 'smooth'}}
                      >
                        <a href='#appointment'>
                          <span className='btn-inner--icon'>
                            <i className='fa fa-send mr-2' />
                          </span>
                          <span className='nav-link-inner--text ml-1'>
                            {changeButtonText ? 'Randevu Al' : 'Teklif Al'}
                          </span>
                        </a>
                      </Button>
                    )}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
