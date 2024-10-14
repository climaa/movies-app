const pactum= require('pactum');

it('should get a response with status code 200 on GET /transfer', async () => {
  await pactum.spec()
    .post('/transfer')
    .withBody({
        originStudioId: 1,
        movieId: "12",
        destinationStudioId: 3
      })
    .expectStatus(200)
    .expectJsonSnapshot('transfer');
});
