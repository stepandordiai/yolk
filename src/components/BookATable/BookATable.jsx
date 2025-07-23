import "./BookATable.scss";

const BookATable = () => {
	return (
		<>
			<div className="book-a-table">
				<p className="book-a-table__title">Book a Table</p>
				<form action="">
					<div className="input-container">
						<label htmlFor="full-name">Full name</label>
						<input id="full-name" type="text" />
					</div>
					<div className="input-container">
						<label htmlFor="phone-number">Phone number</label>
						<input id="phone-number" type="tel" />
					</div>
					<div className="input-container">
						<label htmlFor="date-to-come">Date to come</label>
						<input id="date-to-come" type="date" />
					</div>
					<div className="input-container">
						<label htmlFor="time-to-come">Time to come</label>
						<input id="time-to-come" type="time" />
					</div>
					<div className="input-container">
						<label htmlFor="number-of-guests">Number of guests</label>
						<input id="number-of-guests" type="number" />
					</div>
					<div className="input-container">
						<label htmlFor="notes">Notes</label>
						<textarea id="notes" type="number" />
					</div>
				</form>
			</div>
		</>
	);
};

export default BookATable;
