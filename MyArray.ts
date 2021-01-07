class MyArray {
    private collection: Array<string | number> = [];

    add(value: string | number) {
        if (typeof value !== 'string'&& typeof value !== 'number') {
            return console.warn(`${typeof value} ${value} is given, string or number type only can be added!`);
        } else if (this.collection.length > 0 && typeof this.collection[0] !== typeof value) {
            return console.warn(`${typeof value} ${value} is given, inconsistent value type!`);
        }

        this.collection.push(value);
    }

    remove(value: string | number) {
        const index = this.collection.findIndex(el => el === value);
        this.collection.splice(index, 1);
    }

    getValues() {
        return this.collection;
    }
}

export default  MyArray;
