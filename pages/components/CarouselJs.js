import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line
export default (props) => (
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs
    swipeable={props.deviceType !== "mobile" ? "flase" : "true"}
    interval="5000"
    width="100%"
    stopOnHover
    className="flex flex-col items-center w-3/4 relative justify-center"
  >
    {props.children}
  </Carousel>
);
