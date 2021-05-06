/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a Service.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the status of service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListResponse>
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ServiceListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param callback The callback
   */
  list(
    resourceGroupName: string,
    accountName: string,
    callback: msRest.ServiceCallback<Models.ServiceResourceListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.ServiceResourceListResult>
  ): void;
  list(
    resourceGroupName: string,
    accountName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceResourceListResult>,
    callback?: msRest.ServiceCallback<Models.ServiceResourceListResult>
  ): Promise<Models.ServiceListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.ServiceListResponse>;
  }

  /**
   * Creates a service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param createUpdateParameters The Service resource parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceCreateResponse>
   */
  create(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    createUpdateParameters: Models.ServiceResource,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ServiceCreateResponse> {
    return this.beginCreate(
      resourceGroupName,
      accountName,
      serviceName,
      createUpdateParameters,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<Models.ServiceCreateResponse>;
  }

  /**
   * Gets the status of service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetResponse>
   */
  get(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.ServiceGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    callback: msRest.ServiceCallback<Models.ServiceResource>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.ServiceResource>
  ): void;
  get(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceResource>,
    callback?: msRest.ServiceCallback<Models.ServiceResource>
  ): Promise<Models.ServiceGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        serviceName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.ServiceGetResponse>;
  }

  /**
   * Deletes service with the given serviceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(
      resourceGroupName,
      accountName,
      serviceName,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param createUpdateParameters The Service resource parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    createUpdateParameters: Models.ServiceResource,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        serviceName,
        createUpdateParameters,
        options
      },
      beginCreateOperationSpec,
      options
    );
  }

  /**
   * Deletes service with the given serviceName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param serviceName Cosmos DB service name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(
    resourceGroupName: string,
    accountName: string,
    serviceName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        serviceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.accountName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.serviceName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.serviceName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "createUpdateParameters",
    mapper: {
      ...Mappers.ServiceResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.serviceName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};