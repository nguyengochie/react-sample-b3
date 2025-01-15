export const getTitleMonth = (date) => {
    const dateTime = new Date(date);
    const month = dateTime.toLocaleString('default', { month: 'long' });
    return month
}
