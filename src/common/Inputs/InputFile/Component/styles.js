import styled from "styled-components";

import cover from "../../../../assets/cover.png";

export const InputItem = styled.input(() => ({
  position: "absolute",
  width: "238px",
  height: "312px",
  opacity: 0,
}));

export const Cover = styled.div(() => ({
  margin: "0 20px 20px 0",
  width: "238px",
  height: "312px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "-6px -6px 10px rgba(248, 250, 255, 0.6), 4px 4px 6px rgba(90, 105, 158, 0.3), inset -1px -1px 2px rgba(80, 101, 154, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.3)",
}));

export const Border = styled.div(() => ({
  width: "218px",
  height: "292px",
  background: `url(${cover}) no-repeat -30px -8px`,
  cursor: "pointer",
}));

export const ImageWrapper = styled.img(() => ({
  width: "218px",
  height: "292px",
}));
