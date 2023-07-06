var assert = require('assert');
var TestRepo = new (require('./tasks.repo'))('tests')

beforeEach(async() => {
  await TestRepo.deleteAllTasks()
  return
})

describe('TaskRepo', function () {
  describe('#getAllTask()', function () {
    it('should return {} when the value is not present', async () =>  {
      const data = await TestRepo.getTasks();
      assert.equal(Object.keys(data), 0);
    });
  });
});

describe('TaskRepo', function () {
  describe('#saveData()', function () {
    it('should return [] when the value is not present', async () =>  {
      // await TestRepo.saveATask({text: 'Test 1', selected: false})
      const data = await TestRepo.getTasks();
      assert.equal(Object.keys(data), 0);
    });
    it('should return data after save', async () =>  {
      await TestRepo.saveATask({text: 'Test 1', selected: false})
      const data = await TestRepo.getTasks();
      const keys = Object.keys(data);
      assert.equal(keys.length, 1);
      assert.equal(data[keys[0]].text === 'Test 1', true);
      assert.equal(data[keys[0]].selected, false);
    });
  });
});


describe('TaskRepo', function () {
  describe('#deleteAll()', function () {
    it('should return [] when the value is not present', async () =>  {
      await TestRepo.deleteAllTasks();
      const data = await TestRepo.getTasks();
      const keys = Object.keys(data);
      assert.equal(keys.length, 0);
    });
  });
});