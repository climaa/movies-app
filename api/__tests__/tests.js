const pactum= require('pactum');

pactum.request.setBaseUrl("http://localhost:3000");
pactum.settings.setSnapshotDirectoryPath("__snapshots__");

it('should get a response with status code 200 on GET /', async () => {
  await pactum.spec()
    .get('/')
    .expectStatus(200)
    .expectJsonSnapshot('health-check');
});
