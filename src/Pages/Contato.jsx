import NavBarProjeto from '../components/NavBarProjeto';
import Footer from '../components/Footer';
import Dados from '../components/Dados';
//import './cabeca.css'


function Contato(){
  return (
    <div>
     <div className="cabecalho bg-danger">
        <h4 className='lala'>Art store</h4>
        <p className='lolo'>Materias que fazem a Arte</p>
      <NavBarProjeto></NavBarProjeto>
      </div>
      <Dados></Dados>
      <Footer></Footer>
    </div>
  )
} export default Contato