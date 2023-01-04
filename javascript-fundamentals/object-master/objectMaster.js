//we can use object.freeze to give our array or object IMMUTABILITY
const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

//create list of pokemon that have names that start with the letter B
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn)

//returns array of just IDs
const pkmnIds = pokémon.map( p => p.id );
console.log(pkmnIds)

//array of pokemon objects where the id is evenly divisible by 3
const divByThree = pokémon.filter(p => p.id % 3 ===0);
console.log(divByThree)

//array of pokemon objects that are 'fire' type
const fireTypes = pokémon.filter(p => p.types.includes("fire"));
console.log(fireTypes)

//array of pokemon objects that have more than one type
const moreThanOneType = pokémon.filter(p => p.types.length>1);
console.log(moreThanOneType)

//array of pokemon objects with just the names
const pkmnNames = pokémon.map( p => p.name);
console.log(pkmnNames)

//array with just the names of pokemon with id greater than 99
const namesGreater99 = pokémon.filter(p => p.id > 99)
const onlyNames = namesGreater99.map( p => p.name)
console.log(onlyNames)

const namesGreater992 = (arr) => {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[ i ].id > 99) {
            names.push((arr[ i ].name))
        }
    }
    return names;
}
console.log(namesGreater992(pokémon))

//array with just the names of pokemon whose only type is poison
const oneType = pokémon.filter(p => p.types.length == 1);
//console.log(oneType)
const onlyPoison = oneType.filter(p => p.types.includes("poison"));
//console.log(onlyPoison)
const onlyPoisonNames = onlyPoison.map( p => p.name)
console.log(onlyPoisonNames)

const onlyPoison2 = (arr) => {
    let poisonPokemon = [];
    //Iterate over elements in array (which are pokemon objects)
    for (let poke of arr) {
        //If the object's key -> types has an arr.length < 2
        if (poke.types.length < 2) {
            //Check if that array on that key:value pair is "poison"
            for (let key in poke) {
                if (poke[ key ][ 0 ] === "poison") {
                    poisonPokemon.push(poke);
                }
            }
        }
    }
    return poisonPokemon;
}
console.log(onlyPoison2(pokémon));


//array containing just the first type of all the pokemon whose second type is flying
const secondFlying = moreThanOneType.filter(p => p.types[1] === "flying")
//console.log(secondFlying)
const firstType = secondFlying.map(p => p.types[0])
console.log(firstType)

// count of the number of pokemon that are normal type
const normal = pokémon.filter(p => p.types.includes("normal"));
console.log(normal)
console.log(normal.length)