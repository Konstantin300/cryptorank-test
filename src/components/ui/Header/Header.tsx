import { useRouter } from "next/router";
import React from "react";
import { Button, Wrapper } from "./styled";

const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Button onClick={() => router.push("/")}>Home</Button>
      <Button onClick={() => router.push("/calculator")}>Calculator</Button>
      <Button onClick={() => router.push("/watchlist")}>Watchlist</Button>
    </Wrapper>
  );
};

export default Header;
