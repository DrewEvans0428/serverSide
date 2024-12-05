import React, { useState } from 'react';
import axios from 'axios';

function AddDataForm({ onDataAdded }) {
    const [formData, setFormData] = useState({ title: '', description: ''});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (formData.title.length < 3) {
            setError('Title must be at least 3 charecters');
            return false;
        }
        if (formData.description.length < 5) {
            setError('Description must be at least 5 charecters');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try{
            const response = await axios.post('http://localhost:3000/api/card', formData);
            if (response.data.success) {
                setSuccess(true);
                onDataAdded();
                setFormData({ title: '', description: ''});
            } else{
                setError(response.data.message);
            }
        } catch (error) {
            setError('Failed to add data');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='Title' value={formData.title} onChange={handleInputChange} />
            <input type='text' name='description' placeholder='Description' value={formData.description} onChange={handleInputChange} />
            <button type="submit">Add Data</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Data added succesfully!</p>}
        </form>
    );
}

export default AddDataForm;