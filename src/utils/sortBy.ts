export const sortBy = <T extends Record<string, any>>(array: T[], sortByFields: string[]) => {
  const sorted = [...array].sort((object1: T, object2: T) => {
    return sortByFields.reduce((comparision: number, field: string) => {
      if (object1[field] === object2[field]) {
        return comparision;
      }
      return object1[field] < object2[field] ? -1 : 1;
    }, 0);
  });
  return sorted;
};
