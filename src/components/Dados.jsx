// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import '../Dados.css'

// function Dados() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     // <Form noValidate validated={validated} onSubmit={handleSubmit}>
//     //   <Row className="mb-3">
//     //     <Form.Group as={Col} md="4" controlId="validationCustom01">
//     //       <Form.Label>Nome</Form.Label>
//     //       <Form.Control
//     //         required
//     //         type="text"
//     //         placeholder="name"
//     //         defaultValue="joão"
//     //       />
          
          
//     //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//     //     </Form.Group>
//     //     <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//     //       <Form.Label>Usuario</Form.Label>
//     //       <InputGroup hasValidation>
//     //         <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//     //         <Form.Control
//     //           type="text"
//     //           placeholder="Username"
//     //           aria-describedby="inputGroupPrepend"
//     //           required
//     //         />
//     //         <Form.Control.Feedback type="invalid">
//     //           Please choose a username.
//     //         </Form.Control.Feedback>
//     //       </InputGroup>
//     //     </Form.Group>
//     //   </Row>
     
        
      
//     //   <Button type="submit">Submit form</Button>
//     // </Form> 


//     <>
    
    
    
//     </>
//   );
// }

// export default Dados;




import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Dados() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Dados;