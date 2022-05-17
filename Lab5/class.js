let codeCounter = 0;
class GasStation{
    constructor(name, address, a98Litr, a98Price, a95Litr, a95Price, a92Litr, a92Price){
        this.code = codeCounter++;
        this.name = name;
        this.address = address;
        this.a98Litr = a98Litr;
        this.a98Price = a98Price;
        this.a95Litr = a95Litr;
        this.a95Price = a95Price;
        this.a92Litr = a92Litr;
        this.a92Price = a92Price;
    }
}
class GasStationCollection extends GasStation{
    constructor(items = [], a98Litr, a98Price, a95Litr, a95Price, a92Litr, a92Price) {
        super(a98Litr, a98Price, a95Litr, a95Price, a92Litr, a92Price);
        this.items = items;
    }
    getByCode(code) {
        return this.items.find(gasStation => gasStation.code == code)
    }
    getByName(name) {
        return this.items.find(gasStation => gasStation.name == name)
    }
    add(gasStation) {
        if (!(gasStation instanceof GasStation))
            throw `${gasStation} is not instance of GasStation`;
        this.items.push(gasStation);
    }
    getMarkOfGas(name, markOfGas){
        let a = this.getByName(name);
        console.log(a);
        if(markOfGas.toLowerCase() == "a98"){
            console.log(`Кількість: ${a.a98Litr} л`);
            console.log(`Вартість: ${a.a98Price} грн`);
        }
        else if(markOfGas.toLowerCase() == "a95"){
            console.log(`Кількість: ${a.a95Litr} л`);
            console.log(`Вартість: ${a.a95Price} грн`);
        }
        else if(markOfGas.toLowerCase() == "a92"){
            console.log(`Кількість: ${a.a92Litr} л`);
            console.log(`Вартість: ${a.a92Price} грн`);
        }
        else
            throw("Incorect value");
    }
    edit(code, newGasStation) {
        let gasStation = this.getByCode(code);
        if (!gasStation)
            throw "Not found";
        for (let key of ["name", "address", "a98Litr", "a98Price", "a95Litr", "a95Price", "a92Litr", "a92Price"])
            if (newGasStation[key])
                gasStation[key] = newGasStation[key];
    }
    delete(code){
        let gasStationCode = this.items.findIndex(gasStation => gasStation.code == code);
        if (gasStationCode == -1)
            throw "Not found";
        this.items.splice(gasStationCode, 1);
    }
}
let gasStations = new GasStationCollection();
gasStations.add(
    new GasStation(
        "Shell",
        "Kyiv",
        900,
        31,
        1000,
        30,
        700,
        29
    )
)
gasStations.add(
    new GasStation(
        "Okko",
        "Uzhgorod",
        1000,
        30,
        800,
        29,
        900,
        31
    )
)