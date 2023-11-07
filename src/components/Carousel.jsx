import Carousel from 'react-bootstrap/Carousel';

function Caroussel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/vista-frontal-de-pinceis-no-pote-com-espaco-de-copia_23-2148591263.jpg?w=740&t=st=1699366746~exp=1699367346~hmac=5200d0457d60066f793c51a32a15e228b7509045e597e26db8a68d11044f3527"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/vista-frontal-do-aquarelle-colorido-com-espaco-de-copia_23-2148419548.jpg?w=740&t=st=1699366770~exp=1699367370~hmac=ed0e3bd2a43a3d43b9b0f497f79a34a9b5800e3d2f451bc8e96b01cf15262e54 "
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/vista-superior-de-varios-pinceis-com-paleta-de-cores_23-2148660909.jpg?w=740&t=st=1699366784~exp=1699367384~hmac=8acecde4f00d3dbd542edfc96d99bc405e32c29c2fbb9810b00829fdf347e055"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel1;