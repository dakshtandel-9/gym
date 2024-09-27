import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows the server to be accessible on your local network
    port: 3000,       // You can also specify a custom port if needed (optional)
  },
});
