/**
 * Infoplus API
 * Infoplus API.
 *
 * OpenAPI spec version: beta
 * Contact: api@infopluscommerce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.infoplus);
  }
}(this, function(expect, infoplus) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new infoplus.CartLocationApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CartLocationApi', function() {
    describe('addCartLocationAudit', function() {
      it('should call addCartLocationAudit successfully', function(done) {
        //uncomment below and update the code to test addCartLocationAudit
        //instance.addCartLocationAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addCartLocationTag', function() {
      it('should call addCartLocationTag successfully', function(done) {
        //uncomment below and update the code to test addCartLocationTag
        //instance.addCartLocationTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartLocationTag', function() {
      it('should call deleteCartLocationTag successfully', function(done) {
        //uncomment below and update the code to test deleteCartLocationTag
        //instance.deleteCartLocationTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartLocationByFilter', function() {
      it('should call getCartLocationByFilter successfully', function(done) {
        //uncomment below and update the code to test getCartLocationByFilter
        //instance.getCartLocationByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartLocationById', function() {
      it('should call getCartLocationById successfully', function(done) {
        //uncomment below and update the code to test getCartLocationById
        //instance.getCartLocationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartLocationTags', function() {
      it('should call getCartLocationTags successfully', function(done) {
        //uncomment below and update the code to test getCartLocationTags
        //instance.getCartLocationTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateCartLocationById', function() {
      it('should call getDuplicateCartLocationById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateCartLocationById
        //instance.getDuplicateCartLocationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));