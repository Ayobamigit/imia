import React from 'react';
import { Table } from 'react-bootstrap';
import {ReactComponent as Toggle} from '../../assets/icons/toggle.svg';
import {ReactComponent as Image} from '../../assets/icons/Image.svg';
import {ReactComponent as Status} from '../../assets/icons/status.svg';

const ProductTable = () => {
    return (
        <div className="table-section">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Product<span className = 'ml-10'><Toggle /></span></th>
                        <th>Inventory<span className = 'ml-10'><Toggle /></span></th>
                        <th>Category<span className = 'ml-10'><Toggle /></span></th>
                        <th>Price<span className = 'ml-10'><Toggle /></span></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                    <tr>
                        <td className="bold"><span className = 'mr-16'><Status /></span><span className = 'mr-14'><Image /></span>Here's where the name of the product goes</td>
                        <td>210 in stock</td>
                        <td>Fashion</td>
                        <td>$250.99</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ProductTable
