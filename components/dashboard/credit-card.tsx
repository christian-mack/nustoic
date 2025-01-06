interface CreditCardProps {
  balance: string
  cardHolder: string
  cardNumber: string
  expiry: string
  variant: 'primary' | 'secondary'
}

export function CreditCard({ balance, cardHolder, cardNumber, expiry, variant }: CreditCardProps) {
  const bgColor = variant === 'primary' ? 'bg-[#4543E8]' : 'bg-white'
  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-900'
  const borderClass = variant === 'secondary' ? 'border border-gray-200' : ''

  return (
    <div className={`${bgColor} ${textColor} ${borderClass} p-6 rounded-2xl w-96 h-56 flex flex-col justify-between`}>
      <div>
        <div className="text-sm opacity-80">Balance</div>
        <div className="text-2xl font-semibold">${balance}</div>
      </div>
      <div>
        <div className="mb-4">
          <div className="text-sm opacity-80">CARD HOLDER</div>
          <div>{cardHolder}</div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-sm opacity-80">VALID THRU</div>
            <div>{expiry}</div>
          </div>
          <div className="text-xl">{cardNumber}</div>
        </div>
      </div>
    </div>
  )
}

