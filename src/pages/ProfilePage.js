import { useParams,useNavigate } from "react-router-dom";
import Router from "../Router/Router";
import { goToProfilePage} from '../Router/Coordinador'


function ProfilePage() {
  const navigate = useNavigate()

  const { id } = useParams();
  return (
    <section>
       <Router/>
      <h1>Página de perfil {id}</h1>

      <button onClick={() => goToProfilePage(navigate, 'adriana')}>
        Ir para página de perfil
      </button>
    </section>
  );
}

export default ProfilePage;
