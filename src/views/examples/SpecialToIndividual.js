import React, {useState} from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import bg from '../../assets/img/theme/bg2.jpeg';

import {
  Badge,
  Button,
  Card,
  Collapse,
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
  Label,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

// index page sections
import Download from '../IndexSections/Download.js';

const SpecialToIndividual = () => {
 const  appointment = {
    Name: '',
    Email: '',
    Phone: '',
    TestType:'',
    Location:'',
    Message:'' ,
    KVKK:false

  }
  const [appointments, setAppointment] = useState(appointment);

  const submit = e => {
    e.preventDefault()
    fetch('https://localhost:44390/api/addAppoinment', {
      method: 'POST',
      body: JSON.stringify(appointments),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setAppointment(json.appointments))
  }
  
  const [state, setState] = useState({
    nameFocused: true,
  });
  const [collapseOpen, setCollapseOpen] = useState(0);

  return (
    <>
      <DemoNavbar />
      <main>
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
              <Container className='py-lg-md d-flex' style={{paddingLeft: 5}}>
                <div className='col px-0'>
                  <Row style={{marginTop: 120}}>
                    <Col lg='8'>
                      <h1
                        className='display-3'
                        style={{
                          fontSize: 60,
                          color: '#ffffff',
                          fontFamily: 'Calibri',
                          marginBottom: 30,
                        }}
                      >
                        GÜVENİLİRLİĞİ YÜKSEK YÖNTEMLERLE COVID-19 TESTLERİ{' '}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className='lead text-white'>
                        COVID-19 testlerinizi yaptırarak virüse karşı önlem
                        alabilir, kendinizi ve sevdiklerinizi koruyabilirsiniz.
                      </p>
                      {/* <div className='btn-wrapper'></div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <section className='section section-lg pt-lg-0 mt--200 '>
              <Container style={{marginTop: 85}}>
                <Row className='justify-content-center'>
                  <Col lg='12'>
                    <Row className='row-grid'>
                      <Col lg='4'>
                        <Card className='card-lift--hover shadow border-0'>
                          <CardBody
                            className='py-3'
                            style={{textAlign: 'center'}}
                          >
                            {/* <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                                <i className='ni ni-check-bold' />
                              </div> */}
                            <h6
                              className='text-primary'
                              style={{
                                fontWeight: 700,
                                fontFamily: 'Calibri',
                                textAlign: 'center',
                                fontSize: 18,
                              }}
                            >
                              PCR Testi
                            </h6>
                            <p
                              className='description mt-3'
                              style={{fontFamily: 'Arial'}}
                            >
                              PCR testi virüslerin genetik yapısını tespit eden
                              moleküler bir tanı ve antijen testidir. COVID-19’a
                              yakalanan ve virüsü aktif olarak taşıyan kişilerin
                              belirlenmesini
                            </p>
                            <Button
                              className='text-primary '
                              color='link'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                              style={{
                                marginTop: 3,
                                textTransform: 'none',
                                fontFamily: 'Arial',
                              }}
                            >
                              Detaylı Bilgi <i className='ni ni-fat-add'></i>
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg='4'>
                        <Card className='card-lift--hover shadow border-0'>
                          <CardBody
                            className='py-3'
                            style={{textAlign: 'center'}}
                          >
                            {/* <div className='icon icon-shape icon-shape-success rounded-circle mb-4'>
                                <i className='ni ni-istanbul' />
                              </div> */}
                            <h3
                              className='text-success'
                              style={{
                                fontWeight: 700,
                                fontFamily: 'Calibri',
                                textAlign: 'center',
                                fontSize: 18,
                              }}
                            >
                              Antikor Testleri (IgM)
                            </h3>
                            <p
                              className='description mt-3'
                              style={{fontFamily: 'Arial'}}
                            >
                              IgM antikor testi erken evre antikor testidir. IgM
                              + sonuç vermesi, vücudun virüse karşı savaş
                              vermeye başladığını ve devam eden COVID-19
                              hastalığını gösterir. <p></p> <p></p>
                            </p>
                            <Button
                              className='text-success '
                              color='link'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                              style={{
                                marginTop: 3,
                                textTransform: 'none',
                                fontFamily: 'Arial',
                              }}
                            >
                              Detaylı Bilgi <i className='ni ni-fat-add'></i>
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg='4'>
                        <Card className='card-lift--hover shadow border-0'>
                          <CardBody
                            className='py-3'
                            style={{textAlign: 'center'}}
                          >
                            {/* <div className='icon icon-shape icon-shape-warning rounded-circle mb-4'>
                                <i className='ni ni-planet' />
                              </div> */}
                            <h6
                              className='text-warning'
                              style={{
                                fontWeight: 700,
                                fontFamily: 'Calibri',
                                textAlign: 'center',
                                fontSize: 18,
                              }}
                            >
                              Antikor Testleri (IgG)
                            </h6>
                            <p
                              className='description mt-3'
                              style={{fontFamily: 'Arial'}}
                            >
                              IgG antikor testi geç cevap antikor testi olarak
                              tanımlanmaktadır. IgG + sonuç vermesi, COVID-19’a
                              karşı bağışıklığın geliştiğini gösterir.
                            </p>
                            <Button
                              className='text-warning '
                              color='link'
                              href='#pablo'
                              onClick={e => e.preventDefault()}
                              style={{
                                marginTop: 3,
                                textTransform: 'none',
                                fontFamily: 'Arial',
                              }}
                            >
                              Detaylı Bilgi <i className='ni ni-fat-add'></i>
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
          {/* 1st Hero Variation */}
        </div>

        <section className='section section-lg'>
          <Container>
            <Row className='row-grid align-items-center'>
              <Col md='5'>
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
                    <p
                      className='lead text-italic text-white'
                      style={{fontSize: 15, fontFamily: 'Arial'}}
                    >
                      PCR testi, herhangi bir semptomu olmasa bile hastalığı
                      taşıyan kişilerin en erken evrede belirlenmesini, antikor
                      testleri de COVID-19’u geçirmiş ya da belirtisiz olarak
                      atlatmış kişilerin bağışıklık durumunu öğrenmesini
                      sağlamaktadır.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md='7'>
                <div className='pl-md-5'>
                  {/* <div className='icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5'>
                      <i className='ni ni-settings' />
                    </div> */}
                  <h2
                    style={{
                      fontSize: 30,
                      fontWeight: 700,
                      fontFamily: 'Calibri',
                      marginBottom: 30,
                    }}
                  >
                    COVID-19 PCR ve ANTİKOR TESTLERİ
                  </h2>
                  <p
                    className='lead'
                    style={{fontSize: 15, fontFamily: 'Arial'}}
                  >
                    PCR testi, herhangi bir semptomu olmasa bile hastalığı
                    taşıyan kişilerin en erken evrede belirlenmesini, antikor
                    testleri de COVID-19’u geçirmiş ya da belirtisiz olarak
                    atlatmış kişilerin bağışıklık durumunu öğrenmesini
                    sağlamaktadır.
                  </p>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: 'Calibri',
                      marginBottom: 30,
                    }}
                  >
                    Ameliyat ve Yurt Dışına Çıkış Öncesi
                  </h3>
                  <p style={{fontSize: 15, fontFamily: 'Arial'}}>
                    Cerrahi bir operasyon ya da işlem geçirmeniz gerekiyor veya
                    yurt dışına çıkmayı planlıyorsanız, COVID-19 testlerinizi
                    yaptırabilir, sonuçlarınızı vakit kaybetmeden alabilirsiniz.
                  </p>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      fontFamily: 'Calibri',
                      marginBottom: 30,
                    }}
                  >
                    Tanıda Güvenilirliği Artırın
                  </h3>
                  <p style={{fontSize: 15, fontFamily: 'Arial'}}>
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
        <section className='section bg-secondary'>
          <Container>
            <Row>
              <Col>
                <div style={{justifyContent: 'center'}}>
                  <h3
                    style={{
                      fontSize: 35,
                      fontWeight: 700,
                      fontFamily: 'Calibri',
                      textAlign: 'center',
                    }}
                  >
                    TESTLERİNİZİ ZAMAN KAYBETMEDEN YAPTIRIN
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: 'Arial',
                      textAlign: 'center',
                    }}
                  >
                    COVID-19 virüsünün tüm aşamaları için gerekli olabilecek PCR
                    ve antikor testlerinizi güvenle yaptırabilirsiniz!
                  </p>
                </div>
              </Col>
            </Row>
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
                  <ul className='list-unstyled mt-5'>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            İLERİ TEKNOLOJİ
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
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
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            KİŞİSEL VERİLERİN GİZLİLİĞİ
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            Test sonuçlarınız, uzman doktor ve raporlama
                            ekipleri sayesinde, eksiksiz bir biçimde, hasta
                            bilgilerinin gizliliği ve KVKK veri işleme kuralları
                            çerçevesinde sadece tarafınıza teslim edilmektedir.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            HIZLI SONUÇ
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            Anlaşmalı hastanelerimizdeki laboratuvarlar, 24 saat
                            kesintisiz hizmet vermekte ve sonuçların hızlı
                            raporlanması sağlanmaktadır. PCR ve antikor
                            testlerinin sonuçları, İstanbul’da 24 saat, İstanbul
                            dışında ise yaklaşık 48 saat içinde teslim
                            edilmektedir.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            GÜVENİLİRLİK
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            Avrupa standartlarına uygunluk (CE) belgesi bulunan,
                            %99,9 güvenilirlikte Abbott antikor testleri ile
                            hizmet verilmektedir. Testler, Sağlık Bakanlığı
                            tarafından yetkilendirilmiş, Memorial Sağlık Grubu
                            hastanelerinin laboratuvarlarında çalışılmaktadır.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            7/24 HİZMET
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            PCR ve antikor testleriniz için anlaşmalı olduğumuz
                            hastanelerde 7 gün 24 saat örnek alınabilmektedir.
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

        <section className='section section-lg'>
          <Container>
            <Row>
              <Col>
                <div style={{justifyContent: 'center'}}>
                  <h3
                    style={{
                      fontSize: 35,
                      fontWeight: 700,
                      fontFamily: 'Calibri',
                      textAlign: 'center',
                    }}
                  >
                    TEST SÜREÇLERİ
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: 'Arial',
                      textAlign: 'center',
                    }}
                  >
                    COVID-19 PCR ve Antikor testi yaptırmak için…
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='row-grid align-items-center'>
              <Col
                className='order-md-1'
                md='6'
                style={{
                  marginTop: `${window.innerWidth < 768 ? '0.1rem' : '3rem'}`,
                }}
              >
                <div className='pr-md-5'>
                  <ul className='list-unstyled mt-5'>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            İletişim Formunu Doldurun
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            Test yaptırmak için formu doldurduğunuzda, randevu
                            ekibimiz en kısa sürede sizinle irtibata geçecektir.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            Hastanede test hizmetleri
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            İstanbul, Ankara, İzmir, Bursa ve anlaşmalı
                            olduğumuz tüm Acıbadem Hastanelerininde COVID-19
                            testleri yapılabilmektedir.
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col
                className='order-md-1'
                md='6'
                style={{
                  marginTop: `${window.innerWidth < 768 ? '0.1rem' : '3rem'}`,
                }}
              >
                <div className='pr-md-5'>
                  <ul className='list-unstyled mt-5'>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            Evde ya da İş yerinizde Test İmkanı
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            COVID-19 testleriniz için evinizde ya da iş
                            yerinizde örnek alınabilmektedir.
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className='py-2'>
                      <div className='d-flex'>
                        <div style={{marginTop: 7}}>
                          <Badge className='badge-circle mr-3' color='success'>
                            <i className='ni ni-check-bold' />
                          </Badge>
                        </div>
                        <div>
                          <h5
                            className='mb-0'
                            style={{fontSize: 20, fontFamily: 'Calibri'}}
                          >
                            Sonuçlarınıza kolayca ulaşın
                          </h5>
                          <h6 style={{fontSize: 15, fontFamily: 'Arial'}}>
                            Test sonuçlarınız çıktığında tarafınıza SMS ile
                            bilgilendirme yapılmaktadır. Sonuçlarınız, anlaşmalı
                            olduğumuz sağlık kurumunun web sitelerindeki e-sonuç
                            sayfasından online olarak görüntülenebilmektedir.
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

        <section className='pb-0 bg-gradient-warning'>
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
                <div className='d-flex px-3' style={{marginBottom: 15}}>
                  <div>
                    <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                      <i className='ni ni-building text-primary' />
                    </div>
                  </div>
                  <div className='pl-4'>
                    <h4 className='display-3 text-white'>
                      Sıkça Sorulan Sorular
                    </h4>
                  </div>
                </div>
                <>
                  <p>
                    <Button
                      color='neutral'
                      href='#pablo'
                      onClick={e => {
                        e.preventDefault();
                        setCollapseOpen(1);
                      }}
                      role='button'
                      id='collapseExample'
                      style={{marginBottom: 5}}
                    >
                      1) PCR testi nasıl yapılır?
                    </Button>
                    <Collapse isOpen={collapseOpen === 1}>
                      <Card className=' card-body'>
                        Burun ve boğazdan, ucu pamuklu ince bir çubuk
                        vasıtasıyla sürüntü örneği alınmaktadır.
                      </Card>
                    </Collapse>
                  </p>
                  <p>
                    <Button
                      color='neutral'
                      type='button'
                      id='collapseExample'
                      onClick={() => {
                        setCollapseOpen(2);
                      }}
                      style={{marginBottom: 5}}
                    >
                      2) PCR testi güvenli mi?
                    </Button>
                    <Collapse isOpen={collapseOpen === 2}>
                      <Card className=' card-body'>
                        PCR testi COVID-19 için bugün bilinen en güvenilir tanı
                        testidir. Hızlı tanı testleri, koronavirüs açısından
                        hızlı bir şekilde sonuç verse de PCR testine göre daha
                        az duyarlıdır. Bu nedenle özellikle koronavirüs
                        belirtisi gösteren kişilerin hızlı tanı testleri negatif
                        olsa bile, PCR testi ile teyit alınması gerekir.
                      </Card>
                    </Collapse>
                  </p>
                  <p>
                    <Button
                      color='neutral'
                      type='button'
                      id='collapseExample'
                      onClick={() => {
                        setCollapseOpen(3);
                      }}
                      style={{marginBottom: 5}}
                    >
                      3) Antikor testi nasıl yapılır?
                    </Button>
                    <Collapse isOpen={collapseOpen === 3}>
                      <Card className=' card-body'>
                        Antikor testi koldan kan alınarak çalışılmaktadır.
                      </Card>
                    </Collapse>
                  </p>
                  <p>
                    <Button
                      color='neutral'
                      type='button'
                      id='collapseExample'
                      onClick={() => {
                        setCollapseOpen(4);
                      }}
                      style={{marginBottom: 5}}
                    >
                      4) Antikor testleri güvenli mi?
                    </Button>
                    <Collapse isOpen={collapseOpen === 4}>
                      <Card className=' card-body'>
                        Hastanelerimizin, ileri altyapıya sahip
                        laboratuvarlarında, Elisa ve benzeri yöntemlerle
                        yaptığımız antikor testlerinin güvenilirliği %99,9’dur.
                        Bu testlerin hassasiyet ve doğruluğu, parmaktan alınan
                        hızlı antikor testlerine göre belirgin bir biçimde
                        yüksektir. Tanıda, Elisa benzeri duyarlı ve özgüllüğü
                        yüksek yöntemlerin PCR ile birlikte kullanılması da
                        doğru tanı şansını artırmaktadır.
                      </Card>
                    </Collapse>
                  </p>
                  <p>
                    <Button
                      color='neutral'
                      type='button'
                      id='collapseExample'
                      onClick={() => {
                        setCollapseOpen(5);
                      }}
                      style={{marginBottom: 5}}
                    >
                      5) PCR ve Antikor testleri arasındaki farklar nelerdir?
                    </Button>
                    <Collapse isOpen={collapseOpen === 5}>
                      <Card className=' card-body'>
                        PCR bir Antijen testidir ve kişinin hasta olup
                        olmadığını ortaya koymaktadır, akut olarak enfeksiyonun
                        varlığını gösterir. PCR testinin amacı mümkün olan en
                        kısa sürede pozitif vakayı yakalamak ve kişinin durumuna
                        göre erken evrede tedaviye başlamaktır veya bu kişileri
                        hızlı bir şekilde toplumdan izole etmektir. Antikor
                        testleri ise kişide oluşan antikorları, daha önce
                        enfeksiyonu geçirip geçirmediğini, virüsle mücadelenin
                        hangi döneminde olduğunu ve bağışıklık gelişip
                        gelişmediğini gösterir. IgM antikorları, virüs
                        bulaştıktan sonra ilk iki hafta içerisinde semptomların
                        görülmeye başlaması ile birlikte, bağışıklık sisteminin
                        erken evre yanıtını göstermektedir. IgG tipi antikorlar
                        en erken 15’inci gün pozitif çıkmakta ve COVID-19’a yol
                        açan virüse karşı vücudun bağışıklığını göstermektedir.
                      </Card>
                    </Collapse>
                  </p>
                </>
              </Col>
            </Row>
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
              <polygon className='fill-white' points='2560 0 2560 100 0 100' />
            </svg>
          </div>
        </section>
        <section className='section section-lg pt-0'>
          <Container></Container>
        </section>
        <section className='section section-lg bg-gradient-default'>
          <Container className='pt-lg pb-300'></Container>
          <div className='separator separator-bottom separator-skew zindex-100'>
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
        <section
          className='section section-lg pt-lg-0 section-contact-us'
          id='appointment'
        >
          <Container>
            <Row className='justify-content-center mt--300'>
              <Col lg='8'>
                <Card
                  className='bg-gradient-secondary shadow'
                  style={{overflowY: 'scroll', scrollBehavior: 'smooth'}}
                >
                  <CardBody className='p-lg-5'>
                    <h4 className='mb-1'>Randevu Al</h4>
                    <p className='mt-0'>Randevu almak için formu doldurunuz.</p>
                    <FormGroup
                      className={classnames('mt-5', {
                        focused: state.nameFocused,
                      })}
                    >
                      <InputGroup className='input-group-alternative'>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='ni ni-circle-08' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Adınız Soyadınız'
                          type='text'
                          onFocus={e => setState({nameFocused: true})}
                          onBlur={e => setState({nameFocused: false})}
                          onChange={e => setAppointment({ ...appointments, Name: e.target.value })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: state.emailFocused,
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
                          onFocus={e => setState({emailFocused: true})}
                          onBlur={e => setState({emailFocused: false})}
                          onChange={e => setAppointment({ ...appointments, Email: e.target.value })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: state.phoneFocused,
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
                          onFocus={e => setState({phoneFocused: true})}
                          onBlur={e => setState({phoneFocused: false})}
                          onChange={e => setAppointment({ ...appointments, Phone: e.target.value })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup 
                    className={classnames({
                        focused: state.locationFocused,
                      })}>
                    <InputGroup className='input-group-alternative'>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='ni ni-sound-wave' />
                          </InputGroupText>
                        </InputGroupAddon>
                       
                        <Input
                          placeholder='Test Tipi'
                          type='select'
                          onFocus={e => setState({testTypeFocused: true})}
                          onBlur={e => setState({testTypeFocused: false})}
                          onChange={e => setAppointment({ ...appointments, TestType: e.target.value })}
                        >
                        <option value='0'>Test Tipi Seçiniz</option>
                        <option value='1'>PCR</option>
                        <option value='2'>Antikor(IgM/IgG)</option>
                        <option value='3'>PCR + Antikor(IgM/IgG)</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  
                    <FormGroup
                      className={classnames({
                        focused: state.locationFocused,
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
                          onFocus={e => setState({locationFocused: true})}
                          onBlur={e => setState({locationFocused: false})}
                          onChange={e => setAppointment({ ...appointments, Location: e.target.value })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className='mb-4'>
                      <Input
                        className='form-control-alternative'
                        cols='80'
                        name='name'
                        placeholder='Bir mesaj yazın...'
                        rows='4'
                        type='textarea'
                        onChange={e => setAppointment({ ...appointments, Message: e.target.value })}
                      />
                    </FormGroup>
                    <FormGroup className="custom-control custom-checkbox mb-3">
                      <Input
                         className="custom-control-input"
                         id="customCheck1"
                         type="checkbox"
                        onChange={e => setAppointment({ ...appointments, KVKK: e.target.checked })}
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        <span>Kişisel Verilerin Korunması Kanunu uyarınca, verilerimin belirtilen kapsamda işlenmesini ve sağlık hizmet sunumu amacıyla tarafımla iletişime geçilmesini kabul ediyorum.</span>
                      </label>
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className='btn-round'
                        color='default'
                        size='lg'
                        type='button'
                        onClick={submit}
                      >
                        Gönder
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                <Button
                  className=''
                  color='primary'
                  // href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar'
                  target='_blank'
                  style={{position: 'fixed', bottom: 15, right: 15}}
                >
                  <a href='#appointment' style={{color: 'white'}}>
                    <span className='btn-inner--icon'>
                      <i className='fa fa-send mr-2' />
                    </span>
                    <span className='nav-link-inner--text ml-1'>
                      Randevu Al
                    </span>
                  </a>
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
};

export default SpecialToIndividual;
