import { ChangeEvent, useState } from "react";

export const useInput = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return { onHandleChange, state, setState };
};
