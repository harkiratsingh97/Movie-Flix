function MovieCard(props) {
	const { movie } = props;
	return (
		<>
			<div className="main">
				<div className="movie-card">
					<div className="left">
						<img src={movie.poster}></img>
					</div>
					<div className="right">
						<div className="title">{movie.title}</div>
						<div className="plot">{movie.plot}</div>
						<div className="price">Rs.{movie.price}</div>
						<div className="footer">
							<div className="rating">{movie.rating}</div>

							<div className="star-dis">
								<img
									alt="minus"
									src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
									className="str-btn"
									onClick={() => props.decStar(movie)}
								></img>

								<img
									alt="star"
									src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
									className="stars"
								></img>
								<img
									alt="plus"
									src="https://cdn-icons-png.flaticon.com/512/32/32563.png"
									className="str-btn"
									onClick={() => props.incStar(movie)}
								></img>
								<span className="starCount">{movie.star}</span>
							</div>
							{!movie.favourite && (
								<button
									className="favourite-btn"
									onClick={() => props.addOrRemoveFavourite(movie)}
								>
									Favourite
								</button>
							)}
							{movie.favourite && (
								<button
									className="unfavourite-btn"
									onClick={() => props.addOrRemoveFavourite(movie)}
								>
									Un-Favourite
								</button>
							)}
							{!movie.inCart && (
								<button
									className="cart-btn"
									onClick={() => props.addOrRemoveFromCart(movie)}
								>
									Add to cart
								</button>
							)}
							{movie.inCart && (
								<button
									className="remove-cart-btn"
									onClick={() => props.addOrRemoveFromCart(movie)}
								>
									Remove from Cart
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MovieCard;
