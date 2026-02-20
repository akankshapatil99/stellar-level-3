import {
    Contract,
    rpc,
    Networks,
    TransactionBuilder
} from "@stellar/stellar-sdk";

const server = new rpc.Server("https://soroban-testnet.stellar.org");

const CONTRACT_ID = "CAOD5LAIOGIT4TWZD6FCV2YDDRPQPBPG4EAWCUURXICQYWUBKJYAIAWI";

const contract = new Contract(CONTRACT_ID);

export { server, contract, Networks, TransactionBuilder };