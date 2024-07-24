export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  return promise.then(() => ({ body: 'Success', status: 200 }), () => new Error(''));
}
