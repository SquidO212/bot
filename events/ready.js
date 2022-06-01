module.exports = (client) => 
{
    console.log('Bot da hoat dong');
    client.user.setPresence({ 
        activities: 
        [
            { name: 'AUTHOR : sq1d#9371' }
        ], status: 'ONLINE' 
    });
}