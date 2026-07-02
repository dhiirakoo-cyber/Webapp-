import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env if present
dotenv.config();

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-supabase-env',
        transformIndexHtml(html) {
          const supabaseUrl = process.env.SUPABASE_URL || '';
          const supabaseKey = process.env.SUPABASE_KEY || '';
          return html.replace(
            '</head>',
            `  <script>
    window.SUPABASE_URL = ${JSON.stringify(supabaseUrl)};
    window.SUPABASE_KEY = ${JSON.stringify(supabaseKey)};
  </script>
</head>`
          );
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
