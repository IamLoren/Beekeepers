export const convertCalendarMonth = (monthYear) => {
  const [monthName, year] = monthYear.split(' ');
  const date = monthName.toLowerCase().trim();
  console.log(date)
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
      return 'Invalid month name';
  }
};

export const convertDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};
