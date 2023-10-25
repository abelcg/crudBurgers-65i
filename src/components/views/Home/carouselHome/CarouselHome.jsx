import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="hamburguesa"
          />
          <Carousel.Caption className="text-danger">
            <h3>The best burger!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/534285/pexels-photo-534285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="burger chef"
          />
          <Carousel.Caption className="text-danger">
            <h3>The best burgers and more here!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="mixed roasts"
          />
          <Carousel.Caption className="text-danger">
            <h3>The best mixed flavors and more!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
