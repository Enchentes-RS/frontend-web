import type { ReactNode } from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type AccordionItemWrapperProps = {
  summary: string
  children: ReactNode
}

export const AccordionItemWrapper = ({
  summary,
  children,
}: AccordionItemWrapperProps) => {
  return (
    <AccordionItem value={summary}>
      <AccordionTrigger>{summary}</AccordionTrigger>
      <AccordionContent className="text-sm">{children}</AccordionContent>
    </AccordionItem>
  )
}
