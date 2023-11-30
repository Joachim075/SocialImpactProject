import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import Authentication from './Componets/Authentication';

function App() {
  return (
    <MantineProvider>
    <Authentication/>
    </MantineProvider>
  );
}

export default App;
