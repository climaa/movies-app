const pactum= require('pactum');

it('should get a response with status code 200 on GET /movies', async () => {
  await pactum.spec()
    .get('/movies')
    .expectStatus(200)
    .expectJsonSnapshot('movies-basic');
});

it('should get a response with status code 200 on GET /movies/:id', async () => {
  await pactum.spec()
    .get('/movies/11')
    .expectStatus(200)
    .expectJsonSnapshot('movies-id-11');
});

it('should get a response with status code 400 on GET /movies/-1', async () => {
  await pactum.spec()
    .get('/movies/-1')
    .expectStatus(400)
    .expectJsonSnapshot('movies-id-invalid');
});

