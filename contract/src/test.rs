
use crate::{Crowdfunding, CrowdfundingClient};
use soroban_sdk::{testutils::Address as _, Address, Env};

#[test]
fn test_initialize_and_get_platform_total() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Crowdfunding);
    let client = CrowdfundingClient::new(&env, &contract_id);

    client.initialize();
    
    assert_eq!(client.get_platform_total(), 0);
}

#[test]
fn test_donate() {
    let env = Env::default();
    env.mock_all_auths();
    
    let contract_id = env.register_contract(None, Crowdfunding);
    let client = CrowdfundingClient::new(&env, &contract_id);

    client.initialize();
    
    let user = Address::generate(&env);
    
    client.donate(&user, &1, &100);
    
    assert_eq!(client.get_total(&1), 100);
    assert_eq!(client.get_platform_total(), 100);
}

#[test]
fn test_multiple_donations() {
    let env = Env::default();
    env.mock_all_auths();
    
    let contract_id = env.register_contract(None, Crowdfunding);
    let client = CrowdfundingClient::new(&env, &contract_id);

    client.initialize();
    
    let user1 = Address::generate(&env);
    let user2 = Address::generate(&env);
    
    client.donate(&user1, &1, &100);
    client.donate(&user2, &1, &50);
    client.donate(&user1, &2, &200);
    
    assert_eq!(client.get_total(&1), 150);
    assert_eq!(client.get_total(&2), 200);
    assert_eq!(client.get_platform_total(), 350);
}
