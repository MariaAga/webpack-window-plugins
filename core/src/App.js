import React from "react";
// import LocalButton from './Button';

import { ButtonWrapper } from "./ButtonWrapper";
import { WindowLoad } from "./WindowLoad";
import { importRemote } from "@module-federation/utilities";

const waitload = async () => {
  await importRemote({ url: "http://localhost:3002", scope: "plugin", module: "globalIndex" });
  await importRemote({ url: "http://localhost:3003", scope: "plugin2", module: "globalIndex" , remoteEntryFileName: 'remoteEntry2.js'});
};
const App = () => {
  waitload();
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>Core</h2>
      <WindowLoad />
      <ButtonWrapper>
        <button>App 1 Button</button>
      </ButtonWrapper>
    </div>
  );
};
export default App;
