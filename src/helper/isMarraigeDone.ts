export const isMarriageDone = () => {
  const target = new Date('2026-03-14T12:40:00');
  const now = new Date();
  return now > target;
}
