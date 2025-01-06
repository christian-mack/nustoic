import Image from 'next/image'

const transactions = [
  {
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    icon: '💳',
  },
  {
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: '🅿️',
  },
  {
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: '👤',
  },
]

export function RecentTransactions() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Recent Transaction</h3>
      </div>
      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div key={transaction.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                {transaction.icon}
              </div>
              <div>
                <div className="font-medium">{transaction.name}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div className={`font-medium ${
              transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

