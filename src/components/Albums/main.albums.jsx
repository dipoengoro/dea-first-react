import React from "react";
import {Container} from "react-bootstrap";
import CollectionAlbums from "./collection.albums";

const MainAlbums = (props) => {
  return (
    <React.Fragment>
      <Container className={"mt-2"}>
        <CollectionAlbums/>
      </Container>
    </React.Fragment>
  );
}

export default MainAlbums;
