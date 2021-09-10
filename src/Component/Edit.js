// import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default class Edit extends Component {
//     constructor() {
//         super();
//         this.state = {
//             id: '',
//             name: '',
//             content: '',
//             status: '',
//         }
//     }

//     componentDidMount() {

//     }

//     render() {
//         return (
//             <div className="editform">
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="Name *"
//                             name="name"
//                             value={name}
//                             onChange={this.getName}
//                             required
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Control
//                             type="email"
//                             placeholder="Email *"
//                             name="email"
//                             value={email}
//                             onChange={this.getEmail}
//                             required
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Control
//                             as="textarea"
//                             placeholder="Address"
//                             rows={3}
//                             name="address"
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="Phone"
//                             name="phone"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Button variant="success" type="submit" block>
//                         Edit Employee
//                     </Button>
//                 </Form>
//             </div>
//         )
//     }
// }
