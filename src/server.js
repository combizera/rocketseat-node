import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
  const { url, method } = request;

  if(method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Ygor',
      email: 'ygor@combi.com',
    })

    return response.end(`User ${users[0].name} created`);
  }

  console.log(method, url);

  return response.end('Hello World');
})

server.listen(3333);