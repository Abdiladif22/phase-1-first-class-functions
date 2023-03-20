function receivesAFunction() {  }  function receivesAFunction(callback) {
    const spy = ("receives a function and calls it");
    callback(spy);  }  receivesAFunction(spy);//    function returnsANamedFunction(){//   }
  function returnsANamedFunction(){    return function abdi () {    }
}  function returnsAnAnonymousFunction(){
    return function() {    }
  }