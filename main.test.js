const add = require('./main');

test('should output 2+3=5',()=>{
   const testtext = add(2,3);
   expect(testtext).toBe(5);
});
