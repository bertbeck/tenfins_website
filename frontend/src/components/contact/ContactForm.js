import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://backend.vimdhayak.tech:3003/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ name: '', email: '', contact: '', message: '' })
    }
    render() {
        return (
            <div id="contact-form-box">
                <h3>Don't let your app idea remain a dream. </h3>
                <h3>Contact us today and let's turn it into a reality.</h3>

                <form id="contact-form-home" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder='Full Name*' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder='Email*' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact"></label>
                        <input type="tel" className="form-control" id="contact" aria-describedby="contactHelp" value={this.state.contact} onChange={this.onContactChange.bind(this)} placeholder='Contact Number*' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <textarea className="form-control" rows="2" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder='Enter brief message...' />
                    </div>
                    <button type="submit" className="btn btn-100">SUBMIT <HiArrowRight /></button>
                </form>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onContactChange(event) {
        this.setState({ contact: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}
export { ContactForm };