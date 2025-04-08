const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

const FILE_PATH = './data.json';

console.log("🚀 server.js has started...");


// Helper to read from file
function readUrls() {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data || '[]');
}

// Helper to write to file
function writeUrls(data) {
    console.log('💾 Writing to:', FILE_PATH); // Log where you're writing
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
    console.log('✅ Write complete!');
  }

// Get all URLs
app.get('/urls', (req, res) => {
    console.log("get");
  const urls = readUrls();
  res.json(urls);
});

// Add a URL
app.post('/urls', (req, res) => {
    const { url, name, description } = req.body;
    const urls = readUrls();
  
    const newUrl = {
      _id: Date.now().toString(),
      url,
      name,
      description,
      starred: false,
      read: false,
    };
  
    urls.push(newUrl);
    writeUrls(urls);
    res.status(201).json(newUrl);
  });

// Delete a URL
app.delete('/urls/:id', (req, res) => {
    const { id } = req.params;
    let urls = readUrls();
  
    const initialLength = urls.length;
    urls = urls.filter((item) => item._id !== id);
  
    if (urls.length === initialLength) {
      return res.status(404).json({ error: 'URL not found' });
    }
  
    // ✅ Save updated list to file
    writeUrls(urls);
  
    console.log("❌ Deleted ID:", id);
    console.log("💾 Saved updated list:", urls);
  
    res.json({ message: 'Deleted successfully' });
  });

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

// Toggle "starred" status
app.patch('/urls/:id/star', (req, res) => {
    const urls = readUrls();
    const url = urls.find(item => item._id === req.params.id);
    if (!url) return res.status(404).json({ error: 'Not found' });
  
    url.starred = !url.starred;
    writeUrls(urls);
    res.json(url);
  });

// Toggle "read" status
app.patch('/urls/:id/read', (req, res) => {
  const urls = readUrls();
  const url = urls.find(item => item._id === req.params.id);
  if (!url) return res.status(404).json({ error: 'Not found' });

  url.read = !url.read;
  writeUrls(urls);
  res.json(url);
});

