// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * This is a helper class to construct a string representing the permissions granted by a ServiceSAS to a container.
 * Setting a value to true means that any SAS which uses these permissions will grant permissions for that operation.
 * Once all the values are set, this should be serialized with toString and set as the permissions field on a
 * {@link BlobSASSignatureValues} object. It is possible to construct the permissions string without this class, but
 * the order of the permissions is particular and this class guarantees correctness.
 *
 * @export
 * @class ContainerSASPermissions
 */
export class ContainerSASPermissions {
  /**
   * Creates an {@link ContainerSASPermissions} from the specified permissions string. This method will throw an
   * Error if it encounters a character that does not correspond to a valid permission.
   *
   * @static
   * @param permissions -
   *
   * @memberof ContainerSASPermissions
   */
  public static parse(permissions: string) {
    const containerSASPermissions = new ContainerSASPermissions();

    for (const char of permissions) {
      switch (char) {
        case "r":
          containerSASPermissions.read = true;
          break;
        case "a":
          containerSASPermissions.add = true;
          break;
        case "c":
          containerSASPermissions.create = true;
          break;
        case "w":
          containerSASPermissions.write = true;
          break;
        case "d":
          containerSASPermissions.delete = true;
          break;
        case "l":
          containerSASPermissions.list = true;
          break;
        case "t":
          containerSASPermissions.tag = true;
          break;
        case "x":
          containerSASPermissions.deleteVersion = true;
          break;
        case "m":
          containerSASPermissions.move = true;
          break;
        case "e":
          containerSASPermissions.execute = true;
          break;
        default:
          throw new RangeError(`Invalid permission ${char}`);
      }
    }

    return containerSASPermissions;
  }

  /**
   * Creates a {@link ContainerSASPermissions} from a raw object which contains same keys as it
   * and boolean values for them.
   *
   * @static
   * @param permissionLike -
   *
   * @memberof ContainerSASPermissions
   */
  public static from(permissionLike: ContainerSASPermissionsLike): ContainerSASPermissions {
    const containerSASPermissions = new ContainerSASPermissions();
    if (permissionLike.read) {
      containerSASPermissions.read = true;
    }
    if (permissionLike.add) {
      containerSASPermissions.add = true;
    }
    if (permissionLike.create) {
      containerSASPermissions.create = true;
    }
    if (permissionLike.write) {
      containerSASPermissions.write = true;
    }
    if (permissionLike.delete) {
      containerSASPermissions.delete = true;
    }
    if (permissionLike.list) {
      containerSASPermissions.list = true;
    }
    if (permissionLike.deleteVersion) {
      containerSASPermissions.deleteVersion = true;
    }
    if (permissionLike.tag) {
      containerSASPermissions.tag = true;
    }
    if (permissionLike.move) {
      containerSASPermissions.move = true;
    }
    if (permissionLike.execute) {
      containerSASPermissions.execute = true;
    }
    return containerSASPermissions;
  }

  /**
   * Specifies Read access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public read: boolean = false;

  /**
   * Specifies Add access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public add: boolean = false;

  /**
   * Specifies Create access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public create: boolean = false;

  /**
   * Specifies Write access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public write: boolean = false;

  /**
   * Specifies Delete access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public delete: boolean = false;

  /**
   * Specifies Delete version access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public deleteVersion: boolean = false;

  /**
   * Specifies List access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public list: boolean = false;

  /**
   * Specfies Tag access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public tag: boolean = false;

  /**
   * Specifies Move access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public move: boolean = false;

  /**
   * Specifies Execute access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissions
   */
  public execute: boolean = false;

  /**
   * Converts the given permissions to a string. Using this method will guarantee the permissions are in an
   * order accepted by the service.
   *
   * The order of the characters should be as specified here to ensure correctness.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-a-service-sas
   *
   *
   * @memberof ContainerSASPermissions
   */
  public toString(): string {
    const permissions: string[] = [];
    if (this.read) {
      permissions.push("r");
    }
    if (this.add) {
      permissions.push("a");
    }
    if (this.create) {
      permissions.push("c");
    }
    if (this.write) {
      permissions.push("w");
    }
    if (this.delete) {
      permissions.push("d");
    }
    if (this.deleteVersion) {
      permissions.push("x");
    }
    if (this.list) {
      permissions.push("l");
    }
    if (this.tag) {
      permissions.push("t");
    }
    if (this.move) {
      permissions.push("m");
    }
    if (this.execute) {
      permissions.push("e");
    }
    return permissions.join("");
  }
}

/**
 * A type that looks like a Container SAS permission.
 * Used in {@link ContainerSASPermissions} to parse SAS permissions from raw objects.
 */
export interface ContainerSASPermissionsLike {
  /**
   * Specifies Read access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  read?: boolean;

  /**
   * Specifies Add access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  add?: boolean;

  /**
   * Specifies Create access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  create?: boolean;

  /**
   * Specifies Write access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  write?: boolean;

  /**
   * Specifies Delete access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  delete?: boolean;

  /**
   * Specifies Delete version access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  deleteVersion?: boolean;

  /**
   * Specifies List access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  list?: boolean;

  /**
   * Specfies Tag access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  tag?: boolean;

  /**
   * Specifies Move access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  move?: boolean;

  /**
   * Specifies Execute access granted.
   *
   * @type {boolean}
   * @memberof ContainerSASPermissionsLike
   */
  execute?: boolean;
}
