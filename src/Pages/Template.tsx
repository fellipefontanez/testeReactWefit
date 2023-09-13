import Header from "@components/Header/Header";
import StyledBackground from "@styles/Background/Background";
import GlobalStyles from "@styles/GlobalStyles";
import StyledMain from "@styles/Main";
import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <StyledBackground>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledBackground>
  );
}
