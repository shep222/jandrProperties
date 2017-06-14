export class House {
    public id: number;
    public address: string;
    public city: string;
    public state: string;
    public zipcode: string;
    public bedrooms: number;
    public baths: number;
    public description: string;
    public imageURL: string;
    public price: number;
    public available: string;

    constructor(id: number, address: string, city: string, state: string, zipcode: string,
    bedrooms: number, baths: number, description: string, imageURL: string, price: number, available: string ){
        this.id = id;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.bedrooms = bedrooms;
        this.baths = baths;
        this.description = description;
        this.imageURL = imageURL;
        this.price = price;
        this.available = available
    }
}
