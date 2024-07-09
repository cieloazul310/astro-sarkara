function withinPages(lastPage: number) {
  return (value: number) => Math.min(Math.max(1, value), lastPage);
}
function getStartValue(
  currentPage: number,
  lastPage: number,
  neighbors: number,
) {
  if (currentPage - neighbors < 2) return 2;
  if (currentPage + neighbors > lastPage - 1)
    return Math.max(lastPage - (neighbors * 2 + 1), 2);
  return currentPage - neighbors;
}

function createNeighbors(
  currentPage: number,
  lastPage: number,
  neighbors: number,
) {
  const within = withinPages(lastPage);
  const startValue = getStartValue(currentPage, lastPage, neighbors);

  return Array.from({ length: neighbors * 2 + 1 }, (_, i) =>
    within(startValue + i),
  );
}

export function getPaginationValue(
  currentPage: number,
  lastPage: number,
  { neighbors }: { neighbors: number } = {
    neighbors: 2,
  },
) {
  return Array.from(
    new Set([
      1,
      Math.max(Math.min(10, currentPage - neighbors), 1),
      ...createNeighbors(currentPage, lastPage, neighbors),
      Math.min(
        Math.max(10 * Math.ceil((lastPage - 10) / 10), currentPage + neighbors),
        lastPage,
      ),
      lastPage,
    ]),
  ).sort((a, b) => a - b);
}

export function getPagination(
  currentPage: number,
  lastPage: number,
  { neighbors }: { neighbors: number } = {
    neighbors: 2,
  },
) {
  const values = getPaginationValue(currentPage, lastPage, { neighbors });

  return values.map((value) => ({
    value,
    optional: ![
      1,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      lastPage,
    ].includes(value),
  }));
}
