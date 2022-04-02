import React from "react";
import PurchaseService from "../services/PurchaseService";

class PurchaseComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transactionsMonth: [],
            transactionsTotal: []
        }
    }

    componentDidMount() {
        PurchaseService.getPurchasesMonth().then((response) => {
            this.setState({transactionsMonth: response.data})
        });

        PurchaseService.getPurchasesTotal().then((response) => {
            this.setState({transactionsTotal: response.data})
        });
    }


    render() {
        return (

            <div className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-5xl font-semibold text-gray-900">Points Rewards by Month</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            List of transactions of every user per month.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col max-w-5xl mx-auto">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Last Name
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Month
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Number of Transactions
                                        </th>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Reward Points
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {this.state.transactionsMonth.map(
                                        transaction => (
                                            <tr key={transaction.id}>
                                                <td className="whitespace-nowrap text-left py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {transaction.name}
                                                </td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.lastName}</td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.month}</td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.transactions}</td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.rewardsPoints}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto pt-20">
                        <h1 className="text-5xl font-semibold text-gray-900">Points Rewards Total</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Total reward point per user earned.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col max-w-5xl mx-auto">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Last Name
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Number of Transactions
                                        </th>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Reward Points
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {this.state.transactionsTotal.map(
                                        transaction => (
                                            <tr key={transaction.id}>
                                                <td className="whitespace-nowrap text-left py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {transaction.name}
                                                </td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.lastName}</td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.transactions}</td>
                                                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{transaction.rewardsPoints}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default PurchaseComponent