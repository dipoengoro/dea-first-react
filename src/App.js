import React from "react";
import MainAlbums from "./components/Albums/main.albums";
import MainLayouts from "./components/Layouts/main.layouts";

const App = () => {
  return (
    <>
      <MainLayouts>
        <MainAlbums title="Image API" description="We fetch random image API from third party."/>
      </MainLayouts>
    </>
  );
}
export default App;
