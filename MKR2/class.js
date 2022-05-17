let idCounter = 0;
class MusicalAlbum {
    constructor(performer, name, url, songs, year, listening){
        this.id = idCounter++;
        this.performer = performer;
        this.name = name;
        this.url = url;
        this.songs = songs;
        this.year = year;
        this.listening = listening;
    }
}
class MusicalAlbumColection extends MusicalAlbum{
    constructor(items = [], performer, name, url, songs, year, listening) {
        super(performer, name, url, songs, year, listening);
        this.items = items;
    }
    add(musicalAlbum) {
        if (!(musicalAlbum instanceof MusicalAlbum))
            throw `${musicalAlbum} is not instance of GasStation`;
        this.items.push(musicalAlbum);
    }
    getById(id) {
        return this.items.find(musicalAlbum => musicalAlbum.id == id);
    }
    toTable() {
        return  `<tr>
                    <td>${musicalAlbum.id}</td>
                    <td>${musicalAlbum.performer}</td>
                    <td>${musicalAlbum.name}</td>
                    <td><img src="${musicalAlbum.url}" alt="${musicalAlbum.name}"></td>
                    <td>${musicalAlbum.songs}</td>
                    <td>${musicalAlbum.year}</td>
                    <td>${musicalAlbum.listening}</td>
                </tr>`
    }
    mount(parrent, id) {
        this._parrent = parrent;
        this._id = id;
        parrent.innerHTML = this.toTable(this.getById(id));
    }
    render() {
        this._parrent.innerHTML = this.toTable();
    }
    delete(k){
        let musicalAlbumListening = this.items.findIndex(musicalAlbum => musicalAlbum.listening < k);
        musicalAlbum.mount(document.getElementById("table"), 1);
        this.items.splice(musicalAlbumListening, 1);
    }
    toString(id) {
        let a = this.items.findIndex(musicalAlbum => musicalAlbum.id == id);
        return `{
            id: ${a.id};
            performer: ${a.performer};
            name: ${a.name};
            url: ${a.url};
            songs: ${a.songs};
            year: ${a.year};
            listenig: ${a.listening};
        }`;
    }
}
let musicalAlbum = new MusicalAlbumColection();
musicalAlbum.add(
    new MusicalAlbum(
        "Океан Ельзи",
        "Земля",
        "https://upload.wikimedia.org/wikipedia/uk/b/bc/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F_%28%D0%9E._%D0%95.%29.jpg",
        ["З нею","Стіна","Бодегіта","Незадежність"],
        2013,
        1064780
    )
)
musicalAlbum.add(
    new MusicalAlbum(
        "KAZKA",
        "KARMA",
        "https://upload.wikimedia.org/wikipedia/uk/b/b4/Kazka_-_Karma.jpeg",
        ["Карма","Сама","Запала","Дива"],
        2018,
        1645163
    )
)
musicalAlbum.add(
    new MusicalAlbum(
        "Скрябін",
        "25",
        "https://upload.wikimedia.org/wikipedia/uk/0/03/Skrybin_25.jpg",
        ["Дельфіни","Глобус","Медляк","Паром"],
        2014,
        905878
    )
)