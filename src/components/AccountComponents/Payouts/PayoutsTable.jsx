import React from 'react';
import { Table } from 'react-bootstrap';
import {ReactComponent as Icon} from '../../../assets/icons/download.svg';


const PayoutsTable = () => {
    return (
        <div className="table-payout">
            <Table responsive>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>payment for</th>
                        <th>total</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-grey">Pending</span></td>
                        <td><Icon /></td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-paid">Completed</span></td>
                        <td><Icon /></td>
                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-paid">Completed</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-grey">Pending</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-grey">Pending</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-paid">Completed</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-grey">Pending</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-paid">Completed</span></td>
                        <td><Icon /></td>

                    </tr>
                    <tr>
                        <td>08 Aug 2020</td>
                        <td>01 - 07 Aug 2020</td>
                        <td>$52,500.00</td>
                        <td><span className="table-grey">Pending</span></td>
                        <td><Icon /></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PayoutsTable
