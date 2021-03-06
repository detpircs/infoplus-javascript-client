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
    define(['ApiClient', 'model/ApiResponse', 'model/RecordFile', 'model/WarehouseServiceType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/RecordFile'), require('../model/WarehouseServiceType'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.WarehouseServiceTypeApi = factory(root.infoplus.ApiClient, root.infoplus.ApiResponse, root.infoplus.RecordFile, root.infoplus.WarehouseServiceType);
  }
}(this, function(ApiClient, ApiResponse, RecordFile, WarehouseServiceType) {
  'use strict';

  /**
   * WarehouseServiceType service.
   * @module api/WarehouseServiceTypeApi
   * @version beta
   */

  /**
   * Constructs a new WarehouseServiceTypeApi. 
   * @alias module:api/WarehouseServiceTypeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWarehouseServiceType operation.
     * @callback module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseServiceType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a warehouseServiceType
     * Inserts a new warehouseServiceType using the specified data.
     * @param {module:model/WarehouseServiceType} body WarehouseServiceType to be inserted.
     * @param {module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WarehouseServiceType}
     */
    this.addWarehouseServiceType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addWarehouseServiceType");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WarehouseServiceType;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseServiceTypeAudit operation.
     * @callback module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a warehouseServiceType
     * Adds an audit to an existing warehouseServiceType.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to add an audit to
     * @param {String} warehouseServiceTypeAudit The audit to add
     * @param {module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseServiceTypeAudit = function(warehouseServiceTypeId, warehouseServiceTypeAudit, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling addWarehouseServiceTypeAudit");
      }

      // verify the required parameter 'warehouseServiceTypeAudit' is set
      if (warehouseServiceTypeAudit === undefined || warehouseServiceTypeAudit === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeAudit' when calling addWarehouseServiceTypeAudit");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId,
        'warehouseServiceTypeAudit': warehouseServiceTypeAudit
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/audit/{warehouseServiceTypeAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseServiceTypeFile operation.
     * @callback module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a warehouseServiceType
     * Adds a file to an existing warehouseServiceType.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseServiceTypeFile = function(warehouseServiceTypeId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling addWarehouseServiceTypeFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addWarehouseServiceTypeFile");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId,
        'fileName': fileName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseServiceTypeFileByURL operation.
     * @callback module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeFileByURLCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to a warehouseServiceType by URL.
     * Adds a file to an existing warehouseServiceType by URL.
     * @param {module:model/RecordFile} body The url and optionly fileName to be used.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to add an file to
     * @param {module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeFileByURLCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseServiceTypeFileByURL = function(body, warehouseServiceTypeId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addWarehouseServiceTypeFileByURL");
      }

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling addWarehouseServiceTypeFileByURL");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addWarehouseServiceTypeTag operation.
     * @callback module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a warehouseServiceType.
     * Adds a tag to an existing warehouseServiceType.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to add a tag to
     * @param {String} warehouseServiceTypeTag The tag to add
     * @param {module:api/WarehouseServiceTypeApi~addWarehouseServiceTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addWarehouseServiceTypeTag = function(warehouseServiceTypeId, warehouseServiceTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling addWarehouseServiceTypeTag");
      }

      // verify the required parameter 'warehouseServiceTypeTag' is set
      if (warehouseServiceTypeTag === undefined || warehouseServiceTypeTag === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeTag' when calling addWarehouseServiceTypeTag");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId,
        'warehouseServiceTypeTag': warehouseServiceTypeTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/tag/{warehouseServiceTypeTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWarehouseServiceType operation.
     * @callback module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a warehouseServiceType
     * Deletes the warehouseServiceType identified by the specified id.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to be deleted.
     * @param {module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWarehouseServiceType = function(warehouseServiceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling deleteWarehouseServiceType");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWarehouseServiceTypeFile operation.
     * @callback module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a file for a warehouseServiceType.
     * Deletes an existing warehouseServiceType file using the specified data.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to remove file from
     * @param {Number} fileId Id of the file to delete
     * @param {module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWarehouseServiceTypeFile = function(warehouseServiceTypeId, fileId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling deleteWarehouseServiceTypeFile");
      }

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteWarehouseServiceTypeFile");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId,
        'fileId': fileId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/file/{fileId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWarehouseServiceTypeTag operation.
     * @callback module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a warehouseServiceType.
     * Deletes an existing warehouseServiceType tag using the specified data.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to remove tag from
     * @param {String} warehouseServiceTypeTag The tag to delete
     * @param {module:api/WarehouseServiceTypeApi~deleteWarehouseServiceTypeTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWarehouseServiceTypeTag = function(warehouseServiceTypeId, warehouseServiceTypeTag, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling deleteWarehouseServiceTypeTag");
      }

      // verify the required parameter 'warehouseServiceTypeTag' is set
      if (warehouseServiceTypeTag === undefined || warehouseServiceTypeTag === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeTag' when calling deleteWarehouseServiceTypeTag");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId,
        'warehouseServiceTypeTag': warehouseServiceTypeTag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/tag/{warehouseServiceTypeTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateWarehouseServiceTypeById operation.
     * @callback module:api/WarehouseServiceTypeApi~getDuplicateWarehouseServiceTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseServiceType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a warehouseServiceType by id
     * Returns a duplicated warehouseServiceType identified by the specified id.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to be duplicated.
     * @param {module:api/WarehouseServiceTypeApi~getDuplicateWarehouseServiceTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WarehouseServiceType}
     */
    this.getDuplicateWarehouseServiceTypeById = function(warehouseServiceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling getDuplicateWarehouseServiceTypeById");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WarehouseServiceType;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/duplicate/{warehouseServiceTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseServiceTypeByFilter operation.
     * @callback module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WarehouseServiceType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search warehouseServiceTypes by filter
     * Returns the list of warehouseServiceTypes that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WarehouseServiceType>}
     */
    this.getWarehouseServiceTypeByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [WarehouseServiceType];

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseServiceTypeById operation.
     * @callback module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WarehouseServiceType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a warehouseServiceType by id
     * Returns the warehouseServiceType identified by the specified id.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to be returned.
     * @param {module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WarehouseServiceType}
     */
    this.getWarehouseServiceTypeById = function(warehouseServiceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling getWarehouseServiceTypeById");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = WarehouseServiceType;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseServiceTypeFiles operation.
     * @callback module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the files for a warehouseServiceType.
     * Get all existing warehouseServiceType files.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to get files for
     * @param {module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWarehouseServiceTypeFiles = function(warehouseServiceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling getWarehouseServiceTypeFiles");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWarehouseServiceTypeTags operation.
     * @callback module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a warehouseServiceType.
     * Get all existing warehouseServiceType tags.
     * @param {Number} warehouseServiceTypeId Id of the warehouseServiceType to get tags for
     * @param {module:api/WarehouseServiceTypeApi~getWarehouseServiceTypeTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getWarehouseServiceTypeTags = function(warehouseServiceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'warehouseServiceTypeId' is set
      if (warehouseServiceTypeId === undefined || warehouseServiceTypeId === null) {
        throw new Error("Missing the required parameter 'warehouseServiceTypeId' when calling getWarehouseServiceTypeTags");
      }


      var pathParams = {
        'warehouseServiceTypeId': warehouseServiceTypeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/{warehouseServiceTypeId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWarehouseServiceType operation.
     * @callback module:api/WarehouseServiceTypeApi~updateWarehouseServiceTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a warehouseServiceType
     * Updates an existing warehouseServiceType using the specified data.
     * @param {module:model/WarehouseServiceType} body WarehouseServiceType to be updated.
     * @param {module:api/WarehouseServiceTypeApi~updateWarehouseServiceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWarehouseServiceType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWarehouseServiceType");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWarehouseServiceTypeCustomFields operation.
     * @callback module:api/WarehouseServiceTypeApi~updateWarehouseServiceTypeCustomFieldsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a warehouseServiceType custom fields
     * Updates an existing warehouseServiceType custom fields using the specified data.
     * @param {module:model/WarehouseServiceType} body WarehouseServiceType to be updated.
     * @param {module:api/WarehouseServiceTypeApi~updateWarehouseServiceTypeCustomFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateWarehouseServiceTypeCustomFields = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWarehouseServiceTypeCustomFields");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/warehouseServiceType/customFields', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
