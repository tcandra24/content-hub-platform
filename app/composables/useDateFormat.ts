export function useDateFormat() {
  const formatMonthYear = (date: Date | string | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(new Date(date));
  };

  const formatFull = (date: Date | string | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
  };

  return {
    formatMonthYear,
    formatFull,
  };
}
