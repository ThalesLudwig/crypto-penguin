import { ThemeProps } from "../config/themeSlice";
import { AccountType } from "./AccountType";

export type StoreType = {
  theme: ThemeProps;
  account: AccountType;
};

export default StoreType;
