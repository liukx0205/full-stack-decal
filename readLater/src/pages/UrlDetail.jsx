import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UrlDetail() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/summary/${id}`)
      .then(res => setSummary(res.data.summary))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      <h2>URL Summary</h2>
      <p>{summary || 'Loading...'}</p>
    </div>
  );
}

export default UrlDetail;
