import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup} from 'react-bootstrap';
import {Row,Col} from 'reactstrap';
import Popup from "reactjs-popup";
 

class userreq extends React.Component{
    render()
      {
        return (
            <div className="App">
              
          <Navbar bg="dark" variant="dark" expand="md">
            
            <div>
            <Navbar.Brand  class="align-self-center">Requests</Navbar.Brand>
            </div>
          </Navbar> 
          <br></br>
          <Container fluid="md">
         
                  <Container> 
                                                    <Row>
                                                    <Col xs={6} md={4} offset={4}></Col>
                                                    <Col xs={6} md={4} offset={4}>
                                                            <Dropdown as={ButtonGroup}>
                                                      <Button variant="info">Category</Button>
                                                      <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                                                      <Dropdown.Menu>
                                                        <Dropdown.Item href="#/">10th</Dropdown.Item>
                                                        <Dropdown.Item href="#/">12th</Dropdown.Item>
                                                        <Dropdown.Item href="#/">B.Tech</Dropdown.Item>
                                                      </Dropdown.Menu>
                                                    </Dropdown></Col>
                                                      </Row> 
                  </Container> 
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Container>
        <Row>
                          <Col md="6">
                            <h6>Requested Category:<input type="text" value="Label"></input></h6>  
                          </Col>
                          <Col md="6">
                              <h6> Requested Value:     <input type="text" name="text"></input> </h6>
                          </Col>
                      </Row>
                                      <Row>
                                                    <Col xs={6} >
                                                      <input type="file"/>
                                                      <br></br>
                                                      <br></br>
                                                    </Col>
                                      </Row>
                                      <Row>
                                              <Col xs={6} md={4}>
                                                  <Button variant="dark">Upload</Button>
                                                </Col>
                                                <br></br>
                                                
                                      </Row>
        <br></br>
                                  <Row>
                                    <Col>
                                    <div className="form-group">
                                              <label htmlFor="exampleFormControlTextarea1">
                                            Reason
                                              </label>
                                              <textarea
                                              className="form-control"
                                              id="exampleFormControlTextarea1"
                                              rows="5"
                                              />
                                          </div>
                                  
                                    </Col>
                                  </Row>
        
        <br></br>
        <br></br>
        
                            <Row>
                                      <Col xs={6} md={4}></Col>
                                      <Col xs ={6} md ={4}>
                                              
                                                <Popup trigger={<Button variant="secondary"> Send Request</Button>} position="right center">
                                                        <div>Request sent!!!</div>
                                                </Popup>
                                      </Col>
                            </Row>
        </Container>
        </div>           
);
  }
    }

    export default userreq;