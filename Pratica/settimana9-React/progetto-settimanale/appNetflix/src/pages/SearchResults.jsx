import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MySingleMovie from "../components/molecola/MySingleMovie";

const SearchResults = () => {
	const styles = {
		div: {
			display: "flex",
			flexWrap: "wrap",
      gap: '2rem',
      justifyContent: 'center'
		},
		img: {
			width: "13rem",
			height: "17rem",
		},
	};

	const location = useLocation();
	const searchTerms = new URLSearchParams(location.search).get("cerca");

	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([]);

	const fetchData = async () => {
		const resp = await fetch(
			"http://www.omdbapi.com/?i=tt3896198&apikey=87f504eb&s=" + search
		);
		const data = await resp.json();
		setMovies(data.Search);
	};

	useEffect(() => {
		if (searchTerms?.length > 2) 
    setSearch(searchTerms);
	}, [searchTerms]);

	useEffect(() => {
		if (search?.length > 2) {
			fetchData();
		} else if (search === null || search === ""){
      fetchData();
    }
	}, [search]);


	return (
		<>
			<div>
				<h1 className="h5 ps-5 py-3 text-white-50">Risultati della ricerca per '{searchTerms}'</h1>
				{/* <h2 className="h5 p-5 text-white-50">{search.toUpperCase()}</h2> */}
				<div style={styles.div}>
					{movies?.length > 0 &&
						movies.map((movie) => (
							<img
								style={styles.img}
								key={movie.imdbID}
								src={movie.Poster}
								alt={movie.Title}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default SearchResults;
