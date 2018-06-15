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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.QuickAdjustment = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QuickAdjustment model module.
   * @module model/QuickAdjustment
   * @version beta
   */

  /**
   * Constructs a new <code>QuickAdjustment</code>.
   * @alias module:model/QuickAdjustment
   * @class
   * @param warehouseId {Number} 
   * @param locationId {Number} 
   * @param adjustmentCode {String} 
   */
  var exports = function(warehouseId, locationId, adjustmentCode) {
    var _this = this;




    _this['warehouseId'] = warehouseId;
    _this['locationId'] = locationId;
    _this['adjustmentCode'] = adjustmentCode;







  };

  /**
   * Constructs a <code>QuickAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickAdjustment} obj Optional instance to populate.
   * @return {module:model/QuickAdjustment} The populated <code>QuickAdjustment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('warehouseId')) {
        obj['warehouseId'] = ApiClient.convertToType(data['warehouseId'], 'Number');
      }
      if (data.hasOwnProperty('locationId')) {
        obj['locationId'] = ApiClient.convertToType(data['locationId'], 'Number');
      }
      if (data.hasOwnProperty('adjustmentCode')) {
        obj['adjustmentCode'] = ApiClient.convertToType(data['adjustmentCode'], 'String');
      }
      if (data.hasOwnProperty('totalQuantity')) {
        obj['totalQuantity'] = ApiClient.convertToType(data['totalQuantity'], 'Number');
      }
      if (data.hasOwnProperty('changeQuantity')) {
        obj['changeQuantity'] = ApiClient.convertToType(data['changeQuantity'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('productIdTag')) {
        obj['productIdTag'] = ApiClient.convertToType(data['productIdTag'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Number} warehouseId
   */
  exports.prototype['warehouseId'] = undefined;
  /**
   * @member {Number} locationId
   */
  exports.prototype['locationId'] = undefined;
  /**
   * @member {String} adjustmentCode
   */
  exports.prototype['adjustmentCode'] = undefined;
  /**
   * @member {Number} totalQuantity
   */
  exports.prototype['totalQuantity'] = undefined;
  /**
   * @member {Number} changeQuantity
   */
  exports.prototype['changeQuantity'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} productIdTag
   */
  exports.prototype['productIdTag'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;



  return exports;
}));

