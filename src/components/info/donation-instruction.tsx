import { useState } from 'react'

import { Button } from '../ui/button'

import { cn } from '@/lib/utils'

interface DonationInstructionProps {
  pixKeyType: string
  pixKeyValue: string
}

const DonationInstruction = ({
  pixKeyType,
  pixKeyValue,
}: DonationInstructionProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(pixKeyValue)

    setTimeout(() => {
      setCopied(false)
    }, 500)
  }

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <p>{pixKeyType}</p>
      <p className="text-2xl font-bold">{pixKeyValue}</p>
      <Button
        type="button"
        variant={'ghost'}
        onClick={copyToClipboard}
        className={cn(
          'font-bold text-green-950',
          copied ? 'animate-highlight-button-action' : '',
        )}
      >
        {copied ? 'Copiado!' : 'Copiar'}
      </Button>
    </div>
  )
}

export { DonationInstruction }
