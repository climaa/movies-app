const { createStudioNameMapping } = require('./index');

describe('createStudioNameMapping', () => {
  it('should return an empty object when given an empty array', () => {
    const studios = [];
    const result = createStudioNameMapping(studios);
    expect(result).toEqual({});
  });

  it('should map a single studio correctly', () => {
    const studios = [{ id: 1, name: 'Studio X' }];
    const result = createStudioNameMapping(studios);
    expect(result).toEqual({ 1: 'Studio X' });
  });

  it('should map multiple studios correctly', () => {
    const studios = [
      { id: 1, name: 'Studio X' },
      { id: 2, name: 'Pixar' },
      { id: 3, name: 'DreamWorks' }
    ];
    const result = createStudioNameMapping(studios);
    expect(result).toEqual({
      1: 'Studio X',
      2: 'Pixar',
      3: 'DreamWorks'
    });
  });
});