import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import MySingleMovie from "./MySingleMovie";
import { useState, useEffect } from "react";
import SpinnerWait from "../atomo/SpinnerWait";
import AlertError from "../atomo/alertError";

const Gallery = ({ saga }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const myFetch = async () => {
		try {
			setIsLoading(true);
			const resp = await fetch(
				"http://www.omdbapi.com/?i=tt3896198&apikey=87f504eb&s=" + saga
			);
			if (resp.ok) {
				let data = await resp.json();
				setMovies(data.Search);
				setIsLoading(false);
			} else {
				console.log("error");
				setIsLoading(false);
				setIsError(true);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setIsError(true);
		}
	};

	useEffect(() => {
		myFetch();
	}, []);

	const styles = {
		div: {
			width: "14rem",
			height: "18rem",
			transition: "0.4s ease",
		}
	};

	return (
		<Row className="px-5">
			<h3 className="text-white pt-5 pb-2 h4">{saga}</h3>
			<Col>
				{isLoading && <SpinnerWait />}
				{isError && <AlertError />}
				<Carousel>
					<Carousel.Item>
						<div style={styles.div} className="d-flex gap-2">
							{movies.slice(0, 7).map((movie) => (
								<MySingleMovie movie={movie} key={movie.imdbID} />
							))}
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={styles.div} className="d-flex gap-2">
							{movies.slice(0, 7).map((movie) => (
								<MySingleMovie movie={movie} key={movie.imdbID} />
							))}
						</div>
					</Carousel.Item>
				</Carousel>
			</Col>
		</Row>
	);
};

export default Gallery;
