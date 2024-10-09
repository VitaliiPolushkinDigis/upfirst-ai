export const mockStatusByPostIndex = (i: number) => {
  const divisibleByTwo = i % 2 === 0;
  const divisibleByThree = i % 3 === 0;
  const divisibleByBoth = divisibleByTwo && divisibleByThree;
  if (divisibleByBoth) {
    return "border-orange-600 bg-orange-500 py-1 px-3";
  } else if (divisibleByThree) {
    return "border-red-600 bg-red-500 py-1 px-3";
  } else if (divisibleByTwo) {
    return "border-green-600 bg-green-500 py-1 px-3";
  }
  return "border-green-600 bg-green-500 py-1 px-3";
};
