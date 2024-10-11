const pactum= require('pactum');

it('should get a response with status code 200 on GET /studios', async () => {
  await pactum.spec()
    .get('/studios')
    .expectStatus(200)
    .expectJsonSnapshot('studios-basic');
});
