import { Img } from './interfaces/img'

export class Product {
    title: string = '';
    description: string = '';
    img: Img = {
        src: '',
        alt: 'alt-text',
    };


    constructor(data: any) {
        this._setData(data);
    }


    private _setData(data: any) {
        this.title = data?.title;
        this.description = data?.description;
        this.img = data?.img;
    }
}
