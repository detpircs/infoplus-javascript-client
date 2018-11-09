# infoplus.ReceivingProcessApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReceivingProcessAudit**](ReceivingProcessApi.md#addReceivingProcessAudit) | **PUT** /beta/receivingProcess/{receivingProcessId}/audit/{receivingProcessAudit} | Add new audit for a receivingProcess
[**addReceivingProcessTag**](ReceivingProcessApi.md#addReceivingProcessTag) | **PUT** /beta/receivingProcess/{receivingProcessId}/tag/{receivingProcessTag} | Add new tags for a receivingProcess.
[**deleteReceivingProcess**](ReceivingProcessApi.md#deleteReceivingProcess) | **DELETE** /beta/receivingProcess/{receivingProcessId} | Delete a receivingProcess
[**deleteReceivingProcessTag**](ReceivingProcessApi.md#deleteReceivingProcessTag) | **DELETE** /beta/receivingProcess/{receivingProcessId}/tag/{receivingProcessTag} | Delete a tag for a receivingProcess.
[**getDuplicateReceivingProcessById**](ReceivingProcessApi.md#getDuplicateReceivingProcessById) | **GET** /beta/receivingProcess/duplicate/{receivingProcessId} | Get a duplicated a receivingProcess by id
[**getReceivingProcessByFilter**](ReceivingProcessApi.md#getReceivingProcessByFilter) | **GET** /beta/receivingProcess/search | Search receivingProcesses by filter
[**getReceivingProcessById**](ReceivingProcessApi.md#getReceivingProcessById) | **GET** /beta/receivingProcess/{receivingProcessId} | Get a receivingProcess by id
[**getReceivingProcessTags**](ReceivingProcessApi.md#getReceivingProcessTags) | **GET** /beta/receivingProcess/{receivingProcessId}/tag | Get the tags for a receivingProcess.
[**updateReceivingProcessCustomFields**](ReceivingProcessApi.md#updateReceivingProcessCustomFields) | **PUT** /beta/receivingProcess/customFields | Update a receivingProcess custom fields


<a name="addReceivingProcessAudit"></a>
# **addReceivingProcessAudit**
> addReceivingProcessAudit(receivingProcessId, receivingProcessAudit)

Add new audit for a receivingProcess

Adds an audit to an existing receivingProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to add an audit to

var receivingProcessAudit = "receivingProcessAudit_example"; // String | The audit to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReceivingProcessAudit(receivingProcessId, receivingProcessAudit, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to add an audit to | 
 **receivingProcessAudit** | **String**| The audit to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addReceivingProcessTag"></a>
# **addReceivingProcessTag**
> addReceivingProcessTag(receivingProcessId, receivingProcessTag)

Add new tags for a receivingProcess.

Adds a tag to an existing receivingProcess.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to add a tag to

var receivingProcessTag = "receivingProcessTag_example"; // String | The tag to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addReceivingProcessTag(receivingProcessId, receivingProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to add a tag to | 
 **receivingProcessTag** | **String**| The tag to add | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReceivingProcess"></a>
# **deleteReceivingProcess**
> deleteReceivingProcess(receivingProcessId)

Delete a receivingProcess

Deletes the receivingProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReceivingProcess(receivingProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to be deleted. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteReceivingProcessTag"></a>
# **deleteReceivingProcessTag**
> deleteReceivingProcessTag(receivingProcessId, receivingProcessTag)

Delete a tag for a receivingProcess.

Deletes an existing receivingProcess tag using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to remove tag from

var receivingProcessTag = "receivingProcessTag_example"; // String | The tag to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteReceivingProcessTag(receivingProcessId, receivingProcessTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to remove tag from | 
 **receivingProcessTag** | **String**| The tag to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDuplicateReceivingProcessById"></a>
# **getDuplicateReceivingProcessById**
> ReceivingProcess getDuplicateReceivingProcessById(receivingProcessId)

Get a duplicated a receivingProcess by id

Returns a duplicated receivingProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to be duplicated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDuplicateReceivingProcessById(receivingProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to be duplicated. | 

### Return type

[**ReceivingProcess**](ReceivingProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReceivingProcessByFilter"></a>
# **getReceivingProcessByFilter**
> [ReceivingProcess] getReceivingProcessByFilter(opts)

Search receivingProcesses by filter

Returns the list of receivingProcesses that match the given filter.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var opts = { 
  'filter': "filter_example", // String | Query string, used to filter results.
  'page': 56, // Number | Result page number.  Defaults to 1.
  'limit': 56, // Number | Maximum results per page.  Defaults to 20.  Max allowed value is 250.
  'sort': "sort_example" // String | Sort results by specified field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceivingProcessByFilter(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Query string, used to filter results. | [optional] 
 **page** | **Number**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Number**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 
 **sort** | **String**| Sort results by specified field. | [optional] 

### Return type

[**[ReceivingProcess]**](ReceivingProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReceivingProcessById"></a>
# **getReceivingProcessById**
> ReceivingProcess getReceivingProcessById(receivingProcessId)

Get a receivingProcess by id

Returns the receivingProcess identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceivingProcessById(receivingProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to be returned. | 

### Return type

[**ReceivingProcess**](ReceivingProcess.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReceivingProcessTags"></a>
# **getReceivingProcessTags**
> getReceivingProcessTags(receivingProcessId)

Get the tags for a receivingProcess.

Get all existing receivingProcess tags.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var receivingProcessId = 56; // Number | Id of the receivingProcess to get tags for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getReceivingProcessTags(receivingProcessId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receivingProcessId** | **Number**| Id of the receivingProcess to get tags for | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateReceivingProcessCustomFields"></a>
# **updateReceivingProcessCustomFields**
> updateReceivingProcessCustomFields(body)

Update a receivingProcess custom fields

Updates an existing receivingProcess custom fields using the specified data.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new infoplus.ReceivingProcessApi();

var body = new infoplus.ReceivingProcess(); // ReceivingProcess | ReceivingProcess to be updated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateReceivingProcessCustomFields(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReceivingProcess**](ReceivingProcess.md)| ReceivingProcess to be updated. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

