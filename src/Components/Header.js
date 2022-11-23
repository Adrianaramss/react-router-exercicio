import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToProfilePage,goToProfileProduto} from  '../Router/Coordinador'

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, 'Adriana')}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToProfileProduto(navigate, 'dog')}>
        Ir para página de produto
      </button>



    </header>
  );
}

export default Header;
