import Carousel from "./carousel/Carousel";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="bg-red-300">
        <Navbar brand="Brand" brandLink="/">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faBars} />
        </Navbar>
      </div>

      <main className="mx-5 sm:mx-10 md:mx-16 lg:mx-24 relative top-[100px]">
        <section>
          <Carousel />
        </section>
      </main>
    </>
  );
};

export default Home;
