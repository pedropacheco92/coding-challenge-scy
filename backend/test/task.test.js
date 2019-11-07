const chai = require('chai');
const should = chai.should();
const assert = chai.assert;

const { TaskService } = require('../dist/services/TaskService')
console.log(new TaskService().create)

describe('/GET test', () => {
    it('Test /GET', (done) => {
            assert.isTrue(true);
            done();
    });
});
