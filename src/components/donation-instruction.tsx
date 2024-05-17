import { useState } from 'react'

import { Button } from '@/components/button'
import { cn } from '@/lib/utils'

interface DonationInstructionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  pixKeyType: string
  pixKeyValue: string
}

const DonationInstruction = ({
  className,
  pixKeyType,
  pixKeyValue,
}: DonationInstructionProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopyToClipboard = () => {
    setCopied(true)
    navigator.clipboard.writeText(pixKeyValue)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="flex items-baseline gap-2">
        <p>{pixKeyType}</p>
        <p className="text-xl font-bold">{pixKeyValue}</p>
      </div>
      <Button
        type="button"
        variant={'ghost'}
        onClick={handleCopyToClipboard}
        className="font-bold text-green-950"
      >
        {copied ? 'Copiado!' : 'Copiar'}
      </Button>
    </div>
  )
}

export { DonationInstruction }
