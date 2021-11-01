/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();

  useEffect(() => {
    changeBackgroundMode(darkMode);
  }, [darkMode]);

  return StoryFn();
};

const changeBackgroundMode = (darkMode) => {
  const rootElement = document.documentElement;
  if (darkMode) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }
};
