const http = require("http");
const petShop = require("./petShop");
const url = require("url");
    const server = http
    .createServer( (req, resp) => {
    //quando faço requisição no navegador
    resp.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"})
    let urlComplete = url.parse(req.url, true);
    let queryString = urlComplete.query;
    let rota = urlComplete.pathname;

    switch (rota) {
        case "/pets":
            let conteudo = petShop.listarPets();
            if (conteudo.length > 0){
                resp.write(conteudo);
            }else{
                resp.write("Nenhum pet cadastrado ");
            }
            break;
        case "/pets/add":
            let novoPet = queryString;
            petShop.adicionarPet(novoPet);
            resp.write(`${novoPet.nome} foi adicionado a nossa lista!`);
            break;
        case "/pets/buscar":
            let petBuscado = queryString;
            if ( petShop.buscarPet(petBuscado.nome) ){
                resp.write(`O pet ${petBuscado.nome} está na lista`);
            }else{
                resp.write(`O pet ${petBuscado.nome} não está na lista`);
            }
            break;
        default:
            resp.write("Tô perdido");
            break;
    }
    resp.end();
})
.listen(3000, "localhost", () => {
    //quando ligo o servidor
    console.log ("Servidor rodando ");
});