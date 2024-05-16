import { useState } from 'react'

import { cn } from '@/lib/utils'

type DonationInstructionProps = {
  keyType: string
  keyValue: string
}

export const DonationInstruction = ({
  keyType,
  keyValue,
}: DonationInstructionProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(keyValue)

    setTimeout(() => {
      setCopied(false)
    }, 500)
  }

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <p>{keyType}</p>
      <p className="text-2xl font-bold">{keyValue}</p>
      <button
        type="button"
        onClick={copyToClipboard}
        className={cn(
          'font-bold text-green-950',
          copied ? 'animate-highlight-copied-text' : '',
        )}
      >
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}
