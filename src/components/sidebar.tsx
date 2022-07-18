import React from "react";
import { B2Brain } from "../assets";
import styled from "styled-components";
import { Icons } from "../assets";
import { Dropdown } from "./dropdown";

interface ContainerProps {
  showSidebar: boolean;
}

const Container = styled.div<ContainerProps>`
  z-index: 2;

  & > div:nth-of-type(1) {
    padding: 2rem 2rem 0.8rem 2rem;
    background: #fff;
    box-shadow: 4px 0px 16px rgba(30, 30, 30, 0.08);
    height: 100vh;
    overflow-y: auto;
  }

  & > div:nth-of-type(2) {
    background: #0000002e;
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.showSidebar ? "grid" : "none")};
    grid-template-columns: [nav] 3fr [escape] 1fr;
  }
`;

const LogoName = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  font-style: normal;
  padding-left: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 2rem 0em 0em 0em;
  list-style-type: none;
`;

const Li = styled.li<{ active?: boolean }>`
  & > a {
    color: #000;
    text-decoration: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0.7rem 0rem;
    gap: 1rem;
  }

  & > a > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 2rem;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  ${(props) =>
    props.active &&
    `
    & > a > div:nth-of-type(2) {
    font-weight: 600;
    }
  `}
`;

const Badge = styled.div`
  display: inline-flex;
  border-radius: 22px;
  background: #ddd;
  padding: 0.1em 0.7em;
  line-height: 16px;
  font-size: 0.9em;
  background-color: #ff7474;
  white-space: nowrap;
  color: #fff;
`;

interface Props {
  showSidebar: any;
  setShowSidebar: any;
}

export const Sidebar: React.FC<Props> = ({ setShowSidebar, showSidebar }) => {
  return (
    <Container showSidebar={showSidebar}>
      <div>
        <LogoContainer>
          <img src={B2Brain} alt="Brain logo" />
          <LogoName>B2Brain</LogoName>
        </LogoContainer>
        <Ul>
          <Li active>
            <a href="#">
              <div>
                <img src={Icons.home} alt="" />
              </div>
              <div>Dashboard</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.star} alt="" />
              </div>
              <div>
                <div>Intels</div>
                <Badge>4 unseens</Badge>
              </div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.user} alt="" />
              </div>
              <div>
                <div>Lead</div>

                <Badge>4 unseens</Badge>
              </div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Manage All", "Track new Accounts", "Bulk Import"]}
              >
                <div>
                  <img src={Icons.building} alt="" />
                </div>
                <div>
                  <div>Accounts</div>
                  <div>
                    <img src={Icons.down} alt="" />
                  </div>
                </div>
              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <Dropdown
                items={["Product Focus", "Intel Preferences", "Lead Persona"]}
              >
                <div>
                  <img src={Icons.cog} alt="" />
                </div>
                <div>
                  <div>Preferences</div>
                  <div>
                    <img src={Icons.down} alt="" />
                  </div>
                </div>
              </Dropdown>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.link} alt="" />
              </div>
              <div>Integrations</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.users} alt="" />
              </div>
              <div>Team</div>
            </a>
          </Li>
          <Li>
            <a href="#">
              <div>
                <img src={Icons.comments_alt} alt="" />
              </div>
              <div>Help / support</div>
            </a>
          </Li>
        </Ul>
      </div>
      <div onClick={() => setShowSidebar(false)}></div>
    </Container>
  );
};
