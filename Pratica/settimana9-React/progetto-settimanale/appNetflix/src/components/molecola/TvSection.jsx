import { Col} from "react-bootstrap";
import DropGenres from "../atomo/DropGenres";

const TitleSection = ({title}) => {

	return (
    <Col lg='10' className="d-flex">
      <h1 className="h2 text-white">{title}</h1>
      <DropGenres />
    </Col>
			
	);
};

export default TitleSection;
