(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CustomerInvoiceTemplateLine'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerInvoiceTemplateLine'));
  } else {
    // Browser globals (root is window)
    if (!root.infoplus) {
      root.infoplus = {};
    }
    root.infoplus.CustomerInvoiceTemplateLineApi = factory(root.infoplus.ApiClient, root.infoplus.CustomerInvoiceTemplateLine);
  }
}(this, function(ApiClient, CustomerInvoiceTemplateLine) {
  'use strict';

  /**
   * CustomerInvoiceTemplateLine service.
   * @module api/CustomerInvoiceTemplateLineApi
   * @version beta
   */

  /**
   * Constructs a new CustomerInvoiceTemplateLineApi. 
   * @alias module:api/CustomerInvoiceTemplateLineApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomerInvoiceTemplateLineAudit operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~addCustomerInvoiceTemplateLineAuditCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new audit for a customerInvoiceTemplateLine
     * Adds an audit to an existing customerInvoiceTemplateLine.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to add an audit to
     * @param {String} customerInvoiceTemplateLineAudit The audit to add
     * @param {module:api/CustomerInvoiceTemplateLineApi~addCustomerInvoiceTemplateLineAuditCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerInvoiceTemplateLineAudit = function(customerInvoiceTemplateLineId, customerInvoiceTemplateLineAudit, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling addCustomerInvoiceTemplateLineAudit";
      }

      // verify the required parameter 'customerInvoiceTemplateLineAudit' is set
      if (customerInvoiceTemplateLineAudit == undefined || customerInvoiceTemplateLineAudit == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineAudit' when calling addCustomerInvoiceTemplateLineAudit";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId,
        'customerInvoiceTemplateLineAudit': customerInvoiceTemplateLineAudit
      };
      var queryParams = {
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
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/audit/{customerInvoiceTemplateLineAudit}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCustomerInvoiceTemplateLineTag operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~addCustomerInvoiceTemplateLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new tags for a customerInvoiceTemplateLine.
     * Adds a tag to an existing customerInvoiceTemplateLine.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to add a tag to
     * @param {String} customerInvoiceTemplateLineTag The tag to add
     * @param {module:api/CustomerInvoiceTemplateLineApi~addCustomerInvoiceTemplateLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCustomerInvoiceTemplateLineTag = function(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling addCustomerInvoiceTemplateLineTag";
      }

      // verify the required parameter 'customerInvoiceTemplateLineTag' is set
      if (customerInvoiceTemplateLineTag == undefined || customerInvoiceTemplateLineTag == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineTag' when calling addCustomerInvoiceTemplateLineTag";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId,
        'customerInvoiceTemplateLineTag': customerInvoiceTemplateLineTag
      };
      var queryParams = {
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
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag/{customerInvoiceTemplateLineTag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerInvoiceTemplateLine operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~deleteCustomerInvoiceTemplateLineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customerInvoiceTemplateLine
     * Deletes the customerInvoiceTemplateLine identified by the specified id.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to be deleted.
     * @param {module:api/CustomerInvoiceTemplateLineApi~deleteCustomerInvoiceTemplateLineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerInvoiceTemplateLine = function(customerInvoiceTemplateLineId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling deleteCustomerInvoiceTemplateLine";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerInvoiceTemplateLineTag operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~deleteCustomerInvoiceTemplateLineTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag for a customerInvoiceTemplateLine.
     * Deletes an existing customerInvoiceTemplateLine tag using the specified data.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to remove tag from
     * @param {String} customerInvoiceTemplateLineTag The tag to delete
     * @param {module:api/CustomerInvoiceTemplateLineApi~deleteCustomerInvoiceTemplateLineTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerInvoiceTemplateLineTag = function(customerInvoiceTemplateLineId, customerInvoiceTemplateLineTag, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling deleteCustomerInvoiceTemplateLineTag";
      }

      // verify the required parameter 'customerInvoiceTemplateLineTag' is set
      if (customerInvoiceTemplateLineTag == undefined || customerInvoiceTemplateLineTag == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineTag' when calling deleteCustomerInvoiceTemplateLineTag";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId,
        'customerInvoiceTemplateLineTag': customerInvoiceTemplateLineTag
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag/{customerInvoiceTemplateLineTag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateLineByFilter operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineByFilterCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerInvoiceTemplateLine>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search customerInvoiceTemplateLines by filter
     * Returns the list of customerInvoiceTemplateLines that match the given filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Query string, used to filter results.
     * @param {Integer} opts.page Result page number.  Defaults to 1.
     * @param {Integer} opts.limit Maximum results per page.  Defaults to 20.  Max allowed value is 250.
     * @param {String} opts.sort Sort results by specified field.
     * @param {module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/CustomerInvoiceTemplateLine>}
     */
    this.getCustomerInvoiceTemplateLineByFilter = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'limit': opts['limit'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [CustomerInvoiceTemplateLine];

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateLineById operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInvoiceTemplateLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customerInvoiceTemplateLine by id
     * Returns the customerInvoiceTemplateLine identified by the specified id.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to be returned.
     * @param {module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomerInvoiceTemplateLine}
     */
    this.getCustomerInvoiceTemplateLineById = function(customerInvoiceTemplateLineId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling getCustomerInvoiceTemplateLineById";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId
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
      var returnType = CustomerInvoiceTemplateLine;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerInvoiceTemplateLineTags operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for a customerInvoiceTemplateLine.
     * Get all existing customerInvoiceTemplateLine tags.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to get tags for
     * @param {module:api/CustomerInvoiceTemplateLineApi~getCustomerInvoiceTemplateLineTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCustomerInvoiceTemplateLineTags = function(customerInvoiceTemplateLineId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling getCustomerInvoiceTemplateLineTags";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/{customerInvoiceTemplateLineId}/tag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDuplicateCustomerInvoiceTemplateLineById operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~getDuplicateCustomerInvoiceTemplateLineByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInvoiceTemplateLine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a duplicated a customerInvoiceTemplateLine by id
     * Returns a duplicated customerInvoiceTemplateLine identified by the specified id.
     * @param {Integer} customerInvoiceTemplateLineId Id of the customerInvoiceTemplateLine to be duplicated.
     * @param {module:api/CustomerInvoiceTemplateLineApi~getDuplicateCustomerInvoiceTemplateLineByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CustomerInvoiceTemplateLine}
     */
    this.getDuplicateCustomerInvoiceTemplateLineById = function(customerInvoiceTemplateLineId, callback) {
      var postBody = null;

      // verify the required parameter 'customerInvoiceTemplateLineId' is set
      if (customerInvoiceTemplateLineId == undefined || customerInvoiceTemplateLineId == null) {
        throw "Missing the required parameter 'customerInvoiceTemplateLineId' when calling getDuplicateCustomerInvoiceTemplateLineById";
      }


      var pathParams = {
        'customerInvoiceTemplateLineId': customerInvoiceTemplateLineId
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
      var returnType = CustomerInvoiceTemplateLine;

      return this.apiClient.callApi(
        '/beta/customerInvoiceTemplateLine/duplicate/{customerInvoiceTemplateLineId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerInvoiceTemplateLine operation.
     * @callback module:api/CustomerInvoiceTemplateLineApi~updateCustomerInvoiceTemplateLineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customerInvoiceTemplateLine
     * Updates an existing customerInvoiceTemplateLine using the specified data.
     * @param {module:model/CustomerInvoiceTemplateLine} body CustomerInvoiceTemplateLine to be updated.
     * @param {module:api/CustomerInvoiceTemplateLineApi~updateCustomerInvoiceTemplateLineCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomerInvoiceTemplateLine = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateCustomerInvoiceTemplateLine";
      }


      var pathParams = {
      };
      var queryParams = {
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
        '/beta/customerInvoiceTemplateLine', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));