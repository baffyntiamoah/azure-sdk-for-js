## API Report File for "@azure/eventhubs-checkpointstore-table"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Checkpoint } from '@azure/event-hubs';
import { CheckpointStore } from '@azure/event-hubs';
import { PartitionOwnership } from '@azure/event-hubs';

// @public
export const logger: import("@azure/logger").AzureLogger;

// @public
export class TableCheckpointStore implements CheckpointStore {
    claimOwnership(): Promise<PartitionOwnership[]>;
    listCheckpoints(): Promise<Checkpoint[]>;
    listOwnership(): Promise<PartitionOwnership[]>;
    updateCheckpoint(): Promise<void>;
}


// (No @packageDocumentation comment for this package)

```
