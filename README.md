# Tyrannosaurus Rekt
* This is a bot that will scan our system for trades that are ready to be liquidated then liquidate them
* It will store all trades and check either every X min or everytime the oracle price changes

## Requierments 
* Docker-compose version  1.24.1 or later

## Run instructions
* add .env with proper configurations (see below)
* docker-compose up
* for more detailed instructions for how to set up an aws ec2 instance see below
## Configurations
* all conifigurations are done in a .env file
* to run the bot you will have to create your own .env file with these parameters

## 
```
NETWORK=rinkeby
URL=
BLOCKSTART=0 
PRIVATE_KEY=
RERUNTIME=180000
GASPRICE=2000000000
```

Network
* the current network the bot should run on 
* rinkeby or homestead

URL
* If you would like to connect to your own http endpoint, defauly is blank which is infura

Blockstart
* Which Block should the bot start recording trades from 

Private Key 
* private key of account to make trade from
* make sure account has ether to cover gas
* do not use this account elsewhere!
* Best Practice -> This key is not needed after the bot is running so after you run docker-compose up and the bot is working, remove the private key from the .env file

Re Run Time
* The time in MS you want to rescan the trades for liquidation
* 0 would be no re runs 
* This will not effect scanning after chainlink update

Gas Price 
* The gas price you send your tx through with in WEI
* The higher the more gas costs but the faster transactions will go through

## ec2 setup