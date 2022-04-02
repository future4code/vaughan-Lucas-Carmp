export const dateFormatter = (
    array: string[],
    initial: number,
    final: number
  ): string => {
    const element = array[initial];
    array.splice(initial, 1);
    array.splice(final, 0, element);
    return array.join("-");
  };

  