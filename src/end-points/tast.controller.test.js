process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();


chai.use(chaiHttp);
describe('Tasks', ()=> {
    let id;
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
        it('it should Save and Retrieve all the tasks', (done) => {
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
                    id = res.body[0].id
                    done();
                })
        })
    })

    
    describe('/Update Tasks', () => {
        it('it should Update the tasks', (done) => {
            chai.request(server)
            .patch(`/api/tasks/${id}`)
            .send({selected: false})
            .end((err, res)=> {
                res.should.have.status(200);
                
                chai.request(server)
                .get('/api/tasks')
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    res.body.filter(item=> item.id === id)[0].selected.should.be.eql(false)
                    done();
                })
            })
        })
    })
});