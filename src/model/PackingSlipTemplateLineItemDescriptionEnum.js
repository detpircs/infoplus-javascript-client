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
    root.infoplus.PackingSlipTemplateLineItemDescriptionEnum = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PackingSlipTemplateLineItemDescriptionEnum model module.
   * @module model/PackingSlipTemplateLineItemDescriptionEnum
   * @version beta
   */

  /**
   * Constructs a new <code>PackingSlipTemplateLineItemDescriptionEnum</code>.
   * @alias module:model/PackingSlipTemplateLineItemDescriptionEnum
   * @class
   * @param id {String} 
   * @param label {String} 
   */
  var exports = function(id, label) {
    var _this = this;

    _this['id'] = id;
    _this['label'] = label;

  };

  /**
   * Constructs a <code>PackingSlipTemplateLineItemDescriptionEnum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackingSlipTemplateLineItemDescriptionEnum} obj Optional instance to populate.
   * @return {module:model/PackingSlipTemplateLineItemDescriptionEnum} The populated <code>PackingSlipTemplateLineItemDescriptionEnum</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('fullEntityClassName')) {
        obj['fullEntityClassName'] = ApiClient.convertToType(data['fullEntityClassName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} fullEntityClassName
   */
  exports.prototype['fullEntityClassName'] = undefined;



  return exports;
}));


