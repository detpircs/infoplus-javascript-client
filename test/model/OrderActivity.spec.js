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
    instance = new infoplus.OrderActivity();
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

  describe('OrderActivity', function() {
    it('should create an instance of OrderActivity', function() {
      // uncomment below and update the code to test OrderActivity
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be.a(infoplus.OrderActivity);
    });

    it('should have the property orderNo (base name: "orderNo")', function() {
      // uncomment below and update the code to test the property orderNo
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "createDate")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property modifyDate (base name: "modifyDate")', function() {
      // uncomment below and update the code to test the property modifyDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property alternateUsage (base name: "alternateUsage")', function() {
      // uncomment below and update the code to test the property alternateUsage
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property groupOrderId (base name: "groupOrderId")', function() {
      // uncomment below and update the code to test the property groupOrderId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property reqStatusName (base name: "reqStatusName")', function() {
      // uncomment below and update the code to test the property reqStatusName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentProcessId (base name: "fulfillmentProcessId")', function() {
      // uncomment below and update the code to test the property fulfillmentProcessId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrierId")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "carrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property lobId (base name: "lobId")', function() {
      // uncomment below and update the code to test the property lobId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property mediaCode (base name: "mediaCode")', function() {
      // uncomment below and update the code to test the property mediaCode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property legacyRestrictionType (base name: "legacyRestrictionType")', function() {
      // uncomment below and update the code to test the property legacyRestrictionType
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property reqTypeName (base name: "reqTypeName")', function() {
      // uncomment below and update the code to test the property reqTypeName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property serviceTypeId (base name: "serviceTypeId")', function() {
      // uncomment below and update the code to test the property serviceTypeId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property serviceTypeName (base name: "serviceTypeName")', function() {
      // uncomment below and update the code to test the property serviceTypeName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property alcoholOrderType (base name: "alcoholOrderType")', function() {
      // uncomment below and update the code to test the property alcoholOrderType
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property distributionChannel (base name: "distributionChannel")', function() {
      // uncomment below and update the code to test the property distributionChannel
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property distributionChannelName (base name: "distributionChannelName")', function() {
      // uncomment below and update the code to test the property distributionChannelName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property priorityCode (base name: "priorityCode")', function() {
      // uncomment below and update the code to test the property priorityCode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "orderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property enteredBy (base name: "enteredBy")', function() {
      // uncomment below and update the code to test the property enteredBy
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderReason (base name: "orderReason")', function() {
      // uncomment below and update the code to test the property orderReason
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNo (base name: "customerOrderNo")', function() {
      // uncomment below and update the code to test the property customerOrderNo
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property priceLevel (base name: "priceLevel")', function() {
      // uncomment below and update the code to test the property priceLevel
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderCreateDate (base name: "orderCreateDate")', function() {
      // uncomment below and update the code to test the property orderCreateDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderModifyDate (base name: "orderModifyDate")', function() {
      // uncomment below and update the code to test the property orderModifyDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipBy (base name: "shipBy")', function() {
      // uncomment below and update the code to test the property shipBy
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property stopBackOrders (base name: "stopBackOrders")', function() {
      // uncomment below and update the code to test the property stopBackOrders
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderSourceId (base name: "orderSourceId")', function() {
      // uncomment below and update the code to test the property orderSourceId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderSourceName (base name: "orderSourceName")', function() {
      // uncomment below and update the code to test the property orderSourceName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property integrationPartnerId (base name: "integrationPartnerId")', function() {
      // uncomment below and update the code to test the property integrationPartnerId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property integrationPartnerName (base name: "integrationPartnerName")', function() {
      // uncomment below and update the code to test the property integrationPartnerName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderLoadProgramId (base name: "orderLoadProgramId")', function() {
      // uncomment below and update the code to test the property orderLoadProgramId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderLoadProgramName (base name: "orderLoadProgramName")', function() {
      // uncomment below and update the code to test the property orderLoadProgramName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property omsOrderNo (base name: "omsOrderNo")', function() {
      // uncomment below and update the code to test the property omsOrderNo
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property omsCustomerId (base name: "omsCustomerId")', function() {
      // uncomment below and update the code to test the property omsCustomerId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToAttention (base name: "shipToAttention")', function() {
      // uncomment below and update the code to test the property shipToAttention
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToCompany (base name: "shipToCompany")', function() {
      // uncomment below and update the code to test the property shipToCompany
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToStreet (base name: "shipToStreet")', function() {
      // uncomment below and update the code to test the property shipToStreet
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToStreet2 (base name: "shipToStreet2")', function() {
      // uncomment below and update the code to test the property shipToStreet2
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToStreet3 (base name: "shipToStreet3")', function() {
      // uncomment below and update the code to test the property shipToStreet3
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToCity (base name: "shipToCity")', function() {
      // uncomment below and update the code to test the property shipToCity
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToState (base name: "shipToState")', function() {
      // uncomment below and update the code to test the property shipToState
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToZip (base name: "shipToZip")', function() {
      // uncomment below and update the code to test the property shipToZip
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToCountry (base name: "shipToCountry")', function() {
      // uncomment below and update the code to test the property shipToCountry
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToPhone (base name: "shipToPhone")', function() {
      // uncomment below and update the code to test the property shipToPhone
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipToEmail (base name: "shipToEmail")', function() {
      // uncomment below and update the code to test the property shipToEmail
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToAttention (base name: "billToAttention")', function() {
      // uncomment below and update the code to test the property billToAttention
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToCompany (base name: "billToCompany")', function() {
      // uncomment below and update the code to test the property billToCompany
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet (base name: "billToStreet")', function() {
      // uncomment below and update the code to test the property billToStreet
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet2 (base name: "billToStreet2")', function() {
      // uncomment below and update the code to test the property billToStreet2
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToStreet3 (base name: "billToStreet3")', function() {
      // uncomment below and update the code to test the property billToStreet3
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToCity (base name: "billToCity")', function() {
      // uncomment below and update the code to test the property billToCity
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToState (base name: "billToState")', function() {
      // uncomment below and update the code to test the property billToState
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToZip (base name: "billToZip")', function() {
      // uncomment below and update the code to test the property billToZip
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToCountry (base name: "billToCountry")', function() {
      // uncomment below and update the code to test the property billToCountry
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToPhone (base name: "billToPhone")', function() {
      // uncomment below and update the code to test the property billToPhone
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property billToEmail (base name: "billToEmail")', function() {
      // uncomment below and update the code to test the property billToEmail
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property freight (base name: "freight")', function() {
      // uncomment below and update the code to test the property freight
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property weightLbs (base name: "weightLbs")', function() {
      // uncomment below and update the code to test the property weightLbs
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property estimatedWeightLbs (base name: "estimatedWeightLbs")', function() {
      // uncomment below and update the code to test the property estimatedWeightLbs
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfCartons (base name: "numberOfCartons")', function() {
      // uncomment below and update the code to test the property numberOfCartons
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfPallets (base name: "numberOfPallets")', function() {
      // uncomment below and update the code to test the property numberOfPallets
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfLineItems (base name: "numberOfLineItems")', function() {
      // uncomment below and update the code to test the property numberOfLineItems
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property completionStatus (base name: "completionStatus")', function() {
      // uncomment below and update the code to test the property completionStatus
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property holdCode (base name: "holdCode")', function() {
      // uncomment below and update the code to test the property holdCode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipCode (base name: "shipCode")', function() {
      // uncomment below and update the code to test the property shipCode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderMessage (base name: "orderMessage")', function() {
      // uncomment below and update the code to test the property orderMessage
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property division (base name: "division")', function() {
      // uncomment below and update the code to test the property division
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property costCenter (base name: "costCenter")', function() {
      // uncomment below and update the code to test the property costCenter
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property authorizedBy (base name: "authorizedBy")', function() {
      // uncomment below and update the code to test the property authorizedBy
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property batchNo (base name: "batchNo")', function() {
      // uncomment below and update the code to test the property batchNo
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property firstShipDate (base name: "firstShipDate")', function() {
      // uncomment below and update the code to test the property firstShipDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property lastShipDate (base name: "lastShipDate")', function() {
      // uncomment below and update the code to test the property lastShipDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property deliverOnDate (base name: "deliverOnDate")', function() {
      // uncomment below and update the code to test the property deliverOnDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property customerPONo (base name: "customerPONo")', function() {
      // uncomment below and update the code to test the property customerPONo
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipVia (base name: "shipVia")', function() {
      // uncomment below and update the code to test the property shipVia
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property needByDate (base name: "needByDate")', function() {
      // uncomment below and update the code to test the property needByDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property balanceDue (base name: "balanceDue")', function() {
      // uncomment below and update the code to test the property balanceDue
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property totalPaid (base name: "totalPaid")', function() {
      // uncomment below and update the code to test the property totalPaid
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property authorizationAmount (base name: "authorizationAmount")', function() {
      // uncomment below and update the code to test the property authorizationAmount
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property subtotal (base name: "subtotal")', function() {
      // uncomment below and update the code to test the property subtotal
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property taxOnFreight (base name: "taxOnFreight")', function() {
      // uncomment below and update the code to test the property taxOnFreight
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property distributionCharges (base name: "distributionCharges")', function() {
      // uncomment below and update the code to test the property distributionCharges
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shippingCharge (base name: "shippingCharge")', function() {
      // uncomment below and update the code to test the property shippingCharge
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscount (base name: "totalDiscount")', function() {
      // uncomment below and update the code to test the property totalDiscount
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property parcelAccountId (base name: "parcelAccountId")', function() {
      // uncomment below and update the code to test the property parcelAccountId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartyParcelAccountId (base name: "thirdPartyParcelAccountId")', function() {
      // uncomment below and update the code to test the property thirdPartyParcelAccountId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property packingSlipTemplateId (base name: "packingSlipTemplateId")', function() {
      // uncomment below and update the code to test the property packingSlipTemplateId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property giftMessage (base name: "giftMessage")', function() {
      // uncomment below and update the code to test the property giftMessage
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property branchSector (base name: "branchSector")', function() {
      // uncomment below and update the code to test the property branchSector
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property branchArea (base name: "branchArea")', function() {
      // uncomment below and update the code to test the property branchArea
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property branchCustomerType (base name: "branchCustomerType")', function() {
      // uncomment below and update the code to test the property branchCustomerType
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property branchId (base name: "branchId")', function() {
      // uncomment below and update the code to test the property branchId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderCode (base name: "orderCode")', function() {
      // uncomment below and update the code to test the property orderCode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property leadPackageId (base name: "leadPackageId")', function() {
      // uncomment below and update the code to test the property leadPackageId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property deliveredDate (base name: "deliveredDate")', function() {
      // uncomment below and update the code to test the property deliveredDate
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property totalQty (base name: "totalQty")', function() {
      // uncomment below and update the code to test the property totalQty
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfWraps (base name: "numberOfWraps")', function() {
      // uncomment below and update the code to test the property numberOfWraps
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfCases (base name: "numberOfCases")', function() {
      // uncomment below and update the code to test the property numberOfCases
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property numberOfTouches (base name: "numberOfTouches")', function() {
      // uncomment below and update the code to test the property numberOfTouches
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property estimatedNumberOfPicks (base name: "estimatedNumberOfPicks")', function() {
      // uncomment below and update the code to test the property estimatedNumberOfPicks
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderConfirmationEmailTemplateId (base name: "orderConfirmationEmailTemplateId")', function() {
      // uncomment below and update the code to test the property orderConfirmationEmailTemplateId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shipmentConfirmationEmailTemplateId (base name: "shipmentConfirmationEmailTemplateId")', function() {
      // uncomment below and update the code to test the property shipmentConfirmationEmailTemplateId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property externalShippingSystemId (base name: "externalShippingSystemId")', function() {
      // uncomment below and update the code to test the property externalShippingSystemId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property shippingSystemName (base name: "shippingSystemName")', function() {
      // uncomment below and update the code to test the property shippingSystemName
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property orderInvoiceTemplateId (base name: "orderInvoiceTemplateId")', function() {
      // uncomment below and update the code to test the property orderInvoiceTemplateId
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property priceMode (base name: "priceMode")', function() {
      // uncomment below and update the code to test the property priceMode
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new infoplus.OrderActivity();
      //expect(instance).to.be();
    });

  });

}));