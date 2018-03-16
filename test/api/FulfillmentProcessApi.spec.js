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
 * Swagger Codegen version: 2.3.0
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
    instance = new infoplus.FulfillmentProcessApi();
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

  describe('FulfillmentProcessApi', function() {
    describe('addFulfillmentProcessAudit', function() {
      it('should call addFulfillmentProcessAudit successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentProcessAudit
        //instance.addFulfillmentProcessAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addFulfillmentProcessTag', function() {
      it('should call addFulfillmentProcessTag successfully', function(done) {
        //uncomment below and update the code to test addFulfillmentProcessTag
        //instance.addFulfillmentProcessTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFulfillmentProcessTag', function() {
      it('should call deleteFulfillmentProcessTag successfully', function(done) {
        //uncomment below and update the code to test deleteFulfillmentProcessTag
        //instance.deleteFulfillmentProcessTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateFulfillmentProcessById', function() {
      it('should call getDuplicateFulfillmentProcessById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateFulfillmentProcessById
        //instance.getDuplicateFulfillmentProcessById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessByFilter', function() {
      it('should call getFulfillmentProcessByFilter successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessByFilter
        //instance.getFulfillmentProcessByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessById', function() {
      it('should call getFulfillmentProcessById successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessById
        //instance.getFulfillmentProcessById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentProcessTags', function() {
      it('should call getFulfillmentProcessTags successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentProcessTags
        //instance.getFulfillmentProcessTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFulfillmentProcessCustomFields', function() {
      it('should call updateFulfillmentProcessCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateFulfillmentProcessCustomFields
        //instance.updateFulfillmentProcessCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));