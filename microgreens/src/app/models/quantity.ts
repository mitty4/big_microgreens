export class Quantity {
    label: string = '4oz';
    value: number = 4;

    constructor(data: any) {
        this._setData(data);
    }

    private _setData(data: any) {
        this.label = data?.label;
        this.value = data?.value;
    }
}
