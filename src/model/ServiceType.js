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
    root.infoplus.ServiceType = factory(root.infoplus.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ServiceType model module.
   * @module model/ServiceType
   * @version beta
   */

  /**
   * Constructs a new <code>ServiceType</code>.
   * @alias module:model/ServiceType
   * @class
   * @param serviceType
   * @param label
   */
  var exports = function(serviceType, label) {

    this['serviceType'] = serviceType;
    this['label'] = label;
  };

  /**
   * Constructs a <code>ServiceType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceType} obj Optional instance to populate.
   * @return {module:model/ServiceType} The populated <code>ServiceType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('serviceType')) {
        obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} serviceType
   */
  exports.prototype['serviceType'] = undefined;

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;




  return exports;
}));
