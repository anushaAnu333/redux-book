import React from "react";
import Bookscard from "./Bookscard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../Redux/AppReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Booklist = () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.AppReducer.books);
	const [SearchParams] = useSearchParams();
	const location = useLocation();

	useEffect(() => {
		if (books.length === 0 || location.search) {
			const sortBy = SearchParams.get("sortBy");
			const getBooksParams = {
				params: {
					category: SearchParams.getAll("category"),
					_sort: sortBy && "release_year",
					_order: sortBy,
				},
			};
			dispatch(getBooks(getBooksParams));
		}
	}, [location.search]);

	return (
		<div>
			{books.length > 0 &&
				books.map((singlebook) => {
					return (
						<BookscardWrapper key={singlebook.id}>
							<Link to={`/books/${singlebook.id}`}>
								{" "}
								<Bookscard bookdata={singlebook} />
							</Link>
						</BookscardWrapper>
					);
				})}
		</div>
	);
};

export default Booklist;

const BookscardWrapper = styled.div`
    border : 1px solid orange;
    padding : 15px;
  width:200px
    display:flex;
    justify-content:space-between
`;
