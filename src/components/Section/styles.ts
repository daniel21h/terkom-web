import styled from "styled-components";
import { FaDraftingCompass, FaImage } from "react-icons/fa";

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &.first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      color: var(--text-color);
      background: none;
      border: none;
      outline: none;
      font-size: 16px;
      cursor: pointer;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: 1024px) {
    margin: auto 18%;
  }
`;

export const ImagesPageIcon = styled(FaImage)`
  width: 24px;
  height: 24px;
  fill: var(--logo-color);

  margin-right: 12px;
`;

export const DropboxLogo = styled(FaDraftingCompass)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: auto 18%;
  }

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: 600px;

    @media (max-width: 1100px) {
      max-width: 470px;
    }
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom);
`;
