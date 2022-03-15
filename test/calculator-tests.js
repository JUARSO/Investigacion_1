var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var calculator = require('../calculator');

//Se hace las pruebas unitarias para la funcion de suma, en esta prueba se logra observar como el rulstado es el esparado con el funcionamiento de la suma
describe('Testing assert function: ', function() {
  describe('Check suma Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.suma(1,1);
       assert.equal(result, 2);
    });
  });
})
//Se hace las pruebas unitarias para la funcion de suma, en esta prueba se logra observar como el rulstado no es el esparado con el funcionamiento de la suma

describe('Testing assert function: ', function() {
  describe('Check suma Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.suma(3,1);
       assert.equal(result, 5);
    });
  });
})

//Se hace las pruebas unitarias para la funcion de resta, en esta prueba se logra observar como el rulstado es el esparado con el funcionamiento de la resta

describe('Testing should function: ', function() {
    describe('Check resta Function', function(){
      it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.resta(1,1);
      result.should.be.equal(0);
    })
  })
})

//Se hace las pruebas unitarias para la funcion de resta, en esta prueba se logra observar como el rulstado no es el esparado con el funcionamiento de la resta

describe('Testing should function: ', function() {
  describe('Check resta Function', function(){
    it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.resta(1,1);
      result.should.be.equal(2);
    })
  })
})

//Se hace las pruebas unitarias para la funcion de multiplicacion, en esta prueba se logra observar como el rulstado es el esparado con el funcionamiento de la multiplicacion

describe('Testing should function: ', function() {
  describe('Check multiplicacion Function', function(){
    it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.multiplicacion(1,4);
      result.should.be.equal(4);
    })
  })
})

//Se hace las pruebas unitarias para la funcion de multiplicacion, en esta prueba se logra observar como el rulstado no es el esparado con el funcionamiento de la multiplicacion

describe('Testing should function: ', function() {
  describe('Check multiplicacion Function', function(){
    it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.multiplicacion(3,1);
      result.should.be.equal(2);
    })
  })
})


//Se hace las pruebas unitarias para la funcion de division, en esta prueba se logra observar como el rulstado no es el esparado con el funcionamiento de la division

describe('Testing should function: ', function() {
  describe('Check division Function', function(){
    it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.division(4,2);
      result.should.be.equal(2);
    })
  })
})

//Se hace las pruebas unitarias para la funcion de division, en esta prueba se logra observar como el rulstado no es el esparado con el funcionamiento de la division

describe('Testing should function: ', function() {
  describe('Check division Function', function(){
    it('Check the returned value using : result.should.be.equal(value): ', function() {
      result = calculator.division(4,1);
      result.should.be.equal(2);
    })
  })
})



