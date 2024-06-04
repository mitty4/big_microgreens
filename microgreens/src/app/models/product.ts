import { Img } from './interfaces/img'

export class Product {
    label: string = '';
    sublabel: string = '';
    description: string = '';
    img: Img = {
        src: '',
        alt: 'alt-text',
    };
    price: number = 0;
    count: number = 0;


    constructor(data: any) {
        this._setData(data);
    }


    private _setData(data: any) {
        this.label = data?.label;
        this.sublabel = data?.sublabel;
        this.description = data?.description;
        this.img = data?.img;
        this.price = data?.price;
    }
}
