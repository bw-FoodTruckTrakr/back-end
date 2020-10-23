const supertest = require("supertest")
const server = require("./api/server")
const db = require("./database/dbConfig")



  describe("/register", () => {
    it("should return 201 when user is succefully created", async () => {
      await db("operator")
      return supertest(server)
        .post("/api/register")
        .send({ type: 'operator', username: "userX ", "email": "email@email.com", password: "password", currentLocation: "23 abc rd" })
        .then(res => {
          expect(res.status).toBe(201)
          expect(res.body.location).toBe("23 abc rd")
        })
    })
    it('should return 500 if user is already created',  () => {
      return supertest(server)
      .post("/api/register")
      .send({ type: 'operator', username: "chefboyardee", "email": "email@email.com", password: "password", currentLocation: "abc rd" })
      .then(res => {
        expect(res.status).toBe(500)
      })
    })
  })
  
  describe('/login', () => {
    it('should return 401 upon unsuccessful login',  () => {
      return supertest(server)
      .post("/api/login")
      .send({ username: "chefboyardee", password: "wrongpass" })
      .then(res => {
        expect(res.status).toBe(401)
      })
    })
    it('should return 200 upon successful login',  () => {
      return supertest(server)
      .post("/api/login")
      .send({ username: "CarlCasper", password: "password" })
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })

  describe('/trucks', () => {
    it('get a list of trucks from the database',  () => {
      return supertest(server)
      .get("/trucks")
      .then(res => {
        expect(res.status).toBe(200)
      })  
    })
    })

  describe('/menu', () => {
    it('get a list of menu items',  () => {
      return supertest(server)
      .get("/trucks/menu")
      .send({ name: "Roccos Tacos" })
      .then(res => {
        token = res.body.token
        expect(res.status).toBe(200)
      })  
    })
  })
 
