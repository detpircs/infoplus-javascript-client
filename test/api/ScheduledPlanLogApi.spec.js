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
    instance = new infoplus.ScheduledPlanLogApi();
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

  describe('ScheduledPlanLogApi', function() {
    describe('addScheduledPlanLogAudit', function() {
      it('should call addScheduledPlanLogAudit successfully', function(done) {
        //uncomment below and update the code to test addScheduledPlanLogAudit
        //instance.addScheduledPlanLogAudit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addScheduledPlanLogFile', function() {
      it('should call addScheduledPlanLogFile successfully', function(done) {
        //uncomment below and update the code to test addScheduledPlanLogFile
        //instance.addScheduledPlanLogFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addScheduledPlanLogFileByURL', function() {
      it('should call addScheduledPlanLogFileByURL successfully', function(done) {
        //uncomment below and update the code to test addScheduledPlanLogFileByURL
        //instance.addScheduledPlanLogFileByURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addScheduledPlanLogTag', function() {
      it('should call addScheduledPlanLogTag successfully', function(done) {
        //uncomment below and update the code to test addScheduledPlanLogTag
        //instance.addScheduledPlanLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScheduledPlanLogFile', function() {
      it('should call deleteScheduledPlanLogFile successfully', function(done) {
        //uncomment below and update the code to test deleteScheduledPlanLogFile
        //instance.deleteScheduledPlanLogFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScheduledPlanLogTag', function() {
      it('should call deleteScheduledPlanLogTag successfully', function(done) {
        //uncomment below and update the code to test deleteScheduledPlanLogTag
        //instance.deleteScheduledPlanLogTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDuplicateScheduledPlanLogById', function() {
      it('should call getDuplicateScheduledPlanLogById successfully', function(done) {
        //uncomment below and update the code to test getDuplicateScheduledPlanLogById
        //instance.getDuplicateScheduledPlanLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScheduledPlanLogByFilter', function() {
      it('should call getScheduledPlanLogByFilter successfully', function(done) {
        //uncomment below and update the code to test getScheduledPlanLogByFilter
        //instance.getScheduledPlanLogByFilter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScheduledPlanLogById', function() {
      it('should call getScheduledPlanLogById successfully', function(done) {
        //uncomment below and update the code to test getScheduledPlanLogById
        //instance.getScheduledPlanLogById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScheduledPlanLogFiles', function() {
      it('should call getScheduledPlanLogFiles successfully', function(done) {
        //uncomment below and update the code to test getScheduledPlanLogFiles
        //instance.getScheduledPlanLogFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScheduledPlanLogTags', function() {
      it('should call getScheduledPlanLogTags successfully', function(done) {
        //uncomment below and update the code to test getScheduledPlanLogTags
        //instance.getScheduledPlanLogTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
