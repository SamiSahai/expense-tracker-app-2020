import React from 'react'

export const Transaction = ({ transaction }) => {
    return (
        <li className="plus">
            {Transaction.description}
            <span>{Transaction.transactionAmount}</span>
            <button className="delete-btn">x</button>

        </li>
    )
}
