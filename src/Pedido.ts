export class Pedido {
    private _total: number = 0;

    constructor(
        public id: number,
        public data: Date
        // Futuramente, podemos adicionar um cliente ao pedido
    ) {
        console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleString()}!`);
    }

    public get total(): number {
        return this._total;
    }
}