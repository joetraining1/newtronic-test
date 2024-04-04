import React, { useEffect, useState } from "react";
import ApiClient from "./lib/integration/ApiClient";
import { Container, Font, Singles } from "./lib/constant/styles";
import MainLayout from "./lib/layout/MainLayout";
import { Typography } from "@mui/material";
import { Titler } from "./lib/utils/SentenceSeparator";
import { color } from "./lib/constant/colors";
import Hero from "./components/Hero/Hero";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [data, setData] = useState([]);
  console.log(data[0]);

  

  const req = async () => {
    await ApiClient.get("directory/dataList").then((res) => {
      setData(res.data.data);
    });
    return;
  };

  useEffect(() => {
    if (data?.length === 0) {
      req();
    }
  }, []);

  return (
    <MainLayout data={!data[0] ? null : data[0]}>
      {!data[0] ? null : (
        <React.Fragment>
          <Hero data={data[0]} />
          <Playlist data={data[0].playlist}/>
        </React.Fragment>
      )}
    </MainLayout>
  );
}

export default App;
