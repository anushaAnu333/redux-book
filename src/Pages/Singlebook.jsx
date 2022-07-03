import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";
const Singlebook = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const books = useSelector((state) => state.AppReducer.books);
	const [currentBook, setCurrentBook] = useState({});
	useEffect(() => {
		if (books?.length === 0) {
			dispatch(getBooks());
		}
	}, [books?.length, dispatch]);
	useEffect(() => {
		if (id) {
			const temp = books?.find((book) => book.id === Number(id));
			temp && setCurrentBook(temp);
		}
	}, [books, id]);
  console.log(currentBook)

	return (
		<div>
			<h2>{currentBook?.title}</h2>
			<div>{currentBook?.category}</div>\
      <div>{currentBook?.release_year}</div>
      <button><Link to={`/books/${currentBook.id}/edit`}>Edit</Link></button>
      
		</div>
	);
};

export default Singlebook;
