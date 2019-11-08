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
    instance = new infoplus.ItemBuyerApi();
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

  describe('ItemBuyerApi', function() {
    describe('addItemBuyer', function() {
      it('should call addItemBuyer successfully', function(done) {
        //uncomment below and update the code to test addItemBuyer
        //instance.addItemBuyer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemBuyerAudit', function() {
      it('should call addItemBuyerAudit successfully', function(done) {
        //uncomment below and update the code to test addItemBuyerAudit
        //instance.addItemBuyerAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemBuyerFile', function() {
      it('should call addItemBuyerFile successfully', function(done) {
        //uncomment below and update the code to test addItemBuyerFile
        //instance.addItemBuyerFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemBuyerTag', function() {
      it('should call addItemBuyerTag successfully', function(done) {
        //uncomment below and update the code to test addItemBuyerTag
        //instance.addItemBuyerTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemBuyer', function() {
      it('should call deleteItemBuyer successfully', function(done) {
        //uncomment below and update the code to test deleteItemBuyer
        //instance.deleteItemBuyer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemBuyerTag', function() {
      it('should call deleteItemBuyerTag successfully', function(done) {
        //uncomment below and update the code to test deleteItemBuyerTag
        //instance.deleteItemBuyerTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateItemBuyerById', function() {
      it('should call getDuplicateItemBuyerById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateItemBuyerById
        //instance.getDuplicateItemBuyerById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemBuyerByFilter', function() {
      it('should call getItemBuyerByFilter successfully', function(done) {
        //uncomment below and update the code to test getItemBuyerByFilter
        //instance.getItemBuyerByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemBuyerById', function() {
      it('should call getItemBuyerById successfully', function(done) {
        //uncomment below and update the code to test getItemBuyerById
        //instance.getItemBuyerById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemBuyerTags', function() {
      it('should call getItemBuyerTags successfully', function(done) {
        //uncomment below and update the code to test getItemBuyerTags
        //instance.getItemBuyerTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemBuyer', function() {
      it('should call updateItemBuyer successfully', function(done) {
        //uncomment below and update the code to test updateItemBuyer
        //instance.updateItemBuyer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));