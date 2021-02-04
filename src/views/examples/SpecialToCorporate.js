import React, {useState} from 'react';
import {Form, Spin} from 'antd';
import TextTransition, {presets} from 'react-text-transition';
// nodejs library that concatenates classes
import classnames from 'classnames';
import bg from '../../assets/img/theme/wback3.png';
import mbg from '../../assets/img/theme/mback2.png';

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
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

import {OfferService} from '../../services/index';

// index page sections
import Download from '../IndexSections/Download.js';
import {responseMessages} from 'config/utils';

const SpecialToCorporate = ({offerService = new OfferService()}) => {
  const corporate = {
    Name: '',
    Email: '',
    Phone: '',
    TestType: '',
    Location: '',
    Message: '',
    KVKK: false,
    WorkerCount: '',
    CorporateName: '',
  };

  const [form] = Form.useForm();

  const [corporates, setCorporate] = useState(corporate);
  const [loading, setLoading] = useState(false);

  const submit = data => {
    setLoading(true);

    offerService.addOffer(corporates).then(res => {
      setLoading(false);
      if (res.status === 200) {
        responseMessages('success', [
          {
            Message: 'Kaydınız başarıyla oluşturulmuştur.',
          },
        ]);
      } else {
        responseMessages('error', [
          {
            Message:
              'Bir hata oluştu. Lütfen tekrar deneyiniz. Sorun devam ederse yetkili ile iletişime geçiniz.',
          },
        ]);
      }
    });
  };

  const [state, setState] = useState({
    nameFocused: true,
  });
  const [collapseOpen, setCollapseOpen] = useState(0);
  return (
    <>
      <DemoNavbar />
      <main>
        <div className=''>
          <section
            className='section section-lg section-shaped'
            style={{paddingTop: 10, paddingBottom: 0}}
          >
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
                  <Row style={{marginTop: 260}}>
                    <Col lg='8'>
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
                          lineHeight:1.2,
                        }}
                      >
                        <TextTransition
                          text='COVID-19 TESTLERİNDE KURUMLARA ÖZEL TEKLİFLER'
                          springConfig={presets.molasses}
                          direction='up'
                        />
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p
                        className='lead text-white'
                        style={{fontFamily: 'Arial'}}
                      >
                        <TextTransition
                          text='Avrupa standartlarına uygunluk belgesi bulunan, %99,9
                          güvenilirlikte testler'
                          springConfig={presets.slow}
                          delay={1000}
                          direction='up'
                        />
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <section
              className='section section-lg pt-lg-0 mt--200'
              style={{paddingTop: 0, paddingBottom: 30}}
            >
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
        </div>

        <section className='section section-lg' style={{paddingTop: 10}}>
          <Container>
            <Row className='row-grid align-items-center'>
              <Col
                md='5'
                style={{paddingTop: `${window.innerWidth > 768 ? '55px' : 0}`}}
              >
                <Card className='bg-default shadow border-0'>
                  <CardImg
                    alt='...'
                    src={require('assets/img/theme/res1.jpg')}
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
                      marginBottom: 20,
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
                      marginBottom: 20,
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
                      marginBottom: 20,
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
                    ÇALIŞANLARINIZIN TESTLERİNİ VAKİT <br /> KAYBETMEDEN
                    YAPTIRIN
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      fontFamily: 'Arial',
                      textAlign: 'center',
                    }}
                  >
                    Çalışanlarınızın, COVID-19 virüsünün tüm aşamaları için
                    gerekli olabilecek PCR ve antikor testlerini güvenle
                    yaptırabilirsiniz!
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='row-grid align-items-center'>
              <Col className='order-md-6' md='4'>
                <img
                  alt='...'
                  className='img-fluid floating'
                  src={require('../../assets/img/theme/res2.jpg')}
                />
              </Col>
              {/* <Row className='row-grid align-items-center'> */}
              <Col
                className='order-md-1'
                md='4'
                style={{
                  marginTop: `${window.innerWidth < 768 ? '0.1rem' : '-10rem'}`,
                }}
              >
                <div className='pr-md-5'>
                  <ul className='list-unstyled mt-5'>
                    <li
                      className='py-2'
                      // style={{
                      //   paddingTop: `${window.innerWidth > 792 ? '161px' : 0}`,
                      // }}
                    >
                      <div
                        className='d-flex'
                        style={{
                          paddingTop: `${
                            window.innerWidth > 768 ? '177px' : 0
                          }`,
                        }}
                      >
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
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                          </h6>
                        </div>
                      </div>
                    </li>
                    <div>
                      <li
                        className='py-2'
                        style={{
                          marginTop: `${
                            window.innerWidth < 768 ? '-3rem' : '0'
                          }`,
                        }}
                      >
                        <div className='d-flex'>
                          <div style={{marginTop: 7}}>
                            <Badge
                              className='badge-circle mr-3'
                              color='success'
                            >
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
                              bilgilerinin gizliliği ve KVKK veri işleme
                              kuralları çerçevesinde sadece tarafınıza teslim
                              edilmektedir.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </div>
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
              {/* 
              <Col md='4'>
                <Row>Test</Row>
              </Col> */}
              <Col
                className='order-md-1'
                md='4'
                style={{
                  marginTop: `${window.innerWidth < 768 ? '-3.8rem' : '-7rem'}`,
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
                  </ul>
                </div>
              </Col>
              {/* </Row> */}
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
            {/* className='row-grid align-items-center' */}
            <Row>
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
                  marginTop: `${window.innerWidth < 768 ? '-3.8rem' : '3rem'}`,
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
                            Çalışanlarınızın sonuçları anlaşmalı olduğumuz
                            sağlık kurumlarının web sitelerindeki e-sonuç
                            sayfasından online olarak görüntülenebilirken, test
                            raporlarınız toplu olarak en kısa sürede kurumunuza
                            özel iletilmektedir.
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
            <Row className='row-grid'>
              <Col className='order-lg-1' lg='12'>
                <div
                  className=' px-3'
                  style={{marginBottom: 25, paddingTop: 15}}
                >
                  <div>
                    <h4
                      className='display-3'
                      style={{
                        fontSize: 35,
                        fontWeight: 700,
                        fontFamily: 'Calibri',
                        textAlign: 'center',
                        color: '#32325d',
                      }}
                    >
                      SIKÇA SORULAN SORULAR
                    </h4>
                  </div>
                </div>
                <>
                  <p lg='12'>
                    <Button
                      color='neutral'
                      href='#pablo'
                      onClick={e => {
                        e.preventDefault();
                        setCollapseOpen(1);
                      }}
                      role='button'
                      id='collapseExample'
                      style={{
                        marginBottom: 5,
                        width: '100%',
                        textAlign: 'start',
                        color: '#32325d',
                        fontFamily: 'Arial',
                        textTransform: 'none',
                      }}
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
                      style={{
                        marginBottom: 5,
                        width: '100%',
                        textAlign: 'start',
                        color: '#32325d',
                        fontFamily: 'Arial',
                        textTransform: 'none',
                      }}
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
                      style={{
                        marginBottom: 5,
                        width: '100%',
                        textAlign: 'start',
                        color: '#32325d',
                        fontFamily: 'Arial',
                        textTransform: 'none',
                      }}
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
                      style={{
                        marginBottom: 5,
                        width: '100%',
                        textAlign: 'start',
                        color: '#32325d',
                        fontFamily: 'Arial',
                        textTransform: 'none',
                      }}
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
                      style={{
                        marginBottom: 5,
                        width: '100%',
                        textAlign: 'start',
                        color: '#32325d',
                        fontFamily: 'Arial',
                        textTransform: 'none',
                      }}
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

          {/* <div className='separator separator-bottom separator-skew zindex-100'>
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
          </div> */}
        </section>
        {/* 
        <section className='section section-lg '>
          <Container></Container>
        </section> */}
        <section className='section section-lg bg-gradient-default' id='appointment'>
          <Container className=' pb-200'>
            <h5
              className='display-3'
              style={{
                fontSize: 40,
                color: '#ffffff',
                fontFamily: 'Calibri',
                marginBottom: 30,
                textAlign: 'center',
              }}
            >
              COVID-19 TESTLERİNİZİ GÜVENLE YAPTIRIN
            </h5>
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
        <section
          className='section section-lg pt-lg-0 section-contact-us'
          
        >
          <Container>
            <Row className='justify-content-center mt--300'>
              <Col lg='8'>
                <Card className='bg-gradient-secondary shadow'>
                  <CardBody className='p-lg-5' style={{marginTop: 15}}>
                    <h4
                      className='mb-1'
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Calibri',
                        fontSize: 25,
                      }}
                    >
                      Teklif Al
                    </h4>
                    <p
                      className='mt-0'
                      style={{textAlign: 'center', fontFamily: 'Arial'}}
                    >
                      Teklif almak için formu doldurunuz.
                    </p>
                    <Spin spinning={loading}>
                      <Form
                        form={form}
                        name='register'
                        onFinish={submit}
                        scrollToFirstError
                      >
                        <Form.Item
                          name='name'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen adınızı ve soy adınız girin!',
                              whitespace: true,
                            },
                          ]}
                        >
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
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    Name: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='email'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen email alanını boş bırakmayın!',
                              whitespace: true,
                            },
                          ]}
                        >
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
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    Email: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='phone'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen telefon numaranızı girin!',
                              whitespace: true,
                            },
                          ]}
                        >
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
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    Phone: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='testType'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen test tipi seçiniz!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <FormGroup
                            className={classnames({
                              focused: state.locationFocused,
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
                                type='select'
                                onFocus={e => setState({testTypeFocused: true})}
                                onBlur={e => setState({testTypeFocused: false})}
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    TestType: e.target.value,
                                  })
                                }
                              >
                                <option id='0' value='Test Tipi Seçiniz'>
                                  Test Tipi Seçiniz
                                </option>
                                <option id='1' value='PCR'>
                                  PCR
                                </option>
                                <option id='2' value='Antikor(IgM/IgG)'>
                                  Antikor(IgM/IgG)
                                </option>
                                <option id='3' value='PCR + Antikor(IgM/IgG)'>
                                  PCR + Antikor(IgM/IgG)
                                </option>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='companyName'
                          rules={[
                            {
                              required: true,
                              message:
                                'Lütfen kurum adı alanını boş brakmayın!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <FormGroup
                            className={classnames({
                              focused: state.nameFocused,
                            })}
                          >
                            <InputGroup className='input-group-alternative'>
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <i className='fa fa-building' />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder='Kurum Adı'
                                type='text'
                                onFocus={e => setState({nameFocused: true})}
                                onBlur={e => setState({nameFocused: false})}
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    CorporateName: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='workerCount'
                          rules={[
                            {
                              required: true,
                              message:
                                'Lütfen çalışan sayısı alanını boş brakmayın!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <FormGroup
                            className={classnames({
                              focused: state.employeeCountFocused,
                            })}
                          >
                            <InputGroup className='input-group-alternative'>
                              <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                  <i className='fa fa-users' />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder='Çalışan Sayısı'
                                type='number'
                                onFocus={e =>
                                  setState({employeeCountFocused: true})
                                }
                                onBlur={e =>
                                  setState({employeeCountFocused: false})
                                }
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    WorkerCount: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='location'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen lokasyon alanını boş brakmayın!',
                              whitespace: true,
                            },
                          ]}
                        >
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
                                onChange={e =>
                                  setCorporate({
                                    ...corporates,
                                    Location: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form.Item>
                        <Form.Item name='description'>
                          <FormGroup className='mb-4'>
                            <Input
                              className='form-control-alternative'
                              cols='80'
                              // name='name'
                              placeholder='Bir mesaj yazın...'
                              rows='4'
                              type='textarea'
                              onChange={e =>
                                setCorporate({
                                  ...corporates,
                                  Message: e.target.value,
                                })
                              }
                            />
                          </FormGroup>
                        </Form.Item>
                        <Form.Item
                          name='kvkkText'
                          rules={[
                            {
                              required: true,
                              message: 'Lütfen kvkk metnini onaylayınız!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <FormGroup className='custom-control custom-checkbox mb-3'>
                            <Input
                              className='custom-control-input'
                              id='customCheck1'
                              type='checkbox'
                              onChange={e =>
                                setCorporate({
                                  ...corporates,
                                  KVKK: e.target.checked,
                                })
                              }
                            />
                            <label
                              className='custom-control-label'
                              htmlFor='customCheck1'
                            >
                              <span>
                                Kişisel Verilerin Korunması Kanunu uyarınca,
                                verilerimin belirtilen kapsamda işlenmesini ve
                                sağlık hizmet sunumu amacıyla tarafımla
                                iletişime geçilmesini kabul ediyorum.
                              </span>
                            </label>
                          </FormGroup>
                        </Form.Item>
                        <div>
                          <Button
                            block
                            className='btn-round'
                            color='default'
                            size='lg'
                            // type='submit'
                            // onClick={submit}
                          >
                            Teklif Al
                          </Button>
                        </div>
                      </Form>
                    </Spin>
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
                    <span className='nav-link-inner--text ml-1'>Teklif Al</span>
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

export default SpecialToCorporate;
