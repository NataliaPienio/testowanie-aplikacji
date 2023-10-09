const test = require('node:test');
const assert = require('assert');

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
  
    if (b > a) {
      var temp = a;
      a = b;
      b = temp; 
    }
  
    while (true) {
      a %= b;
      if (a === 0) { return b; }
      b %= a;
      if (b === 0) { return a; }
    }
  }

  test('testing GCD',(t)=>{

    let a = 10;
    let b = 20;
    let expectedResult = 10;

    let result = gcd(a,b);

    assert.strictEqual(result, expectedResult);
  });

  test.describe("testing gcd2", () =>{
    test.beforeEach(() => { console.log("Starting a test: ")});
    test.after(() => {console.log("All tests finished")});
    test.it('should work', () =>{
      let a = 10;
      let b = 20;
      let expectedResult = 10;

      let result = gcd(a,b);
      assert.strictEqual(result, expectedResult);
    });
    test.it('should work', () =>{
      let a = 60;
      let b = 45;
      let expectedResult = 15;

      let result = gcd(a,b);
      assert.strictEqual(result, expectedResult);
    });
    test.it('should work', () =>{
      let a = 10;
      let b = 20;
      let expectedResult = 20;

      let result = gcd(a,b);
      assert.notEqual(result, expectedResult);
    });
  })

 function potega(a,b){
    let x=a;
     while(b>1){
        a=a*x;
        b--;
     }
     return a;
 }
 test('testing potega',(t)=>{

    let a = 2;
    let b = 10;
    let expectedResult2 = 1024;

    let result2 = potega(a,b);

    assert.strictEqual(result2, expectedResult2);
  });