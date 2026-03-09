import {
    Contract,
    rpc,
    Networks,
    TransactionBuilder
} from "@stellar/stellar-sdk";

const server = new rpc.Server("https://soroban-testnet.stellar.org");

// Updated to the Custom Token Nxs Balance integration contract ID
const CONTRACT_ID = "CBZ7ZPWXXWSHXWDLH2ZFC5XS66HAWWJZRJP3YC5BZ773KWLZPPRDKM3M";

const contract = new Contract(CONTRACT_ID);

export { server, contract, Networks, TransactionBuilder };