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
    instance = new infoplus.WorkApi();
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

  describe('WorkApi', function() {
    describe('addWorkAudit', function() {
      it('should call addWorkAudit successfully', function(done) {
        //uncomment below and update the code to test addWorkAudit
        //instance.addWorkAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWorkFile', function() {
      it('should call addWorkFile successfully', function(done) {
        //uncomment below and update the code to test addWorkFile
        //instance.addWorkFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWorkFileByURL', function() {
      it('should call addWorkFileByURL successfully', function(done) {
        //uncomment below and update the code to test addWorkFileByURL
        //instance.addWorkFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addWorkTag', function() {
      it('should call addWorkTag successfully', function(done) {
        //uncomment below and update the code to test addWorkTag
        //instance.addWorkTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkFile', function() {
      it('should call deleteWorkFile successfully', function(done) {
        //uncomment below and update the code to test deleteWorkFile
        //instance.deleteWorkFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkTag', function() {
      it('should call deleteWorkTag successfully', function(done) {
        //uncomment below and update the code to test deleteWorkTag
        //instance.deleteWorkTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateWorkById', function() {
      it('should call getDuplicateWorkById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateWorkById
        //instance.getDuplicateWorkById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkByFilter', function() {
      it('should call getWorkByFilter successfully', function(done) {
        //uncomment below and update the code to test getWorkByFilter
        //instance.getWorkByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkById', function() {
      it('should call getWorkById successfully', function(done) {
        //uncomment below and update the code to test getWorkById
        //instance.getWorkById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkFiles', function() {
      it('should call getWorkFiles successfully', function(done) {
        //uncomment below and update the code to test getWorkFiles
        //instance.getWorkFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkTags', function() {
      it('should call getWorkTags successfully', function(done) {
        //uncomment below and update the code to test getWorkTags
        //instance.getWorkTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWork', function() {
      it('should call updateWork successfully', function(done) {
        //uncomment below and update the code to test updateWork
        //instance.updateWork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkCustomFields', function() {
      it('should call updateWorkCustomFields successfully', function(done) {
        //uncomment below and update the code to test updateWorkCustomFields
        //instance.updateWorkCustomFields(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
