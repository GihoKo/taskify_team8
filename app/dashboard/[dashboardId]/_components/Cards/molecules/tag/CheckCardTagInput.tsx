import { useEffect, useState } from 'react';

export default function CheckCardTagInput(errors: any, watch: any, setError: any) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errors?.tag?.message) {
      setIsError(true);
    }

    if (!errors?.tag?.message) {
      setIsError(false);
    }
  }, [errors.tag]);

  const checkTag = () => {
    (async () => {
      try {
        const data = {
          tag: watch('tag'),
        };

        if (data.tag === '') {
          setIsError(true);

          return setError('tag', {
            message: '',
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return { isError, checkTag };
}
