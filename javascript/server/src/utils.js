

export async function readRequestBody(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
  }
  return JSON.parse(raw);
}