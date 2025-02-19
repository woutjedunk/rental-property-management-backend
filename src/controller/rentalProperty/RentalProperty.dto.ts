


export type CreateRentalPropertyDTO = {
    rentalOwner: string; 
    rentalName: string;
    singleBeds: number;
    doublebeds: number;
    storage: string;
    country: string;
    city: string;
    zipcode: string;
    street: string;
    houseNumber: string;
    busNumber?: string;
}