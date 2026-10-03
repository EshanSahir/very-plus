import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './studio.css';
import { StudioApp } from './StudioApp';

createRoot(document.getElementById('studio-root')!).render(
  <StrictMode>
    <StudioApp />
  </StrictMode>
);
