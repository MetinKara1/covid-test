
import React from "react";
import { Button, Card, Container, Row, Col , 
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Table
} from "reactstrap";
import classnames from "classnames";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Applications extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section"
          style={{paddingTop:0}}>
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
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Başvurular
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
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
                        <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
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
                          Excel Aktar
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>PCR</td>
          <td>Ankara</td>
          <td>Bu bir test mesajıdır..</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>PCR</td>
          <td>Ankara</td>
          <td>Bu bir test mesajıdır..</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>PCR</td>
          <td>Ankara</td>
          <td>Bu bir test mesajıdır..</td>
        </tr>
      </tbody>
    </Table>
                        </TabPane>
                        <TabPane tabId="plainTabs2">
                            <p className="description">
                            Cosby sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher voluptate
                            nisi qui.
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
  }
}

export default Applications;
