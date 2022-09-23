import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, Label, Input, Col, Row } from 'reactstrap';
    import {Control,LocalForm,Errors} from 'react-redux-form';


const maxLength=(len)=> (val)=>!(val) || (val.length<=len);

const minLength=(len)=>(val)=>(val) && (val.length>=len);

class CommentForm extends Component {
  constructor(props){
      console.log(props)
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      console.log(this)
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state={
          isModalOpen:props.val,

      }
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    console.log(parseInt(this.props.dishId.dishId))
    this.props.addComment(parseInt(this.props.dishId.dishId),parseInt(values.rating) ,values.author,values.comment)
    alert("Feedback send successfully");

}
  render() {
    return (
      <Modal isOpen={this.state.isModalOpen}  toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className='form-group'>
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                                <Control.text type='number' model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className='form-control'

                                        />
                        </Col>
                        </Row>
                        <Row className='form-group'>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Name"
                                        className='form-control'
                                        validators={{minLength:minLength(3),maxLength:maxLength(15)}}
                                         />
                                  </Col>
                        </Row>
                        <Row className='form-group'>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="5"
                                        className='form-control'></Control.textarea>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                    </ModalBody>

      </Modal>
    )
  }
}
export default CommentForm;