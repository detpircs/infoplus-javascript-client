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
    instance = new infoplus.InventoryDetail();
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

  describe('InventoryDetail', function() {
    it('should create an instance of InventoryDetail', function() {
      // uncomment below and update the code to test InventoryDetail
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be.a(infoplus.InventoryDetail);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property warehouseLocationId (base name: "warehouseLocationId")', function() {
      // uncomment below and update the code to test the property warehouseLocationId
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property distributionDate (base name: "distributionDate")', function() {
      // uncomment below and update the code to test the property distributionDate
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property quantityPerInnerPack (base name: "quantityPerInnerPack")', function() {
      // uncomment below and update the code to test the property quantityPerInnerPack
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property quantityPerCase (base name: "quantityPerCase")', function() {
      // uncomment below and update the code to test the property quantityPerCase
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property quantityPerPallet (base name: "quantityPerPallet")', function() {
      // uncomment below and update the code to test the property quantityPerPallet
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property estimatedInnerPacks (base name: "estimatedInnerPacks")', function() {
      // uncomment below and update the code to test the property estimatedInnerPacks
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property estimatedCases (base name: "estimatedCases")', function() {
      // uncomment below and update the code to test the property estimatedCases
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property estimatedPallets (base name: "estimatedPallets")', function() {
      // uncomment below and update the code to test the property estimatedPallets
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property unitsPerWrap (base name: "unitsPerWrap")', function() {
      // uncomment below and update the code to test the property unitsPerWrap
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property revisionDate (base name: "revisionDate")', function() {
      // uncomment below and update the code to test the property revisionDate
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property productionLot (base name: "productionLot")', function() {
      // uncomment below and update the code to test the property productionLot
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property oldestReceiptDate (base name: "oldestReceiptDate")', function() {
      // uncomment below and update the code to test the property oldestReceiptDate
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property poNo (base name: "poNo")', function() {
      // uncomment below and update the code to test the property poNo
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new infoplus.InventoryDetail();
      //expect(instance).to.be();
    });

  });

}));