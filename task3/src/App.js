import React, { Component } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import "./App.css";

import Basic from "./components/Form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  website: "",
  image: "",
  skills: [],
};

class App extends Component {
  state = {
    formSubmissions: [],
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.setState((prevState) => ({
      formSubmissions: [...prevState.formSubmissions, values],
    }));
    // this.show(values);
    resetForm();
  };
  handleClear = (formik) => {
    formik.resetForm();
  };
  render() {
    return (
      <>
        <Navbar expand="lg" className="nav">
          <Navbar.Brand href="#home" className="navbar">
            Student Enrollment Form
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Basic
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
                onClear={this.handleClear}
              />
            </Col>
            <Col>
              <h3 className="text-center">Enrolled Students</h3>
              {this.state.formSubmissions.length > 0 && (
                <div className="container">
                  <div className="row ">
                    <div className="col heading">
                      <h5>Descriptions</h5>
                    </div>
                    <div className="col heading">
                      <h5>Image</h5>
                    </div>
                  </div>
                  {this.state.formSubmissions.map((submissions, index) => (
                    <div key={index}>
                      <div className="row">
                        <div className="col">
                          <h6 style={{ textTransform: "capitalize" }}>
                            {submissions.firstName} {submissions.lastName}
                          </h6>
                          <h6>{submissions.gender}</h6>
                          <a href={submissions.website}>
                            {submissions.website}
                          </a>
                          <h6>{submissions.email}</h6>
                          <h6>{submissions.skills.toString()}</h6>
                        </div>
                        <div className="col">
                          <img
                            src={submissions.image}
                            alt={submissions.firstName}
                            className="end"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
        {/* <Container className="container">
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column sm={2}>
                    Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={this.state.studentInfo.name}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={this.state.studentInfo.email}
                    />
                  </Col>
                </Form.Group>

                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Gender
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalGender"
                        id="formHorizontalGenderMale"
                        value={this.state.studentInfo.gender}
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalGender"
                        id="formHorizontalGenderFemale"
                        value={this.state.studentInfo.gender}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>{" "}
                    <Button onClick={this.handleClear} variant="danger">
                      Clear
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col>Output</Col>
          </Row>
        </Container> */}
      </>
    );
  }
}

export default App;
