export function populationSort(data) {
  return data.sort((a, b) => b.population - a.population);
}
export function areaSort(data) {
  return data.sort((a, b) => b.area - a.area);
}
export function alphabeticalSort(data) {
  console.log('');
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}
