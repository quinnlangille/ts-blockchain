import { SHA256 } from 'crypto-js';

export class Block {
    private index: number;
    private timestamp: string;
    private data: any;
    private nonce: number;
    public readonly precedingHash: string;
    public hash: string;

    constructor(
        index: number,
        timestamp: string,
        data: any,
        precedingHash = " ",
        nonce: number = 0,
    ) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.nonce = nonce;
        this.hash = this.computeHash();
    }

    public computeHash = () => {
        return SHA256(
            this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data + this.nonce)
        ).toString()
    }

    public proofOfWork = (difficulty: number) => {
      while(
          this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ){
          this.nonce++;
          this.hash = this.computeHash();
      }
  }
}
