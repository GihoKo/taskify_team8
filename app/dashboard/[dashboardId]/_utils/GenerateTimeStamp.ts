export const dateTimeFormatter = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1을 해주고, 문자열로 변환한 후 두 자리로 패딩
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}`;
  //   const formattedTimestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  console.log(formattedTimestamp); // "2024-03-23T22:36:17.891Z"

  return formattedTimestamp;
};
