import { useEffect, useState } from 'react';

// export default function useColumnTitleInput(errors: any, watch: any, setError: any) {
export default function useColumnTitleInput(errors: any) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (errors?.title?.message) {
      setIsError(true);
    }

    if (!errors?.title?.message) {
      setIsError(false);
    }
  }, [errors.title]);

  const checkTitle = () => {
    (async () => {
      try {
        // const data = {
        //   title: watch('title'),
        // };
        // if (data.title === '') {
        //   setIsError(true);
        //   return setError('title', {
        //     message: '제목은 필수입니다',
        //   });
        // }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return { isError, checkTitle };
}
