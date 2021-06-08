import { BlockChain } from './BlockChain';

const chain = new BlockChain();

console.log("Mining in progress....");
chain.addNewBlock("01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  });

chain.addNewBlock("01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
});

console.log(JSON.stringify(chain, null, 4));
