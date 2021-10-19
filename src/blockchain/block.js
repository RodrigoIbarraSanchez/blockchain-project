import { SHA256 } from 'crypto-js';

class Block {
    constructor(timestamp, previousHash, hash, data) {
			this.timestamp = timestamp;
			this.previousHash = previousHash;
			this.hash = hash;
			this.data = data;
    }

		static get genesis() {
			const timestamp = (new Date(2021, 9, 19)).getTime();
			return new this(timestamp, undefined, 'g3n3$1$-h4$h', 'I like Pokemon');
		}

		static mine(previousBlock, data) {
			const timestamp = Date.now();
			const hash = Block.hash(timestamp, previousHash, data);
			const { hash: previousHash } = previousBlock;

			return new this(timestamp, previousHash, hash, data);
		}

		static hash(timestamp, previousHash, data) {
			return SHA256(`${timestamp}${previousHash}${data}`).toString();
		}

		toString() {
			const {
				timestamp, previousHash, hash, data,
			} = this;

			return `Block : 
timestamp			: ${timestamp}
previousHash			: ${previousHash}
hash				: ${hash}
data				: ${data}
			`;
		}
}

export default Block;