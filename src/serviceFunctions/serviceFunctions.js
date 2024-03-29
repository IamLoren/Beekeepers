export const getCurrentData = () => {
  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  currentDay = currentDay < 10 ? '0' + currentDay : currentDay;
  currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
  return currentDay + '-' + currentMonth + '-' + currentYear;
};

export const convertDateToMonth = (dateString) => {
  const [, month, ,] = dateString.split('-');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthIndex = parseInt(month, 10) - 1;
  const monthName = monthNames[monthIndex];
  return `${monthName}`;
};

export const convertCalendarMonth = (monthYear) => {
  const [monthName, year] = monthYear.split(' ');
  const date = monthName.toLowerCase().trim();

  switch (date) {
    case 'january':
      return `01-01-${year}`;
    case 'february':
      return `01-02-${year}`;
    case 'march':
      return `01-03-${year}`;
    case 'april':
      return `01-04-${year}`;
    case 'may':
      return `01-05-${year}`;
    case 'june':
      return `01-06-${year}`;
    case 'july':
      return `01-07-${year}`;
    case 'august':
      return `01-08-${year}`;
    case 'september':
      return `01-09-${year}`;
    case 'october':
      return `01-10-${year}`;
    case 'november':
      return `01-11-${year}`;
    case 'december':
      return `01-12-${year}`;
    default:
      return getCurrentData();
  }
};

export const convertDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};

export const formingTodayDate = (today) => {
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};
