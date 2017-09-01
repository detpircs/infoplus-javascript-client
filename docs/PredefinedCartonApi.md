# infoplus.PredefinedCartonApi

All URIs are relative to *https://kingsrook.localhost-testsubdomain1.infopluswms.com:8443/infoplus-wms/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPredefinedCartonById**](PredefinedCartonApi.md#getPredefinedCartonById) | **GET** /beta/predefinedCarton/{predefinedCartonId} | Get a predefinedCarton by id
[**getPredefinedCartonBySearchText**](PredefinedCartonApi.md#getPredefinedCartonBySearchText) | **GET** /beta/predefinedCarton/search | Search predefinedCartons


<a name="getPredefinedCartonById"></a>
# **getPredefinedCartonById**
> PredefinedCarton getPredefinedCartonById(predefinedCartonId)

Get a predefinedCarton by id

Returns the predefinedCarton identified by the specified id.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PredefinedCartonApi()

var predefinedCartonId = "predefinedCartonId_example"; // {String} Id of predefinedCarton to be returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPredefinedCartonById(predefinedCartonId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predefinedCartonId** | **String**| Id of predefinedCarton to be returned. | 

### Return type

[**PredefinedCarton**](PredefinedCarton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPredefinedCartonBySearchText"></a>
# **getPredefinedCartonBySearchText**
> [PredefinedCarton] getPredefinedCartonBySearchText(opts)

Search predefinedCartons

Returns the list of predefinedCartons that match the given searchText.

### Example
```javascript
var infoplus = require('infoplus-javascript-client');
var defaultClient = infoplus.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['API-Key'] = "Token"

var apiInstance = new infoplus.PredefinedCartonApi()

var opts = { 
  'searchText': "searchText_example", // {String} Search text, used to filter results.
  'page': 56, // {Integer} Result page number.  Defaults to 1.
  'limit': 56 // {Integer} Maximum results per page.  Defaults to 20.  Max allowed value is 250.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPredefinedCartonBySearchText(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **String**| Search text, used to filter results. | [optional] 
 **page** | **Integer**| Result page number.  Defaults to 1. | [optional] 
 **limit** | **Integer**| Maximum results per page.  Defaults to 20.  Max allowed value is 250. | [optional] 

### Return type

[**[PredefinedCarton]**](PredefinedCarton.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
