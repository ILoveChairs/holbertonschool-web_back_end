export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  return promise.then(() => ({ body: 'success', status: 200 }), () => new Error(''));
}
