export const formatIndex = (index: number) => {
  return `#${index.toLocaleString(undefined, {
    minimumIntegerDigits: 3,
  })}`;
};
