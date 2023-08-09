// Tell TypeScript to use the default types

import { MouseEventHandler } from "react";

export interface Buttonprops {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
