import { useEffect, useState } from 'react';

export default function CheckCardTextArea(errors: any, watch: any, setError: any) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errors?.description?.message) {
      setIsError(true);
    }

    if (!errors?.description?.message) {
      setIsError(false);
    }
  }, [errors.description]);

  const checkTextArea = () => {
    (async () => {
      try {
        const data = {
          description: watch('description'),
        };

        if (data.description === '') {
          setIsError(true);

          return setError('description', {
            message: '설명은 필수입니다',
          });
        }

        if (data.description !== '') {
          setIsError(false);

          return setError('description', {
            message: '',
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return { isError, checkTextArea };
}
