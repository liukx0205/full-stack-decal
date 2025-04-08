import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SummaryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [urlData, setUrlData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5050/urls')
      .then(res => {
        const found = res.data.find(i => i._id === id);
        if (found) setUrlData(found);
      });
  }, [id]);

  if (!urlData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{urlData.name}</h2>
      <p><strong>URL:</strong> <a href={`https://${urlData.url}`} target="_blank" rel="noopener noreferrer">{urlData.url}</a></p>
      <p><strong>Description:</strong> {urlData.description}</p>
      <button onClick={() => navigate('/')}>⬅ Back to Home</button>
    </div>
  );
}

export default SummaryPage;
