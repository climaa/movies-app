const pactum = require("pactum");

it("should get a response with status code 200 on POST /login", async () => {
  await pactum
    .spec()
    .post("/login")
    .withBody({
      username: "jhon.doe@domain.com",
      password: "123456",
    })
    .expectStatus(200)
    .expectJsonSnapshot("login-success");
});

it("should get a response with status code 401 on POST /login", async () => {
    await pactum
      .spec()
      .post("/login")
      .withBody({
        username: "jhon.doe@domain.com",
        password: "wrongPassword!",
      })
      .expectStatus(401)
      .expectJsonSnapshot("login-failed");
  });

  it("should get a response with status code 400 on POST /login", async () => {
    await pactum
      .spec()
      .post("/login")
      .withBody({
        username: "",
        password: "",
      })
      .expectStatus(400)
      .expectJsonSnapshot("login-failed-empty");
  });
