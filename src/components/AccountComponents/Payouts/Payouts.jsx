import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import PayoutInfo from './PayoutInfo'
import PayoutsTable from './PayoutsTable'
import { AccountsContext } from '../../../pages/Merchant/Account/Account';
import EmptyState from '../../EmptyState/EmptyState';


const Payouts = () => {

    const { state:{payoutList}} = useContext(AccountsContext);

    return (
        <Container className="payout-container">
            <PayoutInfo
                text = "We pay out your total earnings for each week — less any fees — to the bank account you provided in your business info."
             />
            {
                payoutList.length === 0?
                <div className="extra">
                    <EmptyState
                        title = "No payouts yet"
                        text = "You've not completed any order yet. Once you make a sale and complete the order, you'll see payouts."
                    />
                </div>
                :
                <PayoutsTable/>
            }
        </Container>
    )
}

export default Payouts
