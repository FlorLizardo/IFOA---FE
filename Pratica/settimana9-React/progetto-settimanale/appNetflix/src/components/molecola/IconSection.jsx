import { Col } from "react-bootstrap";

const IconSection = () => {
const styles = {
  iconaList: {
    height: '34px',
    width: '42px'
  }
}

	return (
		<Col lg='2' className="text-white d-flex">
			<div style={styles.iconaList} className="border border-white d-flex justify-content-center">
				<button className="bg-transparent border-0">
					<i className="fs-5 bi bi-list text-light"></i>
				</button>
			</div>
			<div style={styles.iconaList} className="border border-white d-flex justify-content-center align-items-center">
				<button className="bg-transparent border-0">
					<i className="grid bi bi-grid-fill text-light"></i>
				</button>
			</div>
		</Col>
	);
};

export default IconSection;
