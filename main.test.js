const {add,sub} = require('./main');

test('should output 2+3=5',()=>{
   const testtext = add(2,3);
   expect(testtext).toBe(5);
});

test('should output 3-2=1',()=>{
   const testtext = sub(3,2);
   expect(testtext).toBe(1);
});