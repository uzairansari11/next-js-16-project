## Client Component Rendering 

- client component pre-render on server to create a static shell and then hydrated to client side.

- This means that everything within the  client component that doesn't require interactivity or isn't  dependent on browser is rendered on the server.

- The code  or parts that rely on the browser or require interactivity are left as placeholder during server-side-pre-rendering.

- When this reaches the client, the browser render the client components and fills in the placeholders left by the server.

