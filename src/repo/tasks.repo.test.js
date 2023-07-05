var assert = require('assert');
var TestRepo = new (require('./tasks.repo'))('tests')
before(async() => {
  await TestRepo.deleteAll()
  return
})

describe('TaskRepo', function () {
  describe('#getAllTask()', function () {
    it('should return [] when the value is not present', async () =>  {
      const data = await TestRepo.getTasks();
      assert.equal(data.length, 0);
    });
  });
});

describe('TaskRepo', function () {
  describe('#saveData()', function () {
    it('should return [] when the value is not present', async () =>  {
      const data = await TestRepo.getTasks();
      assert.equal(data.length, 0);
    });
  });
});