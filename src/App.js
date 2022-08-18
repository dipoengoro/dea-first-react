import React from "react";
import Images from "./components/images";
import MainLayouts from "./components/Layouts/main.layouts";

const App = () => {
  return (
    <>
      <MainLayouts>
        <h1>HAHAHA</h1>
        <p>Hallloo</p>
        <Images title="Ini images" description="Images description"/>
      </MainLayouts>
    </>
  );
}
export default App;
