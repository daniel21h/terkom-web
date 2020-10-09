import React from "react";

import {
  Container,
  Navigation,
  DropboxLogo,
  Form,
  MailIcon,
  WhatsappIcon,
  LocationIcon,
} from "./styles";

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Terkom</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Entrar em contato</span>
        <span className="subtitle">verifique as opções abaixo</span>

        <a href="https://api.whatsapp.com/send?phone=5511947986336">
          <WhatsappIcon />
          +55 (11) 94798-6336
        </a>
        <a href="mailto:hesselproject@gmail.com@exemplo.com?Subject=Título%20da%20mensagem">
          <MailIcon />
          hesselproject@gmail.com
        </a>
        <a>
          <LocationIcon />
          Localização
        </a>

        <span className="terms">
          Está página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
