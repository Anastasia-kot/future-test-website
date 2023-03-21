export const addSeparator = (
  arr: string[],
  separator: string = ","
): string[] =>
  arr.map((item, index, array) => {
    return item + ((index < arr.length - 1) ? separator + ' ': "")
  });
      

