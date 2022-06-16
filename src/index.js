import React from 'react';
import 'antd/dist/antd.css';
import { createRoot } from 'react-dom/client';

import Root from './components/Root/Index';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);