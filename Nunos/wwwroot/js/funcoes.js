
function GetCaminhoneiros(){
    var caminhoneiros = [
            {
                "Id": 1,
                "Lat": -23.813389,
                "Lon": -46.584982,
                "Placa": "ABC-1230",
                "Caminhoneiro":"Marcel Ogando",
                "UltimoCheckPoint": "Nunos#01",
                "Descricao":"caminhoneiro-1",
                "Marca":"Mercedes",
                "Cor":"Azul",
                "Idade": 31,
                "EstadoCivil":"Solteiro",
                "Pontos": 1200,
                "Nivel": "Otimo Motorista",
                "Status": "verde",
                "StatusDescricao": "Tudo certo!"


            },
            {
                "Id": 2,
                "Lat": -23.813389,
                "Lon": -46.584982,
                "Placa": "ABC-1231",
                "Caminhoneiro":"Willian Chan",
                "UltimoCheckPoint": "Nunos#02",
                "Descricao":"caminhoneiro-2",
                "Marca":"Mercedes",
                "Cor":"Verde",
                "Idade": 22,
                "EstadoCivil":"Solteiro",
                "Pontos": 1350,
                "Nivel": "Bom Motorista",
                "Status": "verde",
                "StatusDescricao": "Tudo certo!"


            },
            {
                "Id": 3,
                "Lat": -23.708477,
                "Lon": -46.603259,
                "Placa": "ABC-1232",
                "Caminhoneiro":"Lucas Simões",
                "UltimoCheckPoint": "Nunos#03",
                "Descricao":"caminhoneiro-3",
                "Marca":"Scania",
                "Cor":"Preto",
                "Idade": 21,
                "EstadoCivil":"Solteiro",
                "Pontos": 5000,
                "Nivel": "Rei Das Estradas",
                "Status": "verde",
                "StatusDescricao": "Tudo certo!"


            },
            {
                "Id": 4,
                "Lat": -23.676668,
                "Lon": -46.620624,
                "Placa": "ABC-1233",
                "Caminhoneiro":"Fábien Oliveira",
                "UltimoCheckPoint": "Nunos#04",
                "Descricao":"caminhoneiro-4",
                "Marca":"Scania",
                "Cor":"Laranja",
                "Idade": 25,
                "EstadoCivil":"Solteiro",
                "Pontos": 1145,
                "Nivel": "Otimo Motorista",
                "Status": "amarelo",
                "StatusDescricao":"Bateria do caminhão morreu"


            },
            {
                "Id": 5,
                "Lat": -23.656293,
                "Lon": -46.633785,
                "Placa": "ABC-1234",
                "Caminhoneiro":"Alex André",
                "UltimoCheckPoint": "Nunos#05",
                "Descricao":"caminhoneiro-5",
                "Marca":"Scania",
                "Cor":"Laranja",
                "Idade": 28,
                "EstadoCivil":"Casado",
                "Pontos": 3825,
                "Nivel": "Incrivel Motorista",
                "Status": "laranja",
                "StatusDescricao": "Pagou mais caro num serviço do que gostaria"



    
            },
            {
                "Id": 6,
                "Lat": -23.620447,
                "Lon": -46.655659,
                "Placa": "ABC-1235",
                "Caminhoneiro":"José Algusto",
                "UltimoCheckPoint": "Nunos#06",
                "Descricao":"caminhoneiro-6",
                "Marca":"Scania",
                "Cor":"Azul",
                "Idade": 29,
                "EstadoCivil":"Solteiro",
                "Pontos": 1018,
                "Nivel": "Exemplo de Motorista",
                "Status": "verde",
                "StatusDescricao": "Tudo certo!"


            },
            {
                "Id": 7,
                "Lat": -23.597564,
                "Lon": -46.688965,
                "Placa": "ABC-1236",
                "Caminhoneiro":"Jonathan Rodrigues",
                "UltimoCheckPoint": "Nunos#07",
                "Descricao":"caminhoneiro-7",
                "Marca":"Scania",
                "Cor":"Preto",
                "Idade": 47,
                "EstadoCivil":"Divorciado",
                "Pontos": 1789,
                "Nivel": "Otimo Motorista",
                "Status":"laranja",
                "StatusDescricao": "Reclamou de trecho de estrada esburacada"


            },
            {
                "Id": 8,
                "Lat": -23.475064,
                "Lon": -46.744694,
                "Placa": "ABC-1237",
                "Caminhoneiro":"Raimundo Neves",
                "UltimoCheckPoint": "Nunos#08",
                "Descricao":"caminhoneiro-8",
                "Marca":"Scania",
                "Cor":"Preto",
                "Idade": 39,
                "EstadoCivil":"Casado",
                "Pontos": 1145,
                "Nivel": "Otimo Motorista",
                "Status": "amarelo",
                "StatusDescricao": "Reclamou de trecho de estrada parado"


            },
            {
                "Id": 9,
                "Lat": -23.454165,
                "Lon": -46.753771,
                "Placa": "ABC-1238",
                "Caminhoneiro":"Vitor Bonneti",
                "UltimoCheckPoint": "Nunos#09",
                "Descricao":"caminhoneiro-9",
                "Marca":"Mercedes",
                "Cor":"Branco",            
                "Idade": 45,
                "EstadoCivil":"Casado",
                "Pontos": 1358,
                "Nivel": "Otimo Motorista",
                "Status": "vermelho",
                "StatusDescricao": "Reclamou de caminhão roubado"

            },
            {
                "Id": 10,
                "Lat": -23.418789,
                "Lon": -46.763128,
                "Placa": "ABC-1239",
                "Caminhoneiro":"Alessandro Tavares",
                "UltimoCheckPoint": "Nunos#10",
                "Descricao":"caminhoneiro-10",
                "Marca":"Scania",
                "Cor":"Laranja",
                "Idade": 39,
                "EstadoCivil":"Divorciado",
                "Pontos": 4560,
                "Nivel": "Excelencia no Volante",
                "Status": "vermelho",
                "StatusDescricao": "Reclamou de caminhão roubado"
            }
    ]

    return caminhoneiros;
}


function GetCardsAcidentesAviso()
{
    var cards = [
        {
            "Marca":"Scania",
            "Cor":"Preto",
            "Placa": "ABC-1232",
            "Texto":"acabei de ver um acidente aqui do meu lado, parece que todos estão bem",
            "CorFundo":"laranja",
            "Data": "à 10 minutos atrás",
            "CaminhoneiroId":"3",
            "NomeCaminhoneiro":"Lucas Simões"
        },
        {
            "Marca":"Scania",
            "Cor":"Azul",
            "Placa": "ABC-1235",
            "Texto": "Houve uma batida no kilometro 25",
            "CorFundo":"amarelo",
            "Data": "à 15 minutos atrás",
            "CaminhoneiroId":"6",
            "NomeCaminhoneiro":"José Algusto"
        },
        {
            "Marca":"Mercedes",
            "Cor":"Branco",
            "Placa": "ABC-1239",
            "Texto":"uma carga de areia caiu na pista aqui na frente e tem um congestionamento na via",
            "CorFundo":"vermelho",
            "Data": "à 15 minutos atrás",
            "CaminhoneiroId":"9",
            "NomeCaminhoneiro":"Vitor Bonneti"
        }

    ]

    return cards;

}

function GetCardsBloqueiosAviso()
{
    var cards = [
        {
            "Marca":"Scania",
            "Cor":"Preto",
            "Placa": "ABC-1237",
            "Texto":"Estou parado no kilometro 48 já faz meia hora!",
            "CorFundo":"vermelho",
            "Data": "à 10 minutos atrás",
            "CaminhoneiroId":"8",
            "NomeCaminhoneiro":"Raimundo Neves"
        }
    ]

    return cards;

}

function GetCardsRoubosAviso()
{
    var cards = [
        {
            "Marca":"Scania",
            "Cor":"Laranja",
            "Placa":"ABC-4567",
            "Texto":"Acabei de ver um grupo de indivíduos portando fuzil e rendendo um companheiro aqui do meu lado",
            "CorFundo":"vermelho",
            "Data": "à 20 minutos atrás",
            "CaminhoneiroId":"10",
            "NomeCaminhoneiro":"Alessandro Tavares"
        },
        {
            "Marca":"Scania",
            "Cor":"Preto",
            "Placa": "ABC-1239",
            "Texto":"FUI ROUBADO, LEVARAM MEU CAMINHÃO E A CARGA.. SOCORRO!!!",
            "CorFundo":"vermelho",
            "Data": "à 25 minutos atrás",
            "CaminhoneiroId":"9",
            "NomeCaminhoneiro":"Vitor Bonneti"
        }

    ]

    return cards;

}

function GetCardsPrecosAviso()
{
    var cards = [
        {
            "Marca":"Scania",
            "Cor":"Laranja",
            "Placa": "ABC-1234",
            "Texto":"não compensa comprar do posto Roxinho aqui... ta muito caro....",
            "CorFundo":"amarelo",
            "Data": "à 12 minutos atrás",
            "CaminhoneiroId":"5",
            "NomeCaminhoneiro":"Alex André"

        },
        {
            "Marca":"Mercedes",
            "Cor":"Branco",
            "Placa": "ABC-1235",
            "Texto":"Gasolina barata aqui no posto do kilometro 25 em galera!!",
            "CorFundo":"verde",
            "Data": "à 15 minutos atrás",
            "CaminhoneiroId":"6",
            "NomeCaminhoneiro":"José Algusto"

        }
    ]

    return cards;
}

function GetCardsBuracoNaViaAviso()
{
    var cards = [
        {
            "Marca":"Scania",
            "Cor":"Preto",
            "Placa": "ABC-1236",
            "Texto":"Avistei um buracão aqui perto em cuidado pessoal....",
            "CorFundo":"amarelo",
            "Data": "à 6 minutos atrás",
            "CaminhoneiroId":"7",
            "NomeCaminhoneiro":"Jonathan Rodrigues"


        },
        {
            "Marca":"Mercedes",
            "Cor":"Branco",
            "Placa": "ABC-1235",
            "Texto":"a pista está muito esburacada no meu trecho",
            "CorFundo":"verde",
            "Data": "à 7 minutos atrás",
            "CaminhoneiroId":"6",
            "NomeCaminhoneiro":"José Algusto"


        }
    ]

    return cards;
}

function GetCardsBemEstarAviso()
{
    var cards = [
        {
            "Marca":"Mercedes",
            "Cor":"Verde",
            "Placa": "ABC-1231",
            "Texto":"Parei em um acostamento aqui... to passando mal galera, se puder da uma ajudada eu agradeço...",
            "CorFundo":"vermelho",
            "Data": "à 3 minutos atrás",
            "CaminhoneiroId":"2",
            "NomeCaminhoneiro":"Willian Chan"            
        }
    ]

    return cards;

}

function GetCardsCaminhaoQuebrouAviso()
{
    var cards = [
        {
            "Marca":"Mercedes",
            "Cor":"Verde",
            "Placa": "ABC-1233",
            "Texto":"MEU CAMINHÃO QUEBROU GALERA... deve ser a bateria... alguém pode me dar uma chupeta?",
            "CorFundo":"laranja",
            "Data": "à 15 minutos atrás",
            "CaminhoneiroId":"4",
            "NomeCaminhoneiro":"Fábien Oliveira" 
        }

    ]

    return cards;
}
