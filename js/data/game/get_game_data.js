var co= require('./data_game_synthesize1.js');

function getGameAll()
{
    return getGameSynthesize()
}

function getGameSynthesize()
{
    return co.game_synthesize1
}

export
{
    getGameAll,
    getGameSynthesize
}