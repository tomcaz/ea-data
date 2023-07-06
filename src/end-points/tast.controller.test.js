process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Tasks', ()=> {
    describe('/DELETE Tasks', ()=> {
        it('it should delete all the tasks', (done) => {
            chai.request(server)
                .delete('/api/tasks')
                .end((err, res)=> {
                    res.should.have.status(200);
                })
            chai.request(server)
                .get('/api/tasks')
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                })
        })
    })
    describe('/GET Tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                })
        })
    })
    
    describe('/Save Tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
            .post('/api/tasks')
            .send({text: 'test 1', selected: true})
            .end((err, res)=> {
                res.should.have.status(200);
            })
            chai.request(server)
                .get('/api/tasks')
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                })
        })
    })
});