import React from "react";

import { WindowLoad } from "./WindowLoad";
import { importRemote } from "@module-federation/utilities";
import Button from "./Button";

const waitload1 = async () => {
  await importRemote({ url: "http://localhost:3002", scope: "plugin", module: "globalIndex", remoteEntryFileName: 'remoteEntry1.js' });
};
const waitload2 = async () => {
  await importRemote({ url: "http://localhost:3003", scope: "plugin2", module: "globalIndex" , remoteEntryFileName: 'remoteEntry2.js'});
};
const App = () => {
  waitload1();
  waitload2();
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>Core</h2>
      <WindowLoad />
      <Button />
    </div>
  );
};
export default App;
