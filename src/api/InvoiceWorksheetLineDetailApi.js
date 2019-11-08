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
    define(['ApiClient', 'model/InvoiceWorksheetLineDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InvoiceWorksheetLineDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.InvoiceWorksheetLineDetailApi = factory(root.infoplus.ApiClient, root.infoplus.InvoiceWorksheetLineDetail);
  }
}(this, function(ApiClient, InvoiceWorksheetLineDetail) {
  'use strict';

  /**
   * InvoiceWorksheetLineDetail service.
   * @module api/InvoiceWorksheetLineDetailApi
   * @version beta
   */

  /**
   * Constructs a new InvoiceWorksheetLineDetailApi. 
   * @alias module:api/InvoiceWorksheetLineDetailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInvoiceWorksheetLineDetailAudit operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for an invoiceWorksheetLineDetail
     * Adds an audit to an existing invoiceWorksheetLineDetail.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to add an audit to
     * @param {String} invoiceWorksheetLineDetailAudit The audit to add
     * @param {module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetLineDetailAudit = function(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailAudit, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling addInvoiceWorksheetLineDetailAudit");
      }

      // verify the required parameter 'invoiceWorksheetLineDetailAudit' is set
      if (invoiceWorksheetLineDetailAudit === undefined || invoiceWorksheetLineDetailAudit === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailAudit' when calling addInvoiceWorksheetLineDetailAudit");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId,
        'invoiceWorksheetLineDetailAudit': invoiceWorksheetLineDetailAudit
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
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/audit/{invoiceWorksheetLineDetailAudit}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetLineDetailFile operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a file to an invoiceWorksheetLineDetail
     * Adds a file to an existing invoiceWorksheetLineDetail.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to add a file to
     * @param {String} fileName Name of file
     * @param {module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetLineDetailFile = function(invoiceWorksheetLineDetailId, fileName, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling addInvoiceWorksheetLineDetailFile");
      }

      // verify the required parameter 'fileName' is set
      if (fileName === undefined || fileName === null) {
        throw new Error("Missing the required parameter 'fileName' when calling addInvoiceWorksheetLineDetailFile");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId,
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
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/file/{fileName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addInvoiceWorksheetLineDetailTag operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for an invoiceWorksheetLineDetail.
     * Adds a tag to an existing invoiceWorksheetLineDetail.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to add a tag to
     * @param {String} invoiceWorksheetLineDetailTag The tag to add
     * @param {module:api/InvoiceWorksheetLineDetailApi~addInvoiceWorksheetLineDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addInvoiceWorksheetLineDetailTag = function(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling addInvoiceWorksheetLineDetailTag");
      }

      // verify the required parameter 'invoiceWorksheetLineDetailTag' is set
      if (invoiceWorksheetLineDetailTag === undefined || invoiceWorksheetLineDetailTag === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailTag' when calling addInvoiceWorksheetLineDetailTag");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId,
        'invoiceWorksheetLineDetailTag': invoiceWorksheetLineDetailTag
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
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag/{invoiceWorksheetLineDetailTag}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvoiceWorksheetLineDetailTag operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~deleteInvoiceWorksheetLineDetailTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for an invoiceWorksheetLineDetail.
     * Deletes an existing invoiceWorksheetLineDetail tag using the specified data.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to remove tag from
     * @param {String} invoiceWorksheetLineDetailTag The tag to delete
     * @param {module:api/InvoiceWorksheetLineDetailApi~deleteInvoiceWorksheetLineDetailTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvoiceWorksheetLineDetailTag = function(invoiceWorksheetLineDetailId, invoiceWorksheetLineDetailTag, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling deleteInvoiceWorksheetLineDetailTag");
      }

      // verify the required parameter 'invoiceWorksheetLineDetailTag' is set
      if (invoiceWorksheetLineDetailTag === undefined || invoiceWorksheetLineDetailTag === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailTag' when calling deleteInvoiceWorksheetLineDetailTag");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId,
        'invoiceWorksheetLineDetailTag': invoiceWorksheetLineDetailTag
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
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag/{invoiceWorksheetLineDetailTag}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateInvoiceWorksheetLineDetailById operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~getDuplicateInvoiceWorksheetLineDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheetLineDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated an invoiceWorksheetLineDetail by id
     * Returns a duplicated invoiceWorksheetLineDetail identified by the specified id.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to be duplicated.
     * @param {module:api/InvoiceWorksheetLineDetailApi~getDuplicateInvoiceWorksheetLineDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceWorksheetLineDetail}
     */
    this.getDuplicateInvoiceWorksheetLineDetailById = function(invoiceWorksheetLineDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling getDuplicateInvoiceWorksheetLineDetailById");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId
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
      var returnType = InvoiceWorksheetLineDetail;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLineDetail/duplicate/{invoiceWorksheetLineDetailId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineDetailByFilter operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceWorksheetLineDetail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search invoiceWorksheetLineDetails by filter
     * Returns the list of invoiceWorksheetLineDetails that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Number} opts.page Result page number.  Defaults to 1.
     * @param {Number} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InvoiceWorksheetLineDetail>}
     */
    this.getInvoiceWorksheetLineDetailByFilter = function(opts, callback) {
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
      var returnType = [InvoiceWorksheetLineDetail];

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLineDetail/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineDetailById operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceWorksheetLineDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an invoiceWorksheetLineDetail by id
     * Returns the invoiceWorksheetLineDetail identified by the specified id.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to be returned.
     * @param {module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceWorksheetLineDetail}
     */
    this.getInvoiceWorksheetLineDetailById = function(invoiceWorksheetLineDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling getInvoiceWorksheetLineDetailById");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId
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
      var returnType = InvoiceWorksheetLineDetail;

      return this.apiClient.callApi(
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceWorksheetLineDetailTags operation.
     * @callback module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for an invoiceWorksheetLineDetail.
     * Get all existing invoiceWorksheetLineDetail tags.
     * @param {Number} invoiceWorksheetLineDetailId Id of the invoiceWorksheetLineDetail to get tags for
     * @param {module:api/InvoiceWorksheetLineDetailApi~getInvoiceWorksheetLineDetailTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getInvoiceWorksheetLineDetailTags = function(invoiceWorksheetLineDetailId, callback) {
      var postBody = null;

      // verify the required parameter 'invoiceWorksheetLineDetailId' is set
      if (invoiceWorksheetLineDetailId === undefined || invoiceWorksheetLineDetailId === null) {
        throw new Error("Missing the required parameter 'invoiceWorksheetLineDetailId' when calling getInvoiceWorksheetLineDetailTags");
      }


      var pathParams = {
        'invoiceWorksheetLineDetailId': invoiceWorksheetLineDetailId
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
        '/beta/invoiceWorksheetLineDetail/{invoiceWorksheetLineDetailId}/tag', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));