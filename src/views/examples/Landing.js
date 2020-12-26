import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import bg from '../../assets/img/theme/bg.jpg';

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
                  backgroundImage: `url(${bg})`,
                  width: 'auto',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  marginTop: -96,
                  height: 700,
                  position: 'relative',
                }}
              >
                <Container className='py-lg-md d-flex'>
                  <div className='col px-0'>
                    <Row style={{marginTop: 200}}>
                      <Col lg='6'>
                        <h1 className='display-3 text-white'>
                          COVID-19 TESTLERİNİZİ GÜVENLE YAPTIRIN{' '}
                          {/* <span>completed with examples</span> */}
                        </h1>
                        <p className='lead text-white'>
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
                <Container>
                  <Row className='justify-content-center'>
                    <Col lg='12'>
                      <Row className='row-grid'>
                        <Col lg='4'>
                          <Card className='card-lift--hover shadow border-0'>
                            <CardBody className='py-5'>
                              <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                                <i className='ni ni-check-bold' />
                              </div>
                              <h6 className='text-primary text-uppercase'>
                                PCR Testi
                              </h6>
                              <p className='description mt-3'>
                                PCR testi virüslerin genetik yapısını tespit
                                eden moleküler bir tanı ve antijen testidir.
                                COVID-19’a yakalanan ve virüsü aktif olarak
                                taşıyan kişilerin belirlenmesini sağlar.
                              </p>
                              <div>
                                <Badge color='primary' pill className='mr-1'>
                                  Covid
                                </Badge>
                                <Badge color='primary' pill className='mr-1'>
                                  Test
                                </Badge>
                                <Badge color='primary' pill className='mr-1'>
                                  Kit
                                </Badge>
                              </div>
                              <Button
                                className='mt-4'
                                color='primary'
                                href='#pablo'
                                onClick={e => e.preventDefault()}
                              >
                                Detaylı Bilgi
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg='4'>
                          <Card className='card-lift--hover shadow border-0'>
                            <CardBody className='py-5'>
                              <div className='icon icon-shape icon-shape-success rounded-circle mb-4'>
                                <i className='ni ni-istanbul' />
                              </div>
                              <h6 className='text-success text-uppercase'>
                                Antikor Testleri (IgM)
                              </h6>
                              <p className='description mt-3'>
                                IgM antikor testi erken evre antikor testidir.
                                IgM + sonuç vermesi, vücudun virüse karşı savaş
                                vermeye başladığını ve devam eden COVID-19
                                hastalığını gösterir.
                              </p>
                              <div>
                                <Badge color='success' pill className='mr-1'>
                                  Covid
                                </Badge>
                                <Badge color='success' pill className='mr-1'>
                                  Test
                                </Badge>
                                <Badge color='success' pill className='mr-1'>
                                  Kit
                                </Badge>
                              </div>
                              <Button
                                className='mt-4'
                                color='success'
                                href='#pablo'
                                onClick={e => e.preventDefault()}
                              >
                                Detaylı Bilgi
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg='4'>
                          <Card className='card-lift--hover shadow border-0'>
                            <CardBody className='py-5'>
                              <div className='icon icon-shape icon-shape-warning rounded-circle mb-4'>
                                <i className='ni ni-planet' />
                              </div>
                              <h6 className='text-warning text-uppercase'>
                                Antikor Testleri (IgG)
                              </h6>
                              <p className='description mt-3'>
                                IgG antikor testi geç cevap antikor testi olarak
                                tanımlanmaktadır. IgG + sonuç vermesi,
                                COVID-19’a karşı bağışıklığın geliştiğini
                                gösterir.
                              </p>
                              <div>
                                <Badge color='warning' pill className='mr-1'>
                                  Covid
                                </Badge>
                                <Badge color='warning' pill className='mr-1'>
                                  Test
                                </Badge>
                                <Badge color='warning' pill className='mr-1'>
                                  Kit
                                </Badge>
                              </div>
                              <Button
                                className='mt-4'
                                color='warning'
                                href='#pablo'
                                onClick={e => e.preventDefault()}
                              >
                                Detaylı Bilgi
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* SVG separator */}
              {/* <div className='separator separator-bottom separator-skew'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='none'
                  version='1.1'
                  viewBox='0 0 2560 100'
                  x='0'
                  y='0'
                >
                  <polygon
                    className='fill-white'
                    points='2560 0 2560 100 0 100'
                  />
                </svg>
              </div> */}
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className='section section-lg'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-md-6' md='4'>
                  <img
                    alt='...'
                    className='img-fluid floating'
                    src={require('../../assets/img/theme/covid2.png')}
                  />
                </Col>
                <Col className='order-md-1' md='8'>
                  <div className='pr-md-5'>
                    {/* <div className='icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5'>
                      <i className='ni ni-settings-gear-65' />
                    </div> */}
                    <h3>TESTLERİNİZİ ZAMAN KAYBETMEDEN YAPTIRIN</h3>
                    <p>
                      COVID-19 virüsünün tüm aşamaları için gerekli olabilecek
                      PCR ve antikor testlerinizi güvenle yaptırabilirsiniz!
                    </p>
                    <ul className='list-unstyled mt-5'>
                      <li className='py-2'>
                        <div className='d-flex'>
                          <div style={{marginTop: 7}}>
                            <Badge
                              className='badge-circle mr-3'
                              color='success'
                            >
                              <i className='ni ni-settings-gear-65' />
                            </Badge>
                          </div>
                          <div>
                            <h5 className='mb-0'>İLERİ TEKNOLOJİ</h5>
                            <h6>
                              COVID-19 testleri, anlaşmalı olduğumuz sağlık
                              kurumlarında, yüksek teknoloji ve hassas ölçüm
                              metotları kullanılarak duyarlı yöntemlerle
                              yapılmaktadır.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex'>
                          <div style={{marginTop: 7}}>
                            <Badge
                              className='badge-circle mr-3'
                              color='success'
                            >
                              <i className='ni ni-html5' />
                            </Badge>
                          </div>
                          <div>
                            <h5 className='mb-0'>
                              KİŞİSEL VERİLERİN GİZLİLİĞİ
                            </h5>
                            <h6>
                              Test sonuçlarınız, uzman doktor ve raporlama
                              ekipleri sayesinde, eksiksiz bir biçimde, hasta
                              bilgilerinin gizliliği ve KVKK veri işleme
                              kuralları çerçevesinde sadece tarafınıza teslim
                              edilmektedir.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex'>
                          <div style={{marginTop: 7}}>
                            <Badge
                              className='badge-circle mr-3'
                              color='success'
                            >
                              <i className='ni ni-satisfied' />
                            </Badge>
                          </div>
                          <div>
                            <h5 className='mb-0'>7/24 HİZMET</h5>
                            <h6>
                              PCR ve antikor testleriniz için anlaşmalı
                              olduğumuz hastanelerde 7 gün 24 saat örnek
                              alınabilmektedir.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section bg-secondary'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col md='6'>
                  <Card className='bg-default shadow border-0'>
                    <CardImg
                      alt='...'
                      src={require('assets/img/theme/covid1.jpg')}
                      top
                    />
                    <blockquote className='card-blockquote'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='svg-bg'
                        preserveAspectRatio='none'
                        viewBox='0 0 583 95'
                      >
                        <polygon
                          className='fill-default'
                          points='0,52 583,95 0,95'
                        />
                        <polygon
                          className='fill-default'
                          opacity='.2'
                          points='0,42 583,95 683,0 0,95'
                        />
                      </svg>
                      <h4 className='display-3 font-weight-bold text-white'>
                        COVID-19 PCR ve ANTİKOR TESTLERİ
                      </h4>
                      <p className='lead text-italic text-white'>
                        PCR testi, herhangi bir semptomu olmasa bile hastalığı
                        taşıyan kişilerin en erken evrede belirlenmesini,
                        antikor testleri de COVID-19’u geçirmiş ya da belirtisiz
                        olarak atlatmış kişilerin bağışıklık durumunu
                        öğrenmesini sağlamaktadır.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md='6'>
                  <div className='pl-md-5'>
                    {/* <div className='icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5'>
                      <i className='ni ni-settings' />
                    </div> */}
                    <h3>COVID-19 PCR ve ANTİKOR TESTLERİ</h3>
                    <p className='lead'>
                      PCR testi, herhangi bir semptomu olmasa bile hastalığı
                      taşıyan kişilerin en erken evrede belirlenmesini, antikor
                      testleri de COVID-19’u geçirmiş ya da belirtisiz olarak
                      atlatmış kişilerin bağışıklık durumunu öğrenmesini
                      sağlamaktadır.
                    </p>
                    <h3>Ameliyat ve Yurt Dışına Çıkış Öncesi</h3>
                    <p>
                      Cerrahi bir operasyon ya da işlem geçirmeniz gerekiyor
                      veya yurt dışına çıkmayı planlıyorsanız, COVID-19
                      testlerinizi yaptırabilir, sonuçlarınızı vakit kaybetmeden
                      alabilirsiniz.
                    </p>
                    <h3>Tanıda Güvenilirliği Artırın</h3>
                    <p>
                      Elisa ve benzeri yöntemlerle yapılan antikor testlerinin
                      hassasiyet ve doğruluğu, hızlı antikor testlerine göre
                      oldukça yüksektir. İleri altyapıya sahip olan anlaşmalı
                      laboratuvarlarımızda uygulanan, Elisa ve benzeri duyarlı
                      yöntemlerin PCR ile birlikte kullanılması da doğru tanı
                      şansını artırmaktadır. PCR ile IgM / IgG antikor testleri
                      birlikte yapılarak hastalık ve evresi güvenli bir şekilde
                      belirlenebilmektedir.
                    </p>
                    <a
                      className='font-weight-bold text-warning mt-5'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                    >
                      Randevu Al
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section pb-0 bg-gradient-warning'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-lg-2 ml-lg-auto' md='6'>
                  <div className='position-relative pl-md-5'>
                    <img
                      alt='...'
                      className='img-center img-fluid'
                      src={require('assets/img/ill/ill-2.svg')}
                    />
                  </div>
                </Col>
                <Col className='order-lg-1' lg='6'>
                  <div className='d-flex px-3'>
                    <div>
                      <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                        <i className='ni ni-building text-primary' />
                      </div>
                    </div>
                    <div className='pl-4'>
                      <h4 className='display-3 text-white'>Modern Interface</h4>
                      <p className='text-white'>
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className='shadow shadow-lg--hover mt-5'>
                    <CardBody>
                      <div className='d-flex px-3'>
                        <div>
                          <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                            <i className='ni ni-satisfied' />
                          </div>
                        </div>
                        <div className='pl-4'>
                          <h5 className='title text-success'>
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className='text-success'
                            href='#pablo'
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='shadow shadow-lg--hover mt-5'>
                    <CardBody>
                      <div className='d-flex px-3'>
                        <div>
                          <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
                            <i className='ni ni-active-40' />
                          </div>
                        </div>
                        <div className='pl-4'>
                          <h5 className='title text-warning'>
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className='text-warning'
                            href='#pablo'
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          {/* <section className='section section-lg'>
            <Container>
              <Row className='justify-content-center text-center mb-lg'>
                <Col lg='8'>
                  <h2 className='display-3'>The amazing Team</h2>
                  <p className='lead text-muted'>
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className='mb-5 mb-lg-0' lg='3' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('assets/img/theme/team-1-800x800.jpg')}
                      style={{width: '200px'}}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Ryan Tompson</span>
                        <small className='h6 text-muted'>Web Developer</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='warning'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='warning'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='warning'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='mb-5 mb-lg-0' lg='3' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('assets/img/theme/team-2-800x800.jpg')}
                      style={{width: '200px'}}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Romina Hadid</span>
                        <small className='h6 text-muted'>
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='primary'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='primary'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='primary'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='mb-5 mb-lg-0' lg='3' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('assets/img/theme/team-3-800x800.jpg')}
                      style={{width: '200px'}}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>Alexander Smith</span>
                        <small className='h6 text-muted'>UI/UX Designer</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='info'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='info'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='info'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className='mb-5 mb-lg-0' lg='3' md='6'>
                  <div className='px-4'>
                    <img
                      alt='...'
                      className='rounded-circle img-center img-fluid shadow shadow-lg--hover'
                      src={require('assets/img/theme/team-4-800x800.jpg')}
                      style={{width: '200px'}}
                    />
                    <div className='pt-4 text-center'>
                      <h5 className='title'>
                        <span className='d-block mb-1'>John Doe</span>
                        <small className='h6 text-muted'>Founder and CEO</small>
                      </h5>
                      <div className='mt-3'>
                        <Button
                          className='btn-icon-only rounded-circle'
                          color='success'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-twitter' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='success'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-facebook' />
                        </Button>
                        <Button
                          className='btn-icon-only rounded-circle ml-1'
                          color='success'
                          href='#pablo'
                          onClick={e => e.preventDefault()}
                        >
                          <i className='fa fa-dribbble' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <section className='section section-lg pt-0'>
            <Container>
              {/* <Card className='bg-gradient-warning shadow-lg border-0'>
                <div className='p-5'>
                  <Row className='align-items-center'>
                    <Col lg='8'>
                      <h3 className='text-white'>
                        We made website building easier for you.
                      </h3>
                      <p className='lead text-white mt-3'>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className='ml-lg-auto' lg='3'>
                      <Button
                        block
                        className='btn-white'
                        color='default'
                        href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page'
                        size='lg'
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card> */}
            </Container>
          </section>
          <section className='section section-lg bg-gradient-default'>
            <Container className='pt-lg pb-300'>
              {/* <Row className='text-center justify-content-center'>
                <Col lg='10'>
                  <h2 className='display-3 text-white'>Build something</h2>
                  <p className='lead text-white'>
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row> */}
              {/* <Row className='row-grid mt-5'>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-settings text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Building tools</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-ruler-pencil text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Grow your market</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-atom text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>Launch time</h5>
                  <p className='text-white mt-3'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row> */}
            </Container>
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          <section className='section section-lg pt-lg-0 section-contact-us'>
            <Container>
              <Row className='justify-content-center mt--300'>
                <Col lg='8'>
                  <Card className='bg-gradient-secondary shadow'>
                    <CardBody className='p-lg-5'>
                      <h4 className='mb-1'>Randevu Al</h4>
                      <p className='mt-0'>
                        Randevu almak için formu doldurunuz.
                      </p>
                      <FormGroup
                        className={classnames('mt-5', {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-user-run' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Adınız Soyadınız...'
                            type='text'
                            onFocus={e => this.setState({nameFocused: true})}
                            onBlur={e => this.setState({nameFocused: false})}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-email-83' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Email'
                            type='email'
                            onFocus={e => this.setState({emailFocused: true})}
                            onBlur={e => this.setState({emailFocused: false})}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.phoneFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-mobile-button' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Telefon'
                            type='phone'
                            onFocus={e => this.setState({phoneFocused: true})}
                            onBlur={e => this.setState({phoneFocused: false})}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.testTypeFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-sound-wave' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Test Tipi'
                            type='text'
                            onFocus={e =>
                              this.setState({testTypeFocused: true})
                            }
                            onBlur={e =>
                              this.setState({testTypeFocused: false})
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.locationFocused,
                        })}
                      >
                        <InputGroup className='input-group-alternative'>
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='ni ni-map-big' />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder='Lokasyon'
                            type='text'
                            onFocus={e =>
                              this.setState({locationFocused: true})
                            }
                            onBlur={e =>
                              this.setState({locationFocused: false})
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className='mb-4'>
                        <Input
                          className='form-control-alternative'
                          cols='80'
                          name='name'
                          placeholder='Type a message...'
                          rows='4'
                          type='textarea'
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className='btn-round'
                          color='default'
                          size='lg'
                          type='button'
                        >
                          Gönder
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Download /> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
