const pactum= require('pactum');

it('should get a response with status code 200 on GET /movies', async () => {
  await pactum.spec()
    .get('/movies')
    .expectStatus(200)
    .expectJsonSnapshot('movies-basic');
});
