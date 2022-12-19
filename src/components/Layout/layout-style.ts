import { styled } from "@stitches/react";
import { CSSProperties } from "react";

export const LayoutStyle = (): CSSProperties => ({
  display: "grid",
  gridTemplateRows: "150px 1fr 50px",
  minHeight: "100%",
});

export const HeaderStyle = (color: string): CSSProperties => ({
  background: color,
  height: "150px",
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ContentStyle = (color: string): CSSProperties => ({
  padding: "30px",
  background: color,
});

export const FooterStyle = (color: string): CSSProperties => ({
  height: "50px",
  background: color,
  textAlign: "center",
});

export const CustomButton = styled("button", {
  width: "100px",
  color: "white",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "$$hover",
  },
});
