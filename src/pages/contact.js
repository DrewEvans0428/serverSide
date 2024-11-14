import React from "react";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '0506e354-7e3a-4b83-8ba7-a1c32879aad6',
                    ...formData
                })
            });
            if (response.ok) {
                setStatus('Message sent succesfully!');
                setFormData({ name: '', email: '', message: ''});
            } else{
                setStatus('Error sending message.');
            }
        }
        catch (error) {
            console.error('Error:', error);
            setStatus('Error sending message.');
        }
        };

        return (
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>Please leave questions, comments, feedback, or ideas you feel like would work.</p>
                <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                {status && <p>{status}</p>}
            </section>
        )
    }

    export default Contact;
