Moralis.Cloud.define("getPrice", async (request) => {
    let url = 'https://deep-index.moralis.io/api/token/ERC20/' + request.params.address + '/price'
    logger.info(url);
    return Moralis.Cloud.httpRequest({
      url: url,
      params: {chain: "eth", chain_name: "testnet"},
      headers:{
        'accept': 'application/json',
        'X-API-Key':'JdATn59n0qYfNyLErdnXcyh52231ZL0CwIXMiFZU'
        }
    }).then( fucntion(httpResponse){
     return httpResponse.data;
            }, function(httpResponse){
                    logger.info('error');
                    logger.info(httpResponse);
      })
  });
            
    