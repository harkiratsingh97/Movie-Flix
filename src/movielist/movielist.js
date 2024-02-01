import React from "react";
import MovieCard from "../moviecard/moviecard";

export default class MovieList extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: [
				{
					poster:
						"https://th.bing.com/th/id/R.6643a6baa39636a28362430a7b661e02?rik=zlZTpa7FmZFvbg&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2018%2f03%2fAvengers-Infinity-War-new-poster.jpg&ehk=jsSvmXCEEpifurzDZH1G%2bp2T6%2f1ubqZd%2bsC4lLrcbmo%3d&risl=&pid=ImgRaw&r=0",
					title: "Avengers",
					plot: "Fictional movie",
					price: 500,
					rating: 9.5,
					starCount: 0,
					favourite: false,
					inCart: true,
					star: 0,
				},
				{
					poster:
						"https://th.bing.com/th/id/R.6643a6baa39636a28362430a7b661e02?rik=zlZTpa7FmZFvbg&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2018%2f03%2fAvengers-Infinity-War-new-poster.jpg&ehk=jsSvmXCEEpifurzDZH1G%2bp2T6%2f1ubqZd%2bsC4lLrcbmo%3d&risl=&pid=ImgRaw&r=0",
					title: "Avengers",
					plot: "Fictional movie",
					price: 500,
					rating: 9.5,
					starCount: 0,
					favourite: false,
					inCart: false,
					star: 0,
				},
				{
					poster:
						"https://th.bing.com/th/id/R.6643a6baa39636a28362430a7b661e02?rik=zlZTpa7FmZFvbg&riu=http%3a%2f%2fwww.blackfilm.com%2fread%2fwp-content%2fuploads%2f2018%2f03%2fAvengers-Infinity-War-new-poster.jpg&ehk=jsSvmXCEEpifurzDZH1G%2bp2T6%2f1ubqZd%2bsC4lLrcbmo%3d&risl=&pid=ImgRaw&r=0",
					title: "Avengers",
					plot: "Fictional movie",
					price: 500,
					rating: 9.5,
					starCount: 0,
					favourite: false,
					inCart: false,
					star: 0,
				},
			],
		};
	}
	addOrRemoveFavourite = (movie) => {
		const { movies } = this.state;
		const index = this.state.movies.indexOf(movie);
		movies[index].favourite = !movies[index].favourite;
		this.setState({ movies: movies });
	};
	addOrRemoveFromCart = (movie) => {
		const { movies } = this.state;
		const index = this.state.movies.indexOf(movie);
		movies[index].inCart = !movies[index].inCart;
		this.setState({ movies: movies });
	};
	incStar = (movie) => {
		const { movies } = this.state;
		const index = this.state.movies.indexOf(movie);
		if (movies[index].star >= 5) {
			return;
		}
		movies[index].star = movies[index].star + 1;
		this.setState({ movies: movies });
	};
	decStar = (movie) => {
		const { movies } = this.state;
		const index = this.state.movies.indexOf(movie);
		if (movies[index].star <= 0) {
			return;
		}
		movies[index].star--;
		this.setState({ movies: movies });
	};
	render() {
		return (
			<>
				{this.state.movies.map((movie, index) => (
					<MovieCard
						key={index}
						movie={movie}
						addOrRemoveFavourite={this.addOrRemoveFavourite}
						addOrRemoveFromCart={this.addOrRemoveFromCart}
						incStar={this.incStar}
                        decStar={this.decStar}
					></MovieCard>
				))}
			</>
		);
	}
}
