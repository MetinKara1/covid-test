import React, {useState, useEffect} from 'react';
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Table,
  Container,
  Button,
  Row,
  Col,
} from 'reactstrap';
// core components
import classnames from 'classnames';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import ExportExcell from './ExportExcell.js';
import {AppointmentService} from '../../services/index';

import '../../assets/css/validation.css';
import {responseMessages} from 'config/utils';
import Applications from './Applications';

const ApplicationsOffersView = ({
  appointmentService = new AppointmentService(),
}) => {
 
  const [tableTitles,] = useState({AddedDate:'Tarih',Email:'Eposta',Location:'Lokasyon',Message:'Mesaj',Name:'Ad-Soyad',Phone:'Telefon',TestType:'Test Tipi'});
  const [navstate,setNavState] = useState({iconTabs:1,plainTabs:1});

  // const [tableTitles,] = useState({Name:'Ad-Soyad',Email:'Eposta',Phone:'Telefon',TestType:'Test Tipi',Location:'Lokasyon',Message:'Mesaj',KVKK:'KVKK'});
  const tableTitles = {
    Name: 'Ad-Soyad',
  };
  const [navstate, setNavState] = useState({iconTabs: 1, plainTabs: 1});


  const [offerData, setOfferData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);
  
  useEffect(() => {
    appointmentService.getAppointmentsData().then(res => {

        if (res.data) {
            setAppointmentsData(res.data.data);
        }
    });

      if (res.data) {
        setOfferData(res.data.data);
      }
      console.log('res', res.data);
      console.log('of', offerData);
    });

  }, []);
 const getOffersData = () => {
    appointmentService.getOffersData().then(res => {
        if (res.data) {
            setOfferData(res.data.data);
        }
    });
 }
  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setNavState({
      [state]: index,
    });
  };

  return (
    <>
      <DemoNavbar />
      <main className='profile-page'>
        <section className='section-profile-cover section-shaped my-0'>
          {/* Circles background */}
          <div className='shape shape-style-1 shape-default alpha-4'></div>
          {/* SVG separator */}
          <div className='separator separator-bottom separator-skew'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon className='fill-white' points='2560 0 2560 100 0 100' />
            </svg>
          </div>
        </section>
        <section className='section' style={{paddingTop: 0}}>
          <Container>

            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="12">
                    <Col className="mt-5 mt-lg-0" lg="12">
          {/* Menu */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              BAŞVURU - TEKLİF EKRANI
            </small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={navstate.plainTabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: navstate.plainTabs === 1
                  })}
                  onClick={e => toggleNavs(e, "plainTabs", 1)}
                  href="#pablo"
                  role="tab"
                >
                  Başvurular
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={navstate.plainTabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: navstate.plainTabs === 2
                  })}
                  onClick={e => toggleNavs(e, "plainTabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                 Teklifler
                </NavLink>
              </NavItem>
                </Nav>
          </div>
                  <Card className="shadow">
                  <CardBody>
                      <TabContent activeTab={"plainTabs" + navstate.plainTabs}>
                      <TabPane tabId="plainTabs1">
                      <div className="card-profile-actions">
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                        style ={{marginBottom:10}}
                      >
                           <span className="btn-inner--icon mr-1">
                    <i className="ni ni-curved-next" />
                  </span>
                  <ExportExcell data={offerData && offerData} titles={tableTitles}/>
                      </Button>
                    </div>
                      <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Ad-Soyad</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Test Tipi</th>
                            <th>Lokasyon</th>
                            <th>Messages</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            appointmentsData.length > 0 && appointmentsData.map((item) => {
                            return ( 
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.Name} </td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
                                <td>{item.TestType}</td>
                                <td>{item.Location}</td>
                                <td>{item.Message}</td>
                                <td>{item.AddedDate}</td>
                            </tr>
                            )
                            })
                        }
                           
                           
                       
                           
                        </tbody>
                    </Table>
                      </TabPane>
                      <TabPane tabId="plainTabs2"
                      onClick={getOffersData()}>
                      <div className="card-profile-actions">
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                        style ={{marginBottom:10}}
                      >
                           <span className="btn-inner--icon mr-1">
                    <i className="ni ni-curved-next" />
                  </span>
                  <ExportExcell data={offerData && offerData} titles={tableTitles}/>
                      </Button>
                    </div>
                      <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Ad-Soyad</th>
                            <th>Email</th>
                            <th>Telefon</th>
                            <th>Test Tipi</th>
                            <th>Kurum Adı</th>
                            <th>Çalışan Sayısı</th>
                            <th>Lokasyon</th>
                            <th>Messages</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            offerData.length > 0 && offerData.map((item) => {
                            return ( 
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.Name} </td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
                                <td>{item.TestType}</td>
                                <td>{item.CorporateName}</td>
                                <td>{item.WorkerCount}</td>
                                <td>{item.Location}</td>
                                <td>{item.Message}</td>
                                <td>{item.AddedDate}</td>
                            </tr>
                            )
                            })
                        }
                           
                           
                       
                           
                        </tbody>
                    </Table>
                    
                      </TabPane>
                       </TabContent>
                  </CardBody>
                  </Card>
                  </Col>
     

            <Card className='card-profile shadow mt--300'>
              <div className='px-4'>
                <div className='mt-5 py-5 border-top text-center'>
                  <Row className='justify-content-center'>
                    <Col lg='12'>
                      <Col className='mt-5 mt-lg-0' lg='12'>
                        {/* Menu */}
                        <div className='mb-3'>
                          <small className='text-uppercase font-weight-bold'>
                            BAŞVURU - TEKLİF EKRANI
                          </small>
                        </div>
                        <div className='nav-wrapper'>
                          <Nav
                            className='nav-fill flex-column flex-md-row'
                            id='tabs-icons-text'
                            pills
                            role='tablist'
                          >
                            <NavItem>
                              <NavLink
                                aria-selected={navstate.plainTabs === 1}
                                className={classnames('mb-sm-3 mb-md-0', {
                                  active: navstate.plainTabs === 1,
                                })}
                                onClick={e => toggleNavs(e, 'plainTabs', 1)}
                                href='#pablo'
                                role='tab'
                              >
                                Başvurular
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                aria-selected={navstate.plainTabs === 2}
                                className={classnames('mb-sm-3 mb-md-0', {
                                  active: navstate.plainTabs === 2,
                                })}
                                onClick={e => toggleNavs(e, 'plainTabs', 2)}
                                href='#pablo'
                                role='tab'
                              >
                                Teklifler
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                        <Card className='shadow'>
                          <CardBody>
                            <TabContent
                              activeTab={'plainTabs' + navstate.plainTabs}
                            >
                              <TabPane tabId='plainTabs1'>
                                <div className='card-profile-actions'>
                                  <Button
                                    className='float-right'
                                    color='default'
                                    href='#pablo'
                                    onClick={e => e.preventDefault()}
                                    size='sm'
                                    style={{marginBottom: 10}}
                                  >
                                    <span className='btn-inner--icon mr-1'>
                                      <i className='ni ni-curved-next' />
                                    </span>
                                    <ExportExcell
                                      data={offerData && offerData}
                                      titles={tableTitles}
                                    />
                                  </Button>
                                </div>
                                <Table responsive>
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Ad-Soyad</th>
                                      <th>Email</th>
                                      <th>Telefon</th>
                                      <th>Test Tipi</th>
                                      <th>Lokasyon</th>
                                      <th>Messages</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {offerData.length > 0 &&
                                      offerData.map(item => {
                                        return (
                                          <tr>
                                            <th scope='row'>1</th>
                                            <td>{item.Name} </td>
                                            <td>{item.Email}</td>
                                            <td>@mdo</td>
                                            <td>PCR</td>
                                            <td>Ankara</td>
                                            <td>Bu bir test mesajıdır..</td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>
                                </Table>
                              </TabPane>
                              <TabPane tabId='plainTabs2'>
                                <p className='description'>
                                  Cosby sweater eu banh mi, qui irure terry
                                  richardson ex squid. Aliquip placeat salvia
                                  cillum iphone. Seitan aliquip quis cardigan
                                  american apparel, butcher voluptate nisi qui.
                                </p>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>

                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default ApplicationsOffersView;
