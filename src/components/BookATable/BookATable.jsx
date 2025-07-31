import dayjs from "dayjs";
import "./BookATable.scss";

const BookATable = () => {
	// dayjs external library
	const date = dayjs();
	const formatDate = date.format("YYYY-MM-DD");
	const hours = date.hour();
	const formatHours = hours < 10 ? "0" + hours : hours;
	const minutes = date.minute();
	const formatMinutes = minutes < 10 ? "0" + minutes : minutes;

	const closeBookATable = () => {
		document.querySelector(".book-a-table").style.display = "none";
	};

	return (
		<div className="book-a-table">
			<div className="book-a-table__header">
				<button onClick={closeBookATable}>Close</button>
				<p className="book-a-table__title">Book a Table</p>
			</div>
			<form
				className="book-a-table__form"
				action="mailto:stepandordiai@gmail.com"
				encType="text/plain"
				method="post"
			>
				<div className="input-container">
					<label htmlFor="full-name">Full name</label>
					<input id="full-name" type="text" name="name" />
				</div>
				<div className="input-container">
					<label htmlFor="phone-number">Phone number</label>
					<input id="phone-number" type="tel" name="tel" />
				</div>
				<div className="input-container">
					<label htmlFor="date-to-come">Date to come</label>
					<input
						className="input"
						id="date-to-come"
						defaultValue={formatDate}
						type="date"
						name="date"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="time-to-come">Time to come</label>
					<input
						className="input"
						id="time-to-come"
						defaultValue={`${formatHours}:${formatMinutes}`}
						type="time"
						name="time"
					/>
				</div>
				<div className="input-container">
					<label htmlFor="number-of-guests">Number of guests</label>
					<input id="number-of-guests" type="number" name="numberOfGuests" />
				</div>
				<div className="input-container text-area-input-container">
					<label htmlFor="notes">Notes</label>
					<textarea id="notes" type="number" name="notes" />
				</div>
				<button className="book-a-table__form-btn" type="submit">
					Reserve
				</button>
			</form>
		</div>
	);
};

export default BookATable;
