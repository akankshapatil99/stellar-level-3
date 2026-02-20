#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, Env, Address, Symbol};

#[contract]
pub struct Crowdfunding;

#[contracttype]
pub enum DataKey {
    TotalFunds,
    Contributor(Address),
}

#[contractimpl]
impl Crowdfunding {

    pub fn initialize(env: Env) {
        env.storage().instance().set(&DataKey::TotalFunds, &0_i128);
    }

    pub fn donate(env: Env, from: Address, amount: i128) {
        from.require_auth();

        if amount <= 0 {
            panic!("Invalid amount");
        }

        let mut total: i128 = env.storage()
            .instance()
            .get(&DataKey::TotalFunds)
            .unwrap_or(0);

        total += amount;

        env.storage().instance().set(&DataKey::TotalFunds, &total);
        env.storage().instance().set(&DataKey::Contributor(from.clone()), &amount);

        env.events().publish(
            (Symbol::new(&env, "donation"), from),
            amount
        );
    }

    pub fn get_total(env: Env) -> i128 {
        env.storage()
            .instance()
            .get(&DataKey::TotalFunds)
            .unwrap_or(0)
    }
}
