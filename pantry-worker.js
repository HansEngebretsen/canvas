export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 1. Get the 'basket' name from the end of your frontend request path
    const basketName = url.pathname.split('/').pop();
    
    // 2. Construct the real Pantry URL using your hidden Secret
    const pantryUrl = `getpantry.cloud{env.PANTRY_ID}/basket/${basketName}`;

    // 3. Forward the request (GET, PUT, etc.) with the same body and headers
    const modifiedRequest = new Request(pantryUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    // 4. Return the response back to your frontend
    return await fetch(modifiedRequest);
  }