import { UUID } from "node:crypto";
import { ApplicationError } from "../../shared/errors/ApplicationError.ts";
import { applicationErrorResponses, httpStatusCodes } from "@shared/applicationResponses.ts";

export interface IRoom {
    id: UUID;
}

export class Bathroom implements IRoom {
    id: UUID;
    baths: number;
    showers: number;
    toilets: number;
    sink: number;

    constructor(id: UUID, baths: number, showers: number, toilets: number, sink: number) {
        this.id = id;
        this.baths = baths;
        this.showers = showers;
        this.toilets = toilets;
        this.sink = sink;
    }
}


export class Bedroom implements IRoom {
    id: UUID;
    singleBeds: number;
    doubleBeds: number;
    queenBeds: number;
    kingBeds: number;

    constructor(id: UUID, singleBeds: number, doubleBeds: number, queenBeds: number, kingBeds: number) {
        this.id = id;
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.queenBeds = queenBeds;
        this.kingBeds = kingBeds;
    }
}


export class RoomBuilder<T extends IRoom> {
    private id!: UUID;
    private roomClass!: { new (...args: any[]): T };
    private baths: number = 0;
    private showers: number = 0;
    private toilets: number = 0;
    private sink: number = 0;
    private singleBeds: number = 0;
    private doubleBeds: number = 0;
    private queenBeds: number = 0;
    private kingBeds: number = 0;

    setRoomType(roomClass: { new (...args: any[]): T }): this {
        this.roomClass = roomClass;
        return this;
    }

    setId(id: UUID): this {
        this.id = id;
        return this;
    }

    setBaths(baths: number): this {
        this.baths = baths;
        return this;
    }

    setShowers(showers: number): this {
        this.showers = showers;
        return this;
    }

    setToilets(toilets: number): this {
        this.toilets = toilets;
        return this;
    }

    setSink(sink: number): this {
        this.sink = sink;
        return this;
    }

    setSingleBeds(singleBeds: number): this {
        this.singleBeds = singleBeds;
        return this;
    }

    setDoubleBeds(doubleBeds: number): this {
        this.doubleBeds = doubleBeds;
        return this;
    }

    setQueenBeds(queenBeds: number): this {
        this.queenBeds = queenBeds;
        return this;
    }

    setKingBeds(kingBeds: number): this {
        this.kingBeds = kingBeds;
        return this;
    }

    build(): T {
        if (!this.roomClass) throw new ApplicationError(applicationErrorResponses.INTERNAL_SERVER_ERROR, httpStatusCodes.INTERNAL_SERVER_ERROR)
        if (!this.id) throw new ApplicationError(applicationErrorResponses.INTERNAL_SERVER_ERROR, httpStatusCodes.INTERNAL_SERVER_ERROR);

        if (this.roomClass.name === Bathroom.name) return new this.roomClass(this.id, this.baths, this.showers, this.toilets, this.sink);
        if (this.roomClass.name === Bedroom.name) return new this.roomClass(this.id, this.singleBeds, this.doubleBeds, this.queenBeds, this.kingBeds);
        
        throw new ApplicationError(applicationErrorResponses.NOT_IMPLEMENTED, httpStatusCodes.NOT_IMPLEMENTED);
    }
}

