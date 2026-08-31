export class CardPoke {
    id: number;
    name: string;
    imageURL: string;
    typePoke: string;

    constructor(id: number, name: string, imageURL: string, typePoke: string){
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        this.typePoke = typePoke; 
    }
}