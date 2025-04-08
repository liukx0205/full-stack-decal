import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUrl() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!url) return alert('Please enter a valid URL.');
    try {
      await axios.post('http://localhost:5050/urls', {
        url, name, description
      });
      navigate('/');
    } catch (err) {
      console.error('Error adding URL:', err);
    }
  };
  const handleSummarize = async () => {
    if (!url) return alert('Please enter a URL first.');
  
    try {
      const res = await axios.post(
        'https://api.deepseek.com/v1/chat/completions',
        {
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: 'You are a helpful assistant that summarizes papers.' },
            { role: 'user', content: `Please summarize the content of this paper: ${url}` }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-81ad0ad8ce894d1c80696c63287e78f0'
          }
        }
      );
  
      const summary = res.data.choices?.[0]?.message?.content || '';
      setDescription(summary);
    } catch (err) {
      console.error('Failed to summarize:', err);
      alert('Failed to generate summary.');
    }
  };

  return (
    <div>
      <h2>Add a New URL</h2>
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={5}
        cols={50}
      /><br />
      <button onClick={handleSummarize}>🧠 Generate Summary with DeepSeek</button>
      <br></br>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddUrl;
