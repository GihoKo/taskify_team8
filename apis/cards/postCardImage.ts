import { axiosToken } from '@apis/instance/axiosToken';

export const postCreateCardImage = async (columnId: number, image: FormData) => {
  const response = await axiosToken.post(`/columns/${columnId}/card-image`, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
