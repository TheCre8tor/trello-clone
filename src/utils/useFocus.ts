import { useRef, useEffect, RefObject } from "react";

type RefType = RefObject<HTMLInputElement>;

export const useFocus = (): RefType => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  });

  return ref;
};
