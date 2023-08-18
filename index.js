
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btn = document.querySelector('button');
const output = document.querySelector('output');
let maxDayNumber = 31;

year.addEventListener('input', handleYearInput);
month.addEventListener('input', handleMonthInput);
day.addEventListener('input', handleDayInput);
btn.addEventListener('click', handleClick);

function handleYearInput() {
	year.value = parseInt(year.value);
	if (year.value > 9999) year.value = 9999;
	if (year.value < 1) year.value = '';
	handleMaxDayNumber();
	toggleBtn();
}

function handleMonthInput() {
	month.value = parseInt(month.value);
	if (month.value > 12) month.value = 12;
	if (month.value <= 0) month.value = '';
	handleMaxDayNumber();
	toggleBtn();
}

function handleDayInput() {
	if (day.value > maxDayNumber) day.value = maxDayNumber;
	if (day.value <= 0) day.value = '';
	toggleBtn();
}

function handleMaxDayNumber() {
	setMaxDayNumber();
	if (maxDayNumber < day.value) day.value = maxDayNumber;
}

function toggleBtn() {
	if (!year.value || !month.value || !day.value) {
		btn.disabled = true;
		output.value = '';
	} else {
		btn.disabled = false;
	}
}

function isLeapYear(year) {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) return true;
			return false;
		}
		return true;
	}
	return false;
}

function setMaxDayNumber() {
	switch (parseInt(month.value)) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			maxDayNumber = 31;
			day.max = maxDayNumber;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			maxDayNumber = 30;
			day.max = maxDayNumber;
			break;
		case 2:
			if (isLeapYear(year.value)) {
				maxDayNumber = 29;
				day.max = maxDayNumber;
			} else {
				maxDayNumber = 28;
				day.max = maxDayNumber;
			}
	}
}

function handleClick() {
	const weekDayNumber = new Date(year.value, month.value - 1, day.value).getDay();
	switch (weekDayNumber) {
		case 0:
			output.value = 'Domingo, día no laborable';
			break;
		case 1:
			output.value = 'Lunes, día laborable';
			break;
		case 2:
			output.value = 'Martes, día laborable';
			break;
		case 3:
			output.value = 'Miércoles, día laborable';
			break;
		case 4:
			output.value = 'Jueves, día laborable';
			break;
		case 5:
			output.value = 'Viernes, día laborable';
			break;
		case 6:
			output.value = 'Sábado, día no laborable';
			break;
	}
}