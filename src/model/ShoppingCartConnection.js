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
    define(['ApiClient', 'model/Store', 'model/Warehouse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Store'), require('./Warehouse'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.ShoppingCartConnection = factory(root.infoplus.ApiClient, root.infoplus.Store, root.infoplus.Warehouse);
  }
}(this, function(ApiClient, Store, Warehouse) {
  'use strict';




  /**
   * The ShoppingCartConnection model module.
   * @module model/ShoppingCartConnection
   * @version beta
   */

  /**
   * Constructs a new <code>ShoppingCartConnection</code>.
   * @alias module:model/ShoppingCartConnection
   * @class
   * @param lobId {Number} 
   * @param orderSourceId {Number} 
   * @param integrationPartnerId {Number} 
   * @param connectionType {String} 
   * @param infoplusSKUFieldToMap {String} 
   * @param shoppingCartSKUFieldToMap {String} 
   * @param name {String} 
   * @param shoppingCartStoreURL {String} 
   * @param accessCode {String} 
   * @param accessToken {String} 
   * @param username {String} 
   * @param password {String} 
   * @param orderShipmentLevel {String} 
   * @param syncOrders {Boolean} 
   * @param syncInventory {Boolean} 
   * @param syncTrackingData {Boolean} 
   * @param fulfillAllItems {Boolean} 
   * @param inventoryLevelWarehouseControls {String} 
   * @param inventoryLevelStoreControls {String} 
   */
  var exports = function(lobId, orderSourceId, integrationPartnerId, connectionType, infoplusSKUFieldToMap, shoppingCartSKUFieldToMap, name, shoppingCartStoreURL, accessCode, accessToken, username, password, orderShipmentLevel, syncOrders, syncInventory, syncTrackingData, fulfillAllItems, inventoryLevelWarehouseControls, inventoryLevelStoreControls) {
    var _this = this;






    _this['lobId'] = lobId;
    _this['orderSourceId'] = orderSourceId;
    _this['integrationPartnerId'] = integrationPartnerId;
    _this['connectionType'] = connectionType;

    _this['infoplusSKUFieldToMap'] = infoplusSKUFieldToMap;
    _this['shoppingCartSKUFieldToMap'] = shoppingCartSKUFieldToMap;

    _this['name'] = name;
    _this['shoppingCartStoreURL'] = shoppingCartStoreURL;
    _this['accessCode'] = accessCode;
    _this['accessToken'] = accessToken;
    _this['username'] = username;
    _this['password'] = password;

    _this['orderShipmentLevel'] = orderShipmentLevel;

    _this['syncOrders'] = syncOrders;
    _this['syncInventory'] = syncInventory;
    _this['syncTrackingData'] = syncTrackingData;

    _this['fulfillAllItems'] = fulfillAllItems;


    _this['inventoryLevelWarehouseControls'] = inventoryLevelWarehouseControls;

    _this['inventoryLevelStoreControls'] = inventoryLevelStoreControls;


  };

  /**
   * Constructs a <code>ShoppingCartConnection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShoppingCartConnection} obj Optional instance to populate.
   * @return {module:model/ShoppingCartConnection} The populated <code>ShoppingCartConnection</code> instance.
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
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
      }
      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
      }
      if (data.hasOwnProperty('lobId')) {
        obj['lobId'] = ApiClient.convertToType(data['lobId'], 'Number');
      }
      if (data.hasOwnProperty('orderSourceId')) {
        obj['orderSourceId'] = ApiClient.convertToType(data['orderSourceId'], 'Number');
      }
      if (data.hasOwnProperty('integrationPartnerId')) {
        obj['integrationPartnerId'] = ApiClient.convertToType(data['integrationPartnerId'], 'Number');
      }
      if (data.hasOwnProperty('connectionType')) {
        obj['connectionType'] = ApiClient.convertToType(data['connectionType'], 'String');
      }
      if (data.hasOwnProperty('itemFilterId')) {
        obj['itemFilterId'] = ApiClient.convertToType(data['itemFilterId'], 'Number');
      }
      if (data.hasOwnProperty('infoplusSKUFieldToMap')) {
        obj['infoplusSKUFieldToMap'] = ApiClient.convertToType(data['infoplusSKUFieldToMap'], 'String');
      }
      if (data.hasOwnProperty('shoppingCartSKUFieldToMap')) {
        obj['shoppingCartSKUFieldToMap'] = ApiClient.convertToType(data['shoppingCartSKUFieldToMap'], 'String');
      }
      if (data.hasOwnProperty('scriptId')) {
        obj['scriptId'] = ApiClient.convertToType(data['scriptId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('shoppingCartStoreURL')) {
        obj['shoppingCartStoreURL'] = ApiClient.convertToType(data['shoppingCartStoreURL'], 'String');
      }
      if (data.hasOwnProperty('accessCode')) {
        obj['accessCode'] = ApiClient.convertToType(data['accessCode'], 'String');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('defaultCarrierId')) {
        obj['defaultCarrierId'] = ApiClient.convertToType(data['defaultCarrierId'], 'Number');
      }
      if (data.hasOwnProperty('orderShipmentLevel')) {
        obj['orderShipmentLevel'] = ApiClient.convertToType(data['orderShipmentLevel'], 'String');
      }
      if (data.hasOwnProperty('createInvoices')) {
        obj['createInvoices'] = ApiClient.convertToType(data['createInvoices'], 'Boolean');
      }
      if (data.hasOwnProperty('syncOrders')) {
        obj['syncOrders'] = ApiClient.convertToType(data['syncOrders'], 'Boolean');
      }
      if (data.hasOwnProperty('syncInventory')) {
        obj['syncInventory'] = ApiClient.convertToType(data['syncInventory'], 'Boolean');
      }
      if (data.hasOwnProperty('syncTrackingData')) {
        obj['syncTrackingData'] = ApiClient.convertToType(data['syncTrackingData'], 'Boolean');
      }
      if (data.hasOwnProperty('syncInventoryCronString')) {
        obj['syncInventoryCronString'] = ApiClient.convertToType(data['syncInventoryCronString'], 'String');
      }
      if (data.hasOwnProperty('fulfillAllItems')) {
        obj['fulfillAllItems'] = ApiClient.convertToType(data['fulfillAllItems'], 'Boolean');
      }
      if (data.hasOwnProperty('syncInventoryLevelsLastRunTime')) {
        obj['syncInventoryLevelsLastRunTime'] = ApiClient.convertToType(data['syncInventoryLevelsLastRunTime'], 'Date');
      }
      if (data.hasOwnProperty('syncOrdersLastRunTime')) {
        obj['syncOrdersLastRunTime'] = ApiClient.convertToType(data['syncOrdersLastRunTime'], 'Date');
      }
      if (data.hasOwnProperty('inventoryLevelWarehouseControls')) {
        obj['inventoryLevelWarehouseControls'] = ApiClient.convertToType(data['inventoryLevelWarehouseControls'], 'String');
      }
      if (data.hasOwnProperty('warehouseList')) {
        obj['warehouseList'] = ApiClient.convertToType(data['warehouseList'], [Warehouse]);
      }
      if (data.hasOwnProperty('inventoryLevelStoreControls')) {
        obj['inventoryLevelStoreControls'] = ApiClient.convertToType(data['inventoryLevelStoreControls'], 'String');
      }
      if (data.hasOwnProperty('storeList')) {
        obj['storeList'] = ApiClient.convertToType(data['storeList'], [Store]);
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
   * @member {Number} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} nonce
   */
  exports.prototype['nonce'] = undefined;
  /**
   * @member {Number} lobId
   */
  exports.prototype['lobId'] = undefined;
  /**
   * @member {Number} orderSourceId
   */
  exports.prototype['orderSourceId'] = undefined;
  /**
   * @member {Number} integrationPartnerId
   */
  exports.prototype['integrationPartnerId'] = undefined;
  /**
   * @member {String} connectionType
   */
  exports.prototype['connectionType'] = undefined;
  /**
   * @member {Number} itemFilterId
   */
  exports.prototype['itemFilterId'] = undefined;
  /**
   * @member {String} infoplusSKUFieldToMap
   */
  exports.prototype['infoplusSKUFieldToMap'] = undefined;
  /**
   * @member {String} shoppingCartSKUFieldToMap
   */
  exports.prototype['shoppingCartSKUFieldToMap'] = undefined;
  /**
   * @member {Number} scriptId
   */
  exports.prototype['scriptId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} shoppingCartStoreURL
   */
  exports.prototype['shoppingCartStoreURL'] = undefined;
  /**
   * @member {String} accessCode
   */
  exports.prototype['accessCode'] = undefined;
  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Number} defaultCarrierId
   */
  exports.prototype['defaultCarrierId'] = undefined;
  /**
   * @member {String} orderShipmentLevel
   */
  exports.prototype['orderShipmentLevel'] = undefined;
  /**
   * @member {Boolean} createInvoices
   * @default false
   */
  exports.prototype['createInvoices'] = false;
  /**
   * @member {Boolean} syncOrders
   * @default false
   */
  exports.prototype['syncOrders'] = false;
  /**
   * @member {Boolean} syncInventory
   * @default false
   */
  exports.prototype['syncInventory'] = false;
  /**
   * @member {Boolean} syncTrackingData
   * @default false
   */
  exports.prototype['syncTrackingData'] = false;
  /**
   * @member {String} syncInventoryCronString
   */
  exports.prototype['syncInventoryCronString'] = undefined;
  /**
   * @member {Boolean} fulfillAllItems
   * @default false
   */
  exports.prototype['fulfillAllItems'] = false;
  /**
   * @member {Date} syncInventoryLevelsLastRunTime
   */
  exports.prototype['syncInventoryLevelsLastRunTime'] = undefined;
  /**
   * @member {Date} syncOrdersLastRunTime
   */
  exports.prototype['syncOrdersLastRunTime'] = undefined;
  /**
   * @member {String} inventoryLevelWarehouseControls
   */
  exports.prototype['inventoryLevelWarehouseControls'] = undefined;
  /**
   * @member {Array.<module:model/Warehouse>} warehouseList
   */
  exports.prototype['warehouseList'] = undefined;
  /**
   * @member {String} inventoryLevelStoreControls
   */
  exports.prototype['inventoryLevelStoreControls'] = undefined;
  /**
   * @member {Array.<module:model/Store>} storeList
   */
  exports.prototype['storeList'] = undefined;
  /**
   * @member {Object.<String, Object>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));


