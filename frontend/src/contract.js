import {
    Contract,
    rpc,
    Networks,
    TransactionBuilder
} from "@stellar/stellar-sdk";

const server = new rpc.Server("https://soroban-testnet.stellar.org");

// Updated to the Custom Token Nxs Balance integration contract ID
const CONTRACT_ID = "CBKDFDBBEWSH7XVBIANRAZMYPDDYDKO7SCHHNZSYBQ32JALUR5QMZWBG";

const contract = new Contract(CONTRACT_ID);

export { server, contract, Networks, TransactionBuilder };