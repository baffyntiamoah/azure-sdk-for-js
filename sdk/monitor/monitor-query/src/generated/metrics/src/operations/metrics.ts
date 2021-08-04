/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Metrics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";
import { MetricsListOptionalParams, MetricsListResponse } from "../models";

/** Class representing a Metrics. */
export class MetricsImpl implements Metrics {
  private readonly client: MonitorManagementClientContext;

  /**
   * Initialize a new instance of the class Metrics class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Lists the metric values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricsListOptionalParams
  ): Promise<MetricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.apiVersion,
    Parameters.metricnamespace
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
