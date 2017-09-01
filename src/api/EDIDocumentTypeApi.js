(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EDIDocumentType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EDIDocumentType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.EDIDocumentTypeApi = factory(root.infoplus.ApiClient, root.infoplus.EDIDocumentType);
  }
}(this, function(ApiClient, EDIDocumentType) {
  'use strict';

  /**
   * EDIDocumentType service.
   * @module api/EDIDocumentTypeApi
   * @version beta
   */

  /**
   * Constructs a new EDIDocumentTypeApi. 
   * @alias module:api/EDIDocumentTypeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEDIDocumentTypeById operation.
     * @callback module:api/EDIDocumentTypeApi~getEDIDocumentTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EDIDocumentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an eDIDocumentType by id
     * Returns the eDIDocumentType identified by the specified id.
     * @param {String} eDIDocumentTypeId Id of eDIDocumentType to be returned.
     * @param {module:api/EDIDocumentTypeApi~getEDIDocumentTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EDIDocumentType}
     */
    this.getEDIDocumentTypeById = function(eDIDocumentTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'eDIDocumentTypeId' is set
      if (eDIDocumentTypeId == undefined || eDIDocumentTypeId == null) {
        throw "Missing the required parameter 'eDIDocumentTypeId' when calling getEDIDocumentTypeById";
      }


      var pathParams = {
        'eDIDocumentTypeId': eDIDocumentTypeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EDIDocumentType;

      return this.apiClient.callApi(
        '/beta/eDIDocumentType/{eDIDocumentTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEDIDocumentTypeBySearchText operation.
     * @callback module:api/EDIDocumentTypeApi~getEDIDocumentTypeBySearchTextCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EDIDocumentType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search eDIDocumentTypes
     * Returns the list of eDIDocumentTypes that match the given searchText.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchText Search text, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {module:api/EDIDocumentTypeApi~getEDIDocumentTypeBySearchTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EDIDocumentType>}
     */
    this.getEDIDocumentTypeBySearchText = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchText': opts['searchText'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [EDIDocumentType];

      return this.apiClient.callApi(
        '/beta/eDIDocumentType/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));