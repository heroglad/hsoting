import {defineconfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineconfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/hsoting',
});