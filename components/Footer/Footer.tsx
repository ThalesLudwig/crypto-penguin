import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Links, Redirect } from "./Footer.styled";

function Footer() {
  return (
    <Container>
      <Links>
        <Redirect href="https://twitter.com/ThalesLudwig" target="_blank">
          <FaTwitter size={25} />
        </Redirect>
        <Redirect href="https://github.com/ThalesLudwig" target="_blank">
          <FaGithub size={25} />
        </Redirect>
        <Redirect href="https://www.linkedin.com/in/thalesludwig/" target="_blank">
          <FaLinkedin size={25} />
        </Redirect>
      </Links>
      <Links>
        <Redirect href="https://mumbaifaucet.com/">Mumbai Faucet</Redirect>
        <Redirect href="mailto:thales.ludwig@gmail.com">Contact the team</Redirect>
      </Links>
    </Container>
  );
}

export default Footer;
