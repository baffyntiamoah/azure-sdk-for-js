/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  SearchIndexerSkillset,
  SkillsetsCreateOrUpdateOptionalParams,
  SkillsetsCreateOrUpdateResponse,
  SkillsetsDeleteOptionalParams,
  SkillsetsGetOptionalParams,
  SkillsetsGetResponse,
  SkillsetsListOptionalParams,
  SkillsetsListResponse,
  SkillsetsCreateOptionalParams,
  SkillsetsCreateResponse
} from "../models";

/** Interface representing a Skillsets. */
export interface Skillsets {
  /**
   * Creates a new skillset in a search service or updates the skillset if it already exists.
   * @param skillsetName The name of the skillset to create or update.
   * @param skillset The skillset containing one or more skills to create or update in a search service.
   * @param options The options parameters.
   */
  createOrUpdate(
    skillsetName: string,
    skillset: SearchIndexerSkillset,
    options?: SkillsetsCreateOrUpdateOptionalParams
  ): Promise<SkillsetsCreateOrUpdateResponse>;
  /**
   * Deletes a skillset in a search service.
   * @param skillsetName The name of the skillset to delete.
   * @param options The options parameters.
   */
  delete(
    skillsetName: string,
    options?: SkillsetsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Retrieves a skillset in a search service.
   * @param skillsetName The name of the skillset to retrieve.
   * @param options The options parameters.
   */
  get(
    skillsetName: string,
    options?: SkillsetsGetOptionalParams
  ): Promise<SkillsetsGetResponse>;
  /**
   * List all skillsets in a search service.
   * @param options The options parameters.
   */
  list(options?: SkillsetsListOptionalParams): Promise<SkillsetsListResponse>;
  /**
   * Creates a new skillset in a search service.
   * @param skillset The skillset containing one or more skills to create in a search service.
   * @param options The options parameters.
   */
  create(
    skillset: SearchIndexerSkillset,
    options?: SkillsetsCreateOptionalParams
  ): Promise<SkillsetsCreateResponse>;
}
