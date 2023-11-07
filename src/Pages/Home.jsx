import NavBarProjeto from "../components/NavBarProjeto";
import Cardon from "../components/Card";
import Caroussel1 from "../components/Carousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="cabecalho bg-danger" >
        <a href="https://cdn-icons-png.flaticon.com/512/103/103414.png"></a>
        <h4 className="lala">Art Shop</h4>
        <p className="lolo">Materias que fazem a Arte</p>

        <NavBarProjeto></NavBarProjeto>
        <Caroussel1></Caroussel1>
        <div className="joao"></div>
        <h2 className="popo">Materiais</h2>
        <Cardon></Cardon>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Home;
