import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// API configuration endpoint
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL_AS_ITTI_GALCHI',
    supabaseKey: process.env.SUPABASE_KEY || 'sb_publishable_Z-8LuYQrGv1BmC7c3oNyCg_zojgZvdS'
  });
});

// Serve static files from the project root
app.use(express.static(path.join(process.cwd())));

// Fallback to index.html if route not found
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Amoo Academy Dev Server] Server running at http://localhost:${PORT}`);
});
