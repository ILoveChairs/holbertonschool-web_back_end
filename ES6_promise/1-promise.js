export default function getFullResponseFromAPI(success) {
  if (success) {
    return { status: 200, body: 'Success' };
  }
  return new Error('The fake API is not working currently');
}
