import { Dispatch, SetStateAction, useState } from 'react';

export default function useToggle(initialState = false): [boolean, Dispatch<SetStateAction<boolean>>, () => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = (): void => setState((prev) => !prev);

  return [state, setState, toggle];
}
