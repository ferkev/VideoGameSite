import { gql } from 'apollo-boost';

const getCustomerMutation = gql`
    mutation GetCustomer($email: String!, $password: String!){
        customer(email: $email, password: $password){
            token,
        }
    }
`;

export { getCustomerMutation }