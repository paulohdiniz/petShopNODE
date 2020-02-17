let pets = [{nome: "doug"}, {nome: "kalesi "}];
let listarPets = () => {
    let conteudo = "";
    for (let pet of pets){
        conteudo+= `
        ------------------
        Nome: ${pet.nome}
        ------------------`;
    }
    return conteudo;
};
const adicionarPet = novoPet => {
        return pets.push(novoPet);
};
const buscarPet = petBuscado =>{
    for (let pet of pets){
        if (petBuscado == pet.nome){
            return true;
        }
    }
    return false;
}
module.exports = {listarPets, adicionarPet, buscarPet};