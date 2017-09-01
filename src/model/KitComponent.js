(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.KitComponent = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The KitComponent model module.
   * @module model/KitComponent
   * @version beta
   */

  /**
   * Constructs a new <code>KitComponent</code>.
   * @alias module:model/KitComponent
   * @class
   * @param sku
   * @param quantity
   * @param critical
   */
  var exports = function(sku, quantity, critical) {

    this['sku'] = sku;
    this['quantity'] = quantity;


    this['critical'] = critical;

  };

  /**
   * Constructs a <code>KitComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KitComponent} obj Optional instance to populate.
   * @return {module:model/KitComponent} The populated <code>KitComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('instructions')) {
        obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
      }
      if (data.hasOwnProperty('additionalServices')) {
        obj['additionalServices'] = ApiClient.convertToType(data['additionalServices'], 'String');
      }
      if (data.hasOwnProperty('critical')) {
        obj['critical'] = ApiClient.convertToType(data['critical'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;

  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * @member {String} instructions
   */
  exports.prototype['instructions'] = undefined;

  /**
   * @member {String} additionalServices
   */
  exports.prototype['additionalServices'] = undefined;

  /**
   * @member {String} critical
   */
  exports.prototype['critical'] = undefined;

  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;




  return exports;
}));