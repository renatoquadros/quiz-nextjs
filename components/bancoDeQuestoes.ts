import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, 'Qual a Produtora do game The Last of Us? ', [
        RespostaModel.errada('Capcom'),
        RespostaModel.errada('Nintendo'),
        RespostaModel.errada('EA'),
        RespostaModel.certa('Naughty Dog'),
    ]),
    new QuestaoModel(2, 'Em que ano foi lançado o primeiro game do Super Mario Bros?', [
        RespostaModel.errada('1975'),
        RespostaModel.errada('2009'),
        RespostaModel.errada('1990'),
        RespostaModel.certa('1985'),
    ]),
    new QuestaoModel(3, 'Qual game de luta foi o grande rival de Street Fighter nos anos 90?', [
        RespostaModel.errada('Super Smash Bros'),
        RespostaModel.errada('Tekken'),
        RespostaModel.errada('Guilty Gear'),
        RespostaModel.certa('Mortal Kombat'),
    ]),
    new QuestaoModel(4, 'Qual game é considerado o mais vendido de todos os tempos até o presente momento? (2022)', [
        RespostaModel.errada('Super Mario Bros 3'),
        RespostaModel.errada('Tetris'),
        RespostaModel.errada('Grand Theft Auto 5'),
        RespostaModel.certa('Minecraft'),
    ]),
]

export default questoes