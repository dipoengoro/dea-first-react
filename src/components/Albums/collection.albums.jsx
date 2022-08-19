import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Button, ButtonGroup, Carousel} from "react-bootstrap";

const CollectionAlbums = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);
  const handleLimit = (option) => {
    if (option === "+") {
      setLimit(prevState => prevState + 1)
    } else if (option === "-" && limit >= 2) {
      setLimit(prevState => prevState - 1)
    } else {
    }
  }
  useEffect(() => {
    let flush = false;
    if (!flush) {
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
      }).then((result) => setData(result.data));
      return () => {
        flush = true
      }
    }
  }, [limit]);

  return (
    <React.Fragment>
      <h3>{limit} Collection</h3>
      <Carousel>
        {data.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center">
        {limit > 1 &&
          <Button variant="outline-primary" onClick={() => handleLimit("-")}>-</Button>
        }
        <Button variant="outline-primary" onClick={() => handleLimit("+")}>+</Button>
      </ButtonGroup>
    </React.Fragment>
  );
}

export default CollectionAlbums;