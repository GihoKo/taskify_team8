import { useEffect, useState } from 'react';

export default function checkCardSelectInput(errors: any, watch: any, setError: any) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errors?.person?.message) {
      setIsError(true);
    }

    if (!errors?.person?.message) {
      setIsError(false);
    }
  }, [errors.person]);

  const checkPerson = () => {
    (async () => {
      try {
        const data = {
          person: watch('person'),
        };

        if (data.person === '') {
          setIsError(true);

          return setError('person', {
            message: '사람은 필수입니다',
          });
        }

        if (data.person !== '') {
          setIsError(false);

          return setError('person', {
            message: '',
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return { isError, checkPerson };
}
