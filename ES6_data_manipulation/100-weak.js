export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let len = weakMap.get(endpoint);
  if (len === undefined) {
    len = 0;
  }
  if (len >= 4) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, len + 1);
}
