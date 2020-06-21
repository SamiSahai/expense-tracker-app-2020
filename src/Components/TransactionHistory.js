import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Add income
                    <span>$0.000</span>
                    <button className="delete-btn">x</button>

                </li>
                <li className="minus">
                    Add Expense
                    <span>$-0.00</span>
                    <button className="delete-btn">x</button>

                </li>
                
            </ul>
        </div>
    )
}
