export class House {
    public address: string;
    public city: string;
    public state: string;
    public zipcode: string;
    public bedrooms: number;
    public baths: number;
    public description: string;
    public imageURL: string

    constructor(address: string, city: string, state: string, zipcode: string,
    bedrooms: number, baths: number, description: string, imageURL: string ){

        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.bedrooms = bedrooms;
        this.baths = baths;
        this.description = description;
        this.imageURL = imageURL;
    }
}
