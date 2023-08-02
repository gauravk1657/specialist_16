
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors()); 


app.post('/upload', upload.single('file'), (req, res) => {
  
  res.json({ message: 'File uploaded successfully!' });
});


app.listen(3001, () => {
  console.log('Server running on port 3001');
});