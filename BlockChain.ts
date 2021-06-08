import { Block } from './Block'

export class BlockChain {
    private blockchain: Block[]
    private difficulty: number;
    constructor() {
        this.blockchain = [this.startGenisisBlock()];
        this.difficulty = 4;
    }

    private startGenisisBlock = () => {
        return new Block(0, "01/01/2020", "Initial Block in the Chain", "0");
    }
    
    public obtainLatestBlock = () => {
        return this.blockchain[this.blockchain.length - 1];
    }

    public addNewBlock = (dateStamp: string, data: any) => {
        const newBlock = new Block(
            this.blockchain.length,
            dateStamp,
            data,
            this.obtainLatestBlock().hash
        );
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    }

    public checkChainValidity = () => {
        this.blockchain.forEach((currentBlock, index) => {
          const precedingBlock = this.blockchain[index - 1];

          if (currentBlock.hash !== currentBlock.computeHash()) {
            return false;
          }

          if (currentBlock.precedingHash !== precedingBlock.hash){
            return false;
          }
        });
        
        return true;
    }
}
