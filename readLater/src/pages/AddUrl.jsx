import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUrl() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // 👈 Prevent page reload
    try {
      const response = await axios.post('http://localhost:5050/urls', { url });
      console.log('Added URL:', response.data); // 👈 Console log for debugging
      setUrl('');
      navigate('/'); // 👈 Redirect to home page
    } catch (error) {
      console.error('Failed to add URL:', error); // 👈 Catch errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddUrl;
