
export interface IRoom {

}

export class Bathroom implements IRoom {
    baths: number;
    showers: number;
    toilets: number;

    constructor(baths: number, showers: number, toilets: number) {
        this.baths = baths;
        this.showers = showers;
        this.toilets = toilets;
    }
}

export class Bedroom implements IRoom {
    singleBeds: number;
    doubleBeds: number;
    queenBeds: number;
    kingBeds: number;

    constructor(singleBeds: number, doubleBeds: number, queenBeds: number, kingBeds: number) {
        this.singleBeds = singleBeds;
        this.doubleBeds = doubleBeds;
        this.queenBeds = queenBeds;
        this.kingBeds = kingBeds;
    }
}