// https://eth-mainnet.alchemyapi.io/v2/QMznVBJEvon1Exz4PuC_DUhjxELJvutK


require('@nomiclabs/hardhat-waffle');


module.exports = {

  solidity: '0.8.0',

  network: {
    ropsten: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/QMznVBJEvon1Exz4PuC_DUhjxELJvutK',
   accounts:[ '552253fc96742d7651940a39fd87cbf6ddc25670ab343a674d68a7b8319e8b8d' ]
    }
  }
}