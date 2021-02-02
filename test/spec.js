const {expect} = require('chai')
const { syncAndSeed } = require('../db')
const app = require('supertest')(require('../app'))

describe('Tests',()=>{
    beforeEach(()=>syncAndSeed())
    describe('firstTest',()=>{

        it('one equals one',()=>{
            expect(1).to.equal(1)
        })
    })
    describe('Routes',()=>{
        it('shows information about the API',async()=>{
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.include('Hello World')
        })
    })
    describe('Get /api/actors',()=>{
        it('returns actors',async()=>{
            const response = await app.get('/api/actors');
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(5)
        })
    })
    
})
