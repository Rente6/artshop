import NavBarProjeto from "../components/NavBarProjeto";
import Footer from "../components/Footer";
import Loja from "../components/Loja";
import Form from "react-bootstrap/Form";

function Sobre() {
  return (
    <div>
      <div className="cabecalho bg-danger">
        <h4 className="lala">Art store</h4>
        <p className="lolo">Arte pela arte</p>
        <NavBarProjeto></NavBarProjeto>
      </div>
      <form
        style={{
          padding:"80px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="text">.. Id</label>
          <input type="id" />
        </div>

        <div>
          <label htmlFor="text">.. Artista</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="text">.. Criação</label>
          <input type="date" name="" id="" />
        </div>

        <div>
          <label htmlFor="text">.. Quantidade</label>
          <input type="number" name="" id="" />
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
}
export default Sobre;
