let nock = require('nock');

module.exports.hash = "cc8335d3f814b7dc5fa1169bc0a92aa6";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1/prebuilt/receipt/analyze', {"source":"https://storageaccount/testingdata/contoso-allinone.jpg?sastoken"})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/2fdf6716-9ef1-460b-9b1a-eaa45c06356b',
  'x-envoy-upstream-service-time',
  '351',
  'apim-request-id',
  '2fdf6716-9ef1-460b-9b1a-eaa45c06356b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:13:47 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/2fdf6716-9ef1-460b-9b1a-eaa45c06356b')
  .reply(200, {"status":"notStarted","createdDateTime":"2021-05-25T18:13:48Z","lastUpdatedDateTime":"2021-05-25T18:13:48Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  'e90e5de4-2704-4200-961a-d2f147803a15',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:13:48 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/2fdf6716-9ef1-460b-9b1a-eaa45c06356b')
  .reply(200, {"status":"notStarted","createdDateTime":"2021-05-25T18:13:48Z","lastUpdatedDateTime":"2021-05-25T18:13:48Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '12',
  'apim-request-id',
  '755faf87-a3eb-4d02-9f53-718a9d6b4961',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:13:48 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/prebuilt/receipt/analyzeResults/2fdf6716-9ef1-460b-9b1a-eaa45c06356b')
  .reply(200, {"status":"succeeded","createdDateTime":"2021-05-25T18:13:48Z","lastUpdatedDateTime":"2021-05-25T18:13:52Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0.1273,"width":1688,"height":3000,"unit":"pixel"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Name":{"type":"string","valueString":"Cappuccino","text":"Cappuccino","boundingBox":[304,1585,658,1598,657,1688,302,1679],"page":1,"confidence":0.558},"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[244,1581,286,1584,283,1678,241,1675],"page":1,"confidence":0.936},"TotalPrice":{"type":"number","valueNumber":2.2,"text":"$2.20","boundingBox":[1106,1579,1260,1574,1263,1656,1108,1662],"page":1,"confidence":0.972}}},{"type":"object","valueObject":{"Name":{"type":"string","valueString":"BACON & EGGS","text":"BACON & EGGS","boundingBox":[293,1839,737,1839,737,1924,293,1924],"page":1,"confidence":0.906},"Quantity":{"type":"number","valueNumber":1,"text":"1","boundingBox":[227,1839,275,1839,275,1924,226,1924],"page":1,"confidence":0.936},"TotalPrice":{"type":"number","valueNumber":9.5,"text":"$9.5","boundingBox":[1134,1948,1252,1948,1252,2041,1134,2041],"page":1,"confidence":0.977}}}]},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[298.6,675.8,844.8,782.2,810.6,957.9,264.4,851.5],"page":1,"confidence":0.974},"MerchantName":{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[308,570,515,627,500,685,290,634],"page":1,"confidence":0.974},"MerchantPhoneNumber":{"type":"phoneNumber","valuePhoneNumber":"+919876543210","text":"987-654-3210","boundingBox":[274,1000,651,1049,643,1125,268,1076],"page":1,"confidence":0.987},"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.99},"Subtotal":{"type":"number","valueNumber":11.7,"text":"$ 11.70","boundingBox":[1082,2225.1,1307.1,2228,1306,2315.4,1080.9,2312.5],"page":1,"confidence":0.967},"Tax":{"type":"number","valueNumber":1.17,"text":"$ 1.17","boundingBox":[1125,2352.1,1307.4,2361,1303,2452.9,1120.6,2444],"page":1,"confidence":0.985},"Tip":{"type":"number","valueNumber":1.63,"text":"$ 1.63","boundingBox":[1034,2481.7,1268.6,2488,1266,2583.5,1031.5,2577.2],"page":1,"confidence":0.941},"Total":{"type":"number","valueNumber":14.5,"text":"$14.50","boundingBox":[1033,2623,1374,2641,1368,2757,1027,2740],"page":1,"confidence":0.978},"TransactionDate":{"type":"date","valueDate":"2019-10-06","text":"6/10/2019","boundingBox":[259,1224,514,1247,509,1331,255,1312],"page":1,"confidence":0.987},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[531,1248,681,1262,675,1341,526,1333],"page":1,"confidence":0.985}}}]}}, [
  'Content-Length',
  '2837',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '19',
  'apim-request-id',
  'baaabf13-ce1f-4f18-a672-aaf24a76c376',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 25 May 2021 18:13:52 GMT'
]);
