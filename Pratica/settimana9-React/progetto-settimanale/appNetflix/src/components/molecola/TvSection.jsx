import { Col} from "react-bootstrap";
import DropGenres from "./DropGenres";

const TvSection = () => {
	return (
    <Col lg='10' className="d-flex">
      <h1 className="h2 text-white">TV Shows</h1>
      <DropGenres />
    </Col>
			
	);
};

export default TvSection;
