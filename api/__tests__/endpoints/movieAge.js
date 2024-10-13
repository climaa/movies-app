const pactum= require('pactum');

it('should get a response with status code 200 on GET /moviesAge', async () => {
  await pactum.spec()
    .get('/movieAge')
    .expectStatus(200)
    .expectJsonSnapshot('movies-age-basic');
});


