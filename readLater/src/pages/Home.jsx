import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  const [urls, setUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const res = await axios.get('http://localhost:5050/urls');
      setUrls(res.data);
    } catch (err) {
      console.error('Failed to fetch URLs:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log('Current URLs:', urls);
      await axios.delete(`http://localhost:5050/urls/${id}`);
      setUrls(prev => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const handleToggleStar = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5050/urls/${id}/star`);
      setUrls(prev => prev.map(item => item._id === id ? res.data : item));
    } catch (err) {
      console.error('Failed to toggle star:', err);
    }
  };
  
  const handleToggleRead = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5050/urls/${id}/read`);
      setUrls(prev => prev.map(item => item._id === id ? res.data : item));
    } catch (err) {
      console.error('Failed to toggle read:', err);
    }
  };
  const goToAddUrl = () => {
    navigate('/add');
  };

  return (
    <div>
      <h2>📚 Read Later List</h2>
      <button onClick={goToAddUrl}>➕ Add URL</button>
      <ul>
        {urls.map((item) => (
        <li key={item._id}>
            <Link to={`/summary/${item._id}`} target="_blank" rel="noopener noreferrer"></Link>
            <span style={{ textDecoration: item.read ? 'line-through' : 'none' }}>
            {item.url}
            <br></br>
            </span>
            <a href={`/summary/${item._id}`} target="_blank" rel="noopener noreferrer">
                {item.name}
            </a>
            <button onClick={() => handleToggleStar(item._id)}>
            {item.starred ? '⭐️' : '☆'}
            </button>
            <button onClick={() => handleToggleRead(item._id)}>
            {item.read ? '✅ Read' : '📖 Unread'}
            </button>
            <button onClick={() => handleDelete(item._id)}>❌ Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
