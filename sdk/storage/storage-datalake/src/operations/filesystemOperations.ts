/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/filesystemOperationsMappers";
import * as Parameters from "../models/parameters";
import { DataLakeStorageClientContext } from "../dataLakeStorageClientContext";

/** Class representing a FilesystemOperations. */
export class FilesystemOperations {
  private readonly client: DataLakeStorageClientContext;

  /**
   * Create a FilesystemOperations.
   * @param client - Reference to the service client.
   */
  constructor(client: DataLakeStorageClientContext) {
    this.client = client;
  }

  /**
   * List filesystems and their properties in given account.
   * @summary List Filesystems
   * @param options - The optional parameters
   * @returns Promise<Models.FilesystemListResponse>
   */
  list(options?: Models.FilesystemListOptionalParams): Promise<Models.FilesystemListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.FilesystemList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    options: Models.FilesystemListOptionalParams,
    callback: msRest.ServiceCallback<Models.FilesystemList>
  ): void;
  list(
    options?: Models.FilesystemListOptionalParams | msRest.ServiceCallback<Models.FilesystemList>,
    callback?: msRest.ServiceCallback<Models.FilesystemList>
  ): Promise<Models.FilesystemListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.FilesystemListResponse>;
  }

  /**
   * Create a filesystem rooted at the specified location. If the filesystem already exists, the
   * operation fails.  This operation does not support conditional HTTP requests.
   * @summary Create Filesystem
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options - The optional parameters
   * @returns Promise<Models.FilesystemCreateResponse>
   */
  create(
    filesystem: string,
    options?: Models.FilesystemCreateOptionalParams
  ): Promise<Models.FilesystemCreateResponse>;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param callback The callback
   */
  create(filesystem: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(
    filesystem: string,
    options: Models.FilesystemCreateOptionalParams,
    callback: msRest.ServiceCallback<void>
  ): void;
  create(
    filesystem: string,
    options?: Models.FilesystemCreateOptionalParams | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<Models.FilesystemCreateResponse> {
    return this.client.sendOperationRequest(
      {
        filesystem,
        options
      },
      createOperationSpec,
      callback
    ) as Promise<Models.FilesystemCreateResponse>;
  }

  /**
   * Set properties for the filesystem.  This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @summary Set Filesystem Properties
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options - The optional parameters
   * @returns Promise<Models.FilesystemSetPropertiesResponse>
   */
  setProperties(
    filesystem: string,
    options?: Models.FilesystemSetPropertiesOptionalParams
  ): Promise<Models.FilesystemSetPropertiesResponse>;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param callback The callback
   */
  setProperties(filesystem: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  setProperties(
    filesystem: string,
    options: Models.FilesystemSetPropertiesOptionalParams,
    callback: msRest.ServiceCallback<void>
  ): void;
  setProperties(
    filesystem: string,
    options?: Models.FilesystemSetPropertiesOptionalParams | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<Models.FilesystemSetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        filesystem,
        options
      },
      setPropertiesOperationSpec,
      callback
    ) as Promise<Models.FilesystemSetPropertiesResponse>;
  }

  /**
   * All system and user-defined filesystem properties are specified in the response headers.
   * @summary Get Filesystem Properties.
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options - The optional parameters
   * @returns Promise<Models.FilesystemGetPropertiesResponse>
   */
  getProperties(
    filesystem: string,
    options?: Models.FilesystemGetPropertiesOptionalParams
  ): Promise<Models.FilesystemGetPropertiesResponse>;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param callback The callback
   */
  getProperties(filesystem: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(
    filesystem: string,
    options: Models.FilesystemGetPropertiesOptionalParams,
    callback: msRest.ServiceCallback<void>
  ): void;
  getProperties(
    filesystem: string,
    options?: Models.FilesystemGetPropertiesOptionalParams | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<Models.FilesystemGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        filesystem,
        options
      },
      getPropertiesOperationSpec,
      callback
    ) as Promise<Models.FilesystemGetPropertiesResponse>;
  }

  /**
   * Marks the filesystem for deletion.  When a filesystem is deleted, a filesystem with the same
   * identifier cannot be created for at least 30 seconds. While the filesystem is being deleted,
   * attempts to create a filesystem with the same identifier will fail with status code 409
   * (Conflict), with the service returning additional error information indicating that the
   * filesystem is being deleted. All other operations, including operations on any files or
   * directories within the filesystem, will fail with status code 404 (Not Found) while the
   * filesystem is being deleted. This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @summary Delete Filesystem
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options - The optional parameters
   * @returns Promise<Models.FilesystemDeleteResponse>
   */
  deleteMethod(
    filesystem: string,
    options?: Models.FilesystemDeleteMethodOptionalParams
  ): Promise<Models.FilesystemDeleteResponse>;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param callback The callback
   */
  deleteMethod(filesystem: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param filesystem The filesystem identifier.  The value must start and end with a letter or
   * number and must contain only letters, numbers, and the dash (-) character.  Consecutive dashes
   * are not permitted.  All letters must be lowercase.  The value must have between 3 and 63
   * characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(
    filesystem: string,
    options: Models.FilesystemDeleteMethodOptionalParams,
    callback: msRest.ServiceCallback<void>
  ): void;
  deleteMethod(
    filesystem: string,
    options?: Models.FilesystemDeleteMethodOptionalParams | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<Models.FilesystemDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        filesystem,
        options
      },
      deleteMethodOperationSpec,
      callback
    ) as Promise<Models.FilesystemDeleteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.accountName, Parameters.dnsSuffix],
  queryParameters: [
    Parameters.resource0,
    Parameters.prefix,
    Parameters.continuation,
    Parameters.maxResults,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.xMsClientRequestId,
    Parameters.xMsDate,
    Parameters.xMsVersion,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FilesystemList,
      headersMapper: Mappers.FilesystemListHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{filesystem}",
  urlParameters: [Parameters.accountName, Parameters.dnsSuffix, Parameters.filesystem],
  queryParameters: [Parameters.resource1, Parameters.timeout],
  headerParameters: [
    Parameters.xMsProperties,
    Parameters.xMsClientRequestId,
    Parameters.xMsDate,
    Parameters.xMsVersion,
    Parameters.acceptLanguage
  ],
  responses: {
    201: {
      headersMapper: Mappers.FilesystemCreateHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError
    }
  },
  serializer
};

const setPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{filesystem}",
  urlParameters: [Parameters.accountName, Parameters.dnsSuffix, Parameters.filesystem],
  queryParameters: [Parameters.resource1, Parameters.timeout],
  headerParameters: [
    Parameters.xMsProperties,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.xMsClientRequestId,
    Parameters.xMsDate,
    Parameters.xMsVersion,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.FilesystemSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError
    }
  },
  serializer
};

const getPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "{filesystem}",
  urlParameters: [Parameters.accountName, Parameters.dnsSuffix, Parameters.filesystem],
  queryParameters: [Parameters.resource1, Parameters.timeout],
  headerParameters: [
    Parameters.xMsClientRequestId,
    Parameters.xMsDate,
    Parameters.xMsVersion,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.FilesystemGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{filesystem}",
  urlParameters: [Parameters.accountName, Parameters.dnsSuffix, Parameters.filesystem],
  queryParameters: [Parameters.resource1, Parameters.timeout],
  headerParameters: [
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.xMsClientRequestId,
    Parameters.xMsDate,
    Parameters.xMsVersion,
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.FilesystemDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.DataLakeStorageError
    }
  },
  serializer
};
