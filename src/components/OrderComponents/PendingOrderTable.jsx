import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

import {ReactComponent as Toggle} from '../../assets/icons/toggle.svg';

const OrderTable = () => {
    const history = useHistory();
    const orderId = '23190FHB';

    return (
        <div className="table-section">
            <Table responsive>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>order no.</th>
                        <th>customer</th>
                        <th>payment<span className = 'ml-10'><Toggle /></span></th>
                        <th>status<span className = 'ml-10'><Toggle /></span></th>
                        <th>total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr onClick={() => {history.push(`/order/${orderId}`)}}>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Waiting confirmation</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Confirmed</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Waiting confirmation</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Waiting confirmation</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Confirmed</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Confirmed</span></td>
                        <td>$52,500.00</td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>#1010</td>
                        <td>pamvik@gmail.com</td>
                        <td><span className="table-paid">Paid</span></td>
                        <td><span className="table-grey">Waiting confirmation</span></td>
                        <td>$52,500.00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default OrderTable
