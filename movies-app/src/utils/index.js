export const createStudioNameMapping = (studios) => {
  return studios.reduce((acc, studio) => {
    acc[studio.id] = studio.name;
    return acc;
  }, {});
};

