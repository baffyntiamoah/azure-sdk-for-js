/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RemoteRenderingImpl } from "./operations";
import { RemoteRendering } from "./operationsInterfaces";
import { RemoteRenderingRestClientContext } from "./remoteRenderingRestClientContext";
import { RemoteRenderingRestClientOptionalParams } from "./models";

/** @internal */
export class RemoteRenderingRestClient extends RemoteRenderingRestClientContext {
  /**
   * Initializes a new instance of the RemoteRenderingRestClient class.
   * @param endpoint The endpoint to use e.g. https://remoterendering.eastus.mixedreality.azure.com. A
   *                 list can be found at https://docs.microsoft.com/azure/remote-rendering/reference/regions.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: RemoteRenderingRestClientOptionalParams
  ) {
    super(endpoint, options);
    this.remoteRendering = new RemoteRenderingImpl(this);
  }

  remoteRendering: RemoteRendering;
}
