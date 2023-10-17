const request = require("supertest");
const {app,server} = require("../index");
const expect = require("chai").expect;

describe("API Integration Tests",()=>{

    it("POST /api/hex-to-rgb", done=>{
        request(app)
            .post('/api/hex-to-rgb')
            .send({hex:"#FF5733"})
            .expect(200)
            .end((err,res)=>{
                if(err) return done(err);
                const expectedResponse = {rgb:{r:255,g:87,b:51}};
                expect(res.body).to.deep.equal(expectedResponse);
                done();
            });
    });

    after(done => {
        server.close(done);
    });

});