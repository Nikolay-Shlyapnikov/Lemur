export const getWeeksInMonth = (year: number, month: number): number => {
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return Math.round((lastDayOfMonth + firstDayOfWeek) / 7);
}