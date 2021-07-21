/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ResourceSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import {
  ResourceSku,
  ResourceSkusListNextOptionalParams,
  ResourceSkusListOptionalParams,
  ResourceSkusListResponse,
  ResourceSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ResourceSkus. */
export class ResourceSkusImpl implements ResourceSkus {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class ResourceSkus class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of Microsoft.Compute SKUs available for your Subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourceSkusListOptionalParams
  ): PagedAsyncIterableIterator<ResourceSku> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourceSkusListOptionalParams
  ): AsyncIterableIterator<ResourceSku[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ResourceSkusListOptionalParams
  ): AsyncIterableIterator<ResourceSku> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of Microsoft.Compute SKUs available for your Subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourceSkusListOptionalParams
  ): Promise<ResourceSkusListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourceSkusListNextOptionalParams
  ): Promise<ResourceSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
