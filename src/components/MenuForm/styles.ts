import styled from "styled-components";
import {
  FaDraftingCompass,
  FaWhatsapp,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDraftingCompass)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const MailIcon = styled(FaMailBulk)`
  width: 16px;
  height: 16px;
  fill: var(--color-blue);
  margin-right: 10px;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  width: 16px;
  height: 16px;
  fill: var(--color-blue);
  margin-right: 10px;
`;

export const LocationIcon = styled(FaLocationArrow)`
  width: 16px;
  height: 16px;
  fill: var(--color-blue);
  margin-right: 10px;
`;

export const Form = styled.form`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;

    margin-top: 18px;
    border-radius: 2px;
  }

  > a {
    margin-top: 18px;
    text-decoration: none;

    padding: 13px 18px;
    font-size: 16px;
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    color: #b3b3b3;
    border-radius: 2px;
    text-align: left;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.87;
      background: var(--color-blue-opacity);
      border: 1px solid var(--color-blue);
      color: var(--color-blue);
    }

    > span.terms {
      margin-top: 8px;
      font-size: 12px;
      opacity: 0.6;
    }
  }
`;
