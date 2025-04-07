import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Navbar,
  Nav,
  Card,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

// App component
function App() {
  return (
    <>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold neon-text">
              TechNova | By Stephen O.<span role="img" aria-label="rocket">🚀</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#solutions">Solutions</Nav.Link>
                <Nav.Link href="#about us">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page Heading */}
        <Container className="mt-5 text-center">
          <h1 className="display-5 futuristic-heading">
            Welcome to the Future of Tech - Brought To You By Stephen OLoo<span role="img" aria-label="sparkles">✨</span>
          </h1>
          <p className="lead text-muted">
            Explore intelligent features that drive innovation and efficiency.
          </p>
        </Container>

        {/* Cards Section */}
        <Container className="my-5">
          <Row xs={1} md={3} className="g-4">
            {/* Card 1 */}
            <Col>
              <Card className="h-100 shadow futuristic-card border-0">
                <Card.Body>
                  <Card.Title>
                    AI Chat Assistant <span role="img" aria-label="robot">🤖</span>
                  </Card.Title>
                  <Card.Text>
                    Engage with a powerful chatbot that understands and responds like a human. Ideal for support, sales, and beyond.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col>
              <Card className="h-100 shadow futuristic-card border-0">
                <Card.Body>
                  <Card.Title>
                    Image Analyzer <span role="img" aria-label="magnifying glass">🔍</span>
                  </Card.Title>
                  <Card.Text>
                    Upload any image and get instant insights powered by advanced computer vision and machine learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col>
              <Card className="h-100 shadow futuristic-card border-0">
                <Card.Body>
                  <Card.Title>
                    Voice Recognition <span role="img" aria-label="microphone">🎤</span>
                  </Card.Title>
                  <Card.Text>
                    Transcribe and interact using your voice. Built for accessibility and hands-free productivity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Contact Form */}
        <Container className="my-5">
          <h2 className="text-center mb-4 futuristic-heading">
            Contact Us <span role="img" aria-label="mail">📩</span>
          </h2>
          <Form className="shadow-lg p-4 rounded futuristic-card">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" />
            </Form.Group>

            <Button variant="info" type="submit" className="w-100 fw-bold">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default App;
