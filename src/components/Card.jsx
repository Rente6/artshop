import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const servicos = [
  {
    titulo: "Pincel",
    preco: "R$5,00",
    texto: "compre",
    img: "https://img.freepik.com/fotos-gratis/compositio-de-estudio-de-arte-adoravel_23-2147868362.jpg?w=740&t=st=1699360983~exp=1699361583~hmac=e7a84d42b29e8e56ee48cf05910bc15b6e9a0a52625606919c849d8056f816ee"
  },
  {
    titulo: "tinta",
    preco: "R$50,00",
    texto: "compre",
    img: "https://img.freepik.com/vetores-gratis/baldes-de-tinta-multicolorida-e-conjunto-vazio_529539-138.jpg?w=740&t=st=1699361712~exp=1699362312~hmac=06e712be97fbf8e9b91402c8fdcf5cd78addfe57df6c54e743738ac832ce504d"
  },
  {
    titulo: "Lápis(conjunto)",
    preco: "R$30,00",
    texto: "compre",
    img: "https://img.freepik.com/fotos-gratis/postura-plana-de-arranjo-de-lapis-coloridos_23-2148419458.jpg?w=740&t=st=1699361751~exp=1699362351~hmac=38088e220ae4d75384ff51269722ab1e1af271ef44d872730ac5dec98e8e0cba"
  },
]


function Cardon() {
  return (
    <CardGroup>
      {servicos.map(({titulo, preco, texto, img}) =>(
        <Card key ={titulo}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
          {texto}
          <br/>
          {preco}
          </Card.Text>
        </Card.Body>
        </Card>
      ))}
     
    </CardGroup>
  );
}

export default Cardon;