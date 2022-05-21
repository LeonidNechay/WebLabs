let codeCounter = 0;
class GasStation{
    constructor(stationName, address, a98Litr, a98Price, a95Litr, a95Price, a92Litr, a92Price){
        this.code = codeCounter++;
        this.stationName = stationName;
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
    getByName(stationName) {
        return this.items.find(gasStation => gasStation.stationName == stationName)
    }
    add(gasStation) {
        if (!(gasStation instanceof GasStation))
            throw `${gasStation} is not instance of GasStation`;
        this.items.push(gasStation);
    }
    getMarkOfGas(stationName, markOfGas){
        let a = this.getByName(stationName);
        if(markOfGas.toLowerCase() == "a98"){
            document.getElementById('litrHTML').value = a.a98Litr;
            document.getElementById('priceHTML').value = a.a98Price;
        }
        else if(markOfGas.toLowerCase() == "a95"){
            document.getElementById('litrHTML').value = a.a95Litr;
            document.getElementById('priceHTML').value = a.a95Price;
        }
        else if(markOfGas.toLowerCase() == "a92"){
            document.getElementById('litrHTML').value = a.a92Litr;
            document.getElementById('priceHTML').value = a.a92Price;
        }
        else
            throw("Incorect value");
    }
    delete(code){
        let gasStationCode = this.items.findIndex(gasStation => gasStation.code == code);
        if (gasStationCode == -1)
            throw "Not found";
        this.items.splice(gasStationCode, 1);
    }
    getAll() {
        return [...this.items];
    }
}

class GasStationToHtml extends GasStationCollection{
    gasStationToHTML(gasStations) {
        return `
        <tr>
            <td>
                ${gasStations.code}
            </td>
            <td>
                ${gasStations.stationName}
            </td>
            <td>
                ${gasStations.address}
            </td>
            <td>
                ${gasStations.a98Litr}
            </td>
            <td>
                ${gasStations.a98Price}
            </td>
            <td>
                ${gasStations.a95Litr}
            </td>
            <td>
                ${gasStations.a95Price}
            </td>
            <td>
                ${gasStations.a92Litr}
            </td>
            <td>
                ${gasStations.a92Price}
            </td>
            <td> 
                <button onclick="deleteGasStation(${gasStations.code})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }

    gasStationTableToHTML() {
        let rows = "";
        for (let gasStations of this.getAll()) {
            rows += this.gasStationToHTML(gasStations);
        }
        return `
            <table>
                <tr>
                    <th rowspan="2">
                        Code
                    </th>
                    <th rowspan="2">
                        Station Name
                    </th>
                    <th rowspan="2">
                        Address
                    </th>
                    <th colspan="2">
                        A98
                    </th>
                    <th colspan="2">
                        A95
                    </th>
                    <th colspan="2">
                        A92
                    </th>
                    <th rowspan="2">
                    </th>
                </tr>
                <tr>
                    <th>
                        Litr
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Litr
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Litr
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text" id="stationName"></td>
                    <td><input type="text" id="address"></td>
                    <td><input type="text" id="a98Litr"></td>
                    <td><input type="text" id="a98Price"></td>
                    <td><input type="text" id="a95Litr"></td>
                    <td><input type="text" id="a95Price"></td>
                    <td><input type="text" id="a92Litr"></td>
                    <td><input type="text" id="a92Price"></td>
                    <td> 
                        <button onclick="AddNewGasStation(${gasStations.code})">
                            Add
                        </button>
                    </td>
                </tr>
                ${rows}
            </table>
        `;
    }

    toHTML() {
        return this.gasStationTableToHTML();
    }

    mount(parrent) {
        this.parrent = parrent;
        this.render();
        this.addEventListners();
    }

    render() {
        this.parrent.innerHTML = this.toHTML();
    }

    addEventListners() {
        document.addEventListener("deleteGasStation", event => {
            super.delete(event.detail.code);
            this.render();
        });
        document.addEventListener("addNewGasStation", event => {
            super.add(
                new GasStationToHtml(
                    event.detail.stationName,
                    event.detail.address,
                    event.detail.a98Litr,
                    event.detail.a98Price,
                    event.detail.a95Litr,
                    event.detail.a95Price,
                    event.detail.a92Litr,
                    event.detail.a92Price
                )
            );
            this.render();
        });
    }
}

function deleteGasStation(code) {
    let deleteGasStationEvent = new CustomEvent("deleteGasStation", { detail: {code} });
    document.dispatchEvent(deleteGasStationEvent);
}

function AddNewGasStation() {
    const stationName = document.getElementById("stationName").value;
    const address = document.getElementById("address").value;
    const a98Litr = document.getElementById("a98Litr").value;
    const a98Price = document.getElementById("a98Price").value;
    const a95Litr = document.getElementById("a95Litr").value;
    const a95Price = document.getElementById("a95Price").value;
    const a92Litr = document.getElementById("a92Litr").value;
    const a92Price = document.getElementById("a92Price").value;
    let addGasStationEvent = new CustomEvent("addNewGasStation", {
        detail: {
            stationName,
            address,
            a98Litr,
            a98Price,
            a95Litr,
            a95Price,
            a92Litr,
            a92Price
        }
    });
    document.dispatchEvent(addGasStationEvent);
}

let gasStations = new GasStationToHtml();

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

gasStations.add(
    new GasStation(
        "Wog",
        "Kyiv",
        1,
        2,
        3,
        4,
        5,
        6
    )
)

gasStations.mount(document.getElementById("table"));