export function formatDate(date: Date, format: string): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const day: number = date.getDate();

  const monthString: string = month < 10 ? String(month) : String(month);
  const dayString: string = day < 10 ? String(day) : String(day);

  return format
    .replace("yyyy", year.toString())
    .replace("MM", monthString)
    .replace("dd", dayString);
}
