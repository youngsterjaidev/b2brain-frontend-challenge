// @ts-ignore
import logo from "./logo.svg";
import { Input, Navbar, Sidebar } from "./components";
// @ts-ignore
import styled from "styled-components";
import React, { useState } from "react";
import { Comapanies, Footer, Hero_image, Logo } from "./assets";
import Dashboard from "./dashboard";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  grid: [stack] 1fr / minmax(min-content, 23%) [stack] 1fr;

  @media (max-width: 550px) {
    grid: [stack] 1fr / min-content [stack] 1fr;

    & > * {
      grid-area: stack;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchCompany, setSearchCompany] = useState("");
  const [result, setResult] = useState<[] | any[]>([]);

  const handleSearchCompany = async (value: string) => {
    try {
      const res = await axios({
        url: `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${value}`,
        method: "GET",
      });

      console.log(res.data);
      setResult(res.data);
    } catch (e) {
      console.log("Error Occured while fetching the company !", e);
    }
  };

  return (
    <div>
      <Container>
        {/* {showSidebar ? (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : null} */}

        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div style={{ overflowY: "scroll" }}>
          <Navbar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            searchCompany={searchCompany}
            setSearchCompany={setSearchCompany}
            handleSearchCompany={handleSearchCompany}
          />

          {result.length === 0 ? (
            <>
              <Img src={Hero_image} alt="" />
              <Img src={Comapanies} alt="" />
              <Img src={Footer} alt="" />
            </>
          ) : (
            <Dashboard result={result} setResult={setResult} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
