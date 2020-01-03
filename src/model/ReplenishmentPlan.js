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
    root.infoplus.ReplenishmentPlan = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReplenishmentPlan model module.
   * @module model/ReplenishmentPlan
   * @version beta
   */

  /**
   * Constructs a new <code>ReplenishmentPlan</code>.
   * @alias module:model/ReplenishmentPlan
   * @class
   * @param warehouseId {Number} 
   * @param pickFaceAssignmentSmartFilterId {Number} 
   * @param name {String} 
   */
  var exports = function(warehouseId, pickFaceAssignmentSmartFilterId, name) {
    var _this = this;




    _this['warehouseId'] = warehouseId;
    _this['pickFaceAssignmentSmartFilterId'] = pickFaceAssignmentSmartFilterId;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>ReplenishmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplenishmentPlan} obj Optional instance to populate.
   * @return {module:model/ReplenishmentPlan} The populated <code>ReplenishmentPlan</code> instance.
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
      if (data.hasOwnProperty('pickFaceAssignmentSmartFilterId')) {
        obj['pickFaceAssignmentSmartFilterId'] = ApiClient.convertToType(data['pickFaceAssignmentSmartFilterId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
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
   * @member {Number} pickFaceAssignmentSmartFilterId
   */
  exports.prototype['pickFaceAssignmentSmartFilterId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

