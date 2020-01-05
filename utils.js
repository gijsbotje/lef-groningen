export const hasEntries = object => {
  if (!object) return false;

  return Object.entries(object).length > 0;
};

export default hasEntries;
