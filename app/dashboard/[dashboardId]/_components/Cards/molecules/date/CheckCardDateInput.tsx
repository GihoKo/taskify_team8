import { useEffect, useState } from 'react';

export default function checkCardDateInput(
  errors: any,
  watch: any,
  setError: any,
  selectDate: any,
  defaultTimeValue: any,
) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errors?.date?.message) {
      setIsError(true);
    }

    if (!errors?.date?.message) {
      setIsError(false);
    }
  }, [errors.date]);

  const checkDate = () => {
    (async () => {
      try {
        // const data = {
        //   date: watch('date'),
        // };

        if (new Date(selectDate) <= new Date(defaultTimeValue)) {
          setIsError(true);

          return setError('date', {
            message: '과거는 선택할 수 없습니다',
          });
        }

        if (new Date(selectDate) > new Date(defaultTimeValue)) {
          setIsError(false);

          return setError('date', {
            message: '',
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return { isError, checkDate };
}
