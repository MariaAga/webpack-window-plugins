import React from 'react';
import LocalButton from './Button';
import { WindowLoad } from './WindowLoad';
import { importRemote } from '@module-federation/utilities';

const waitload = async () => {
  await importRemote({ url: "http://localhost:3002", scope: 'plugin', module: 'globalIndex' })
}
const App = () => {
  waitload();
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>Core</h2>
      <WindowLoad />
      <LocalButton />
    </div>
  );
};
export default App;
