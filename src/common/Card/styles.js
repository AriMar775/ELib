import styled from "styled-components";

export const CardWrapper = styled.div((props) => ({
  width: props.width,
  height: props.height,
  minHeight: props.minHeight,
  background: "#E7EDFF",
  boxShadow:
    "-6px -6px 10px rgba(248, 250, 255, 0.6), 4px 4px 6px rgba(90, 105, 158, 0.3), inset -1px -1px 2px rgba(80, 101, 154, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.3)",
  userSelect: "none",
}));
