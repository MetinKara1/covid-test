import React from 'react';
import {Link} from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from 'classnames';
import bg from '../../assets/img/theme/bg3.png';
import mbg from '../../assets/img/theme/mbg.png';

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

// index page sections
import Download from '../IndexSections/Download.js';

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref='main'>
          <div className=''>
            {/* shape Hero */}
            <section className='section section-lg section-shaped'>
              <div
                className=''
                style={{
                  backgroundImage: `${
                    window.innerWidth > 992 ? `url(${bg})` : `url(${mbg})`
                  } `,
                  width: 'auto',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  marginTop: -96,
                  height: window.innerWidth > 768 ? 700 : 490,
                  position: 'relative',
                }}
              >
                <Container className='py-lg-md d-flex'>
                  <div className='col px-0'>
                    <Row style={{marginTop: 200}}>
                      <Col lg='6'>
                        <h1
                          className='display-3 text-white'
                          style={{
                            fontSize:
                              window.innerWidth > 1125
                                ? 60
                                : window.innerWidth > 500
                                ? 40
                                : 25,
                            fontFamily: 'Calibri',
                          }}
                        >
                          COVID-19 TESTLERİNİZİ GÜVENLE YAPTIRIN{' '}
                          {/* <span>completed with examples</span> */}
                        </h1>
                        <p
                          className='lead text-white'
                          style={{
                            fontFamily: 'Arial',
                            fontSize: window.innerWidth < 325 ? 12 : 20,
                          }}
                        >
                          COVID-19 testlerinizi yaptırarak virüse karşı önlem
                          alabilir, kendinizi ve sevdiklerinizi
                          koruyabilirsiniz.
                        </p>
                        {/* <div className='btn-wrapper'></div> */}
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
              <section className='section section-lg pt-lg-0 mt--200'>
                <Container style={{marginTop: 96}}>
                  <Row className='justify-content-center'>
                    <Col lg='12'>
                      <Row className='row-grid'>
                        <Col lg='6'>
                          <Card className='card-lift--hover shadow border-0'>
                            <CardBody className='py-2'>
                              <h6
                                className='text-primary'
                                style={{
                                  color: '#001430',
                                  fontWeight: 700,
                                  fontFamily: 'Calibri',
                                  textAlign: 'center',
                                }}
                                //    className='text-primary text-uppercase'
                              >
                                BİREYLERE ÖZEL
                              </h6>
                              <p
                                className='description mt-3'
                                style={{textAlign: 'center', color: '#333'}}
                              >
                                COVID-19 testlerinizi yaptırarak virüse karşı
                                önlem alabilir, kendinizi ve sevdiklerinizi
                                koruyabilirsiniz.
                              </p>
                              <Button
                                className='text-primary'
                                color='link'
                                href='#pablo'
                                onClick={e => e.preventDefault()}
                                style={{
                                  paddingLeft: -20,
                                  textAlign: 'center',
                                  color: '#05e8c2',
                                  fontWeight: 500,
                                  display: 'block',
                                  fontSize: 13,
                                  fontWeight: 600,
                                  fontFamily: 'Arial',
                                }}
                              >
                                <Link
                                  to='/bireylere-ozel'
                                  style={{textTransform: 'none'}}
                                >
                                  Detaylı Bilgi{' '}
                                  <i
                                    className='ni ni-fat-add'
                                    style={{marginTop: 0, paddingLeft: -20}}
                                  ></i>
                                </Link>
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg='6'>
                          <Card className='card-lift--hover shadow border-0'>
                            <CardBody className='py-2'>
                              <h6
                                className='text-primary'
                                style={{
                                  fontWeight: 700,
                                  fontFamily: 'Calibri',
                                  textAlign: 'center',
                                }}
                              >
                                KURUMLARA ÖZEL
                              </h6>
                              <p
                                className='description mt-3'
                                style={{textAlign: 'center', color: '#333'}}
                              >
                                Çalışanlarınızın sağlığı ve güvenliği için
                                COVID-19 testlerinizi yaptırabilirsiniz..
                              </p>

                              <Button
                                className='text-primary'
                                color='link'
                                href='#pablo'
                                onClick={e => e.preventDefault()}
                                style={{
                                  paddingLeft: -20,
                                  textAlign: 'center',
                                  fontWeight: 500,
                                  display: 'block',
                                  fontSize: 13,
                                  fontWeight: 600,
                                  fontFamily: 'Arial',
                                }}
                              >
                                <Link
                                  to='/kurumlara-ozel'
                                  style={{textTransform: 'none'}}
                                >
                                  Detaylı Bilgi{' '}
                                  <i
                                    className='ni ni-fat-add'
                                    style={{marginTop: 0, paddingLeft: -20}}
                                  ></i>
                                </Link>
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            </section>
          </div>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
