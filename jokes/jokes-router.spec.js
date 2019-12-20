const request = require("supertest")

const server = require("../api/server")




describe("server.js", function() {
    describe("get jokes", function() {
        it("401 should return no access", function() {
           return request(server)
                .get("/api/jokes")
                
                .then(res => {
                    expect(res.status).toBe(401)
                });
            })

        })

        it("trying to get jokes", function() {
            const user = { username: "test", password: "test" }
            return request(server)
                .post('/api/auth/login')
                .send(user)
                .then( res => {
                    const token = res.body.token

                    return request(server)
                        .get("/api/jokes")
                        .set("Authorization", token)
                        .then(res => {
                            expect(res.status).toBe(200);

                        })

                })
        })

})  