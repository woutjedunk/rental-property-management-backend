import { UUID } from "node:crypto";
import { Address } from "@domain/address/address.ts";

export class RentalDomain {
    readonly id: UUID;
    domainName: string;
    domainOwner: string;
    address: Address;

    constructor(id: UUID, domainName: string, domainOwner: string, address: Address) {
        this.id = id;
        this.domainName = domainName;
        this.domainOwner = domainOwner;
        this.address = address;
    }
}