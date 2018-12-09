import { gql } from 'apollo-boost';

const getCustomerMutation = gql`
    mutation GetCustomer($email: String!, $password: String!){
        customer(email: $email, password: $password){
            id,
            firstName,
            lastName
        }
    }
`;

export { getCustomerMutation }