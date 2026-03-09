import fs from 'fs';
import { rpc, Contract, Address, Networks, TransactionBuilder, scValToNative } from '@stellar/stellar-sdk';

async function main() {
    const server = new rpc.Server('https://soroban-testnet.stellar.org');
    const contractId = 'CBKDFDBBEWSH7XVBIANRAZMYPDDYDKO7SCHHNZSYBQ32JALUR5QMZWBG';
    const contract = new Contract(contractId);
    const userAddress = 'GBGJCHXLEFP66DSM2J5DACLDTHQG6CDTSU7ZX2HNFQN627BT5GF7XG4G'; // A known testnet active account

    try {
        const sourceAccount = await server.getAccount(userAddress);
        const nxsTx = new TransactionBuilder(sourceAccount, { fee: '100', networkPassphrase: Networks.TESTNET })
            .addOperation(contract.call('get_nxs_balance', new Address(userAddress).toScVal()))
            .setTimeout(30)
            .build();

        const sim = await server.simulateTransaction(nxsTx);
        console.log("Keys:", Object.keys(sim));
        if (sim.result && sim.result.retval) {
            console.log("Retval Native:", scValToNative(sim.result.retval));
        } else {
            console.log("Simulating empty or error:");
            fs.writeFileSync('check_output.json', JSON.stringify(sim, null, 2), 'utf-8');
            console.log("Error written to check_output.json");
        }
    } catch (err) {
        console.error(err);
    }
}
main();
