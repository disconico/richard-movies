const formatDate = (inputDate) => {
  const dateObj = new Date(inputDate);

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-UK', { month: 'long' });
  const year = dateObj.getFullYear();

  return `${month} ${year}`;
};

export default formatDate;
