/**
 *
 * @example
 * ```ts
 * console.log(formatDateShorter('2024-03-12T09:52:06.381Z')); // '24.03.12'
 * ```
 *
 */
export const formatDateShorter = (date: string | Date) => {
  const processedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const formattedDate = Intl.DateTimeFormat('ko', options).format(processedDate).replace(/\s/g, '');

  return formattedDate[formattedDate.length - 1] === '.' ? formattedDate.slice(0, -1) : formattedDate;
};
