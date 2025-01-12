/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 */

import {base64UrlDecodeString, base64FromHex} from "../utils/base64";
import {AttestationSigningKey} from "./attestationSigningKey"
import { KJUR, X509, RSAKey } from "jsrsasign"

export class AttestationToken
{

    private constructor(token: string ) {
        this._token = token;
        console.log("create token from: " + token);

        let pieces = token.split('.');
        if (pieces.length != 3) {
            throw Error("Incorrectly formatted token:");
        }
        this._headerBytes = base64UrlDecodeString(pieces[0]);
        this._header = safeJsonParse(this._headerBytes);
        this._bodyBytes = base64UrlDecodeString(pieces[1]);
        this._body = safeJsonParse(this._headerBytes);
        this._signature = base64UrlDecodeString(pieces[2]);

        this._jwsVerifier = KJUR.jws.JWS.parse(token);
    };


    _token : string;
    _headerBytes: Uint8Array;
    _header: any;
    _bodyBytes: Uint8Array;
    _body: any;
    _signature: Uint8Array;

    _jwsVerifier: KJUR.jws.JWS.JWSResult;

    public get_body()
    {
        return this._jwsVerifier.payloadObj;
    }

    public deserialize() : string
    {
        return this._token;
    }

    public static serialize(body: string, signer ?: AttestationSigningKey) : AttestationToken {
        let header: {
            alg : string,
            [k:string]: any} = {alg:'none'};

        if (signer) {
            let x5c = new X509();
            x5c.readCertPEM(signer?.certificate);
            let pubKey = x5c.getPublicKey();
            if (pubKey instanceof RSAKey) {
                header.alg = "RS256"; 
            }
            else if (pubKey instanceof KJUR.crypto.ECDSA) {
                header.alg = "ES256";
            }
            else {
                throw new Error("Unknown public key type: " + typeof pubKey);
            }
            header.x5c = [ base64FromHex(x5c.hex) ];
        }
        else
        {
            header.alg = "none";
        }
    
        let encodedToken = KJUR.jws.JWS.sign(header.alg, header, body, signer?.key);
        console.log("Encoded token: " + encodedToken);
        return new AttestationToken(encodedToken);
    }
    
    };

function isObject(thing: any) {
    return Object.prototype.toString.call(thing) === "[object Object]";
}
  
function safeJsonParse(thing: any) {
    if (isObject(thing)) return thing;
    try {
      return JSON.parse(thing);
    } catch (e) {
      return undefined;
    }
  }
