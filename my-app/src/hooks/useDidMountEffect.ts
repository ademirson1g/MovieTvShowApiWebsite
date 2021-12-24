
import { useEffect, useRef } from "react";

const useDidMountEffect = (fn: () => any, inputs: Array<any>) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

export default useDidMountEffect

