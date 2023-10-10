function formatISODate(isoDateString) {
    if (!isoDateString) {
      return "";
    }

    const dateFromISO = new Date(isoDateString);
    const year = dateFromISO.getFullYear();
    const month = String(dateFromISO.getMonth() + 1).padStart(2, "0");
    const day = String(dateFromISO.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export default formatISODate; 