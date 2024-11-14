export function stripYear(dateString) {
    // Split the date by hyphens
    const [, month, day] = dateString.split("-");
    // Return the date without the year
    return `${month}/${day}`;
  }