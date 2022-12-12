import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../config/themeSlice";
import { AppDispatch } from "../../config/store";
import StoreType from "../../types/StoreType";
import Button from "../Button/Button";
import { Wrapper, Container, Title, MobileOnly, ProfileWrapper } from "./Header.styled";
import { FiMoon, FiSun, FiLogOut, FiSearch, FiHome, FiUser, FiUploadCloud } from "react-icons/fi";
import { ethers } from "ethers";
import { addAccount, clearAccount } from "../../config/accountSlice";
import { AccountType } from "../../types/AccountType";
import { getDisplayName } from "../../helpers/getDisplayName";
import { useRouter } from "next/router";

function Header() {
  const { isDarkMode } = useSelector((store: StoreType) => store.theme);
  const { account } = useSelector((store: StoreType) => store);
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();

  const changeTheme = () => {
    dispatch(switchTheme());
  };

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("Please install Metamask");
      return;
    }
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    const signerAccount: AccountType = { address, balance: ethers.utils.formatEther(balance) };
    dispatch(addAccount(signerAccount));
  };

  const removeWallet = async () => {
    const hasConfirmed = confirm("Do you wish to disconnect?");
    if (hasConfirmed) {
      dispatch(clearAccount());
      push({ pathname: "/" });
    }
  };

  return (
    <Container>
      <Title onClick={() => push({ pathname: "/" })}>Crypto-Penguin</Title>
      <Wrapper>
        <MobileOnly>
          <Button isOutlined onClick={() => push({ pathname: "/" })}>
            <FiHome />
          </Button>
        </MobileOnly>

        <Button isOutlined onClick={() => push({ pathname: "/search" })}>
          <FiSearch />
        </Button>
        {!!account.address && (
          <Fragment>
            <Button isOutlined onClick={() => push({ pathname: "/mint" })}>
              <FiUploadCloud />
            </Button>
            <ProfileWrapper>
              <Button isOutlined onClick={() => push({ pathname: "/profile" })}>
                {getDisplayName(account.address)}
              </Button>
            </ProfileWrapper>
            <MobileOnly>
              <Button isOutlined onClick={() => push({ pathname: "/profile" })}>
                <FiUser />
              </Button>
            </MobileOnly>
            <Button isOutlined onClick={removeWallet}>
              <FiLogOut />
            </Button>
          </Fragment>
        )}
        {!account.address && (
          <Button isOutlined onClick={connectWallet}>
            Connect Wallet
          </Button>
        )}
        <Button isOutlined onClick={changeTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Header;
