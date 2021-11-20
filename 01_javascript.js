class Musica {
    nombre;
    genero;
    duracion;

    constructor(nombre, genero, duracion) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
    }
}
musica = [];

for (let i = 0; i < 2; i++) {
    mus = new Musica();
    mus.nombre = prompt("Nombre:");
    mus.genero = prompt("Genero:");
    mus.duracion = prompt("Duracion:");
    musica.push(mus);
    console.log(musica);
}
/* ------------------------------------------ */

class Artista extends Musica{
    nombre;
    edad;
    estatura;
    
    constructor(nombre, edad, estatura){
        this.nombre=nombre;
        this.edad=edad;
        this.estatura=estatura;
    }
}
artista = [];

for (let i = 0; i < 2; i++) {
    art = new Artista();
    art.nombre = prompt("Nombre:");
    art.edad = prompt("Edad:");
    art.estatura = prompt("Estatura:");
    artista.push(art);
    console.log(artista);}

/* cancion=new Musica();
cantante=new Artista(); */
/* class Informacion{
    static musica(){
        return "Metodo";
    }
}

Informacion.musica(); */






