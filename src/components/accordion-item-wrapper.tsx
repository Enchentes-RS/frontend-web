import type { ReactNode } from 'react'

import { Accordion } from '@/components/ui/accordion'

type AccordionItemWrapperProps = {
  summary: string
  children: ReactNode
}

export const AccordionItemWrapper = ({
  summary,
  children,
}: AccordionItemWrapperProps) => {
  return (
    <Accordion.AccordionItem value={summary}>
      <Accordion.AccordionTrigger>{summary}</Accordion.AccordionTrigger>
      <Accordion.AccordionContent className="text-sm">
        {children}
      </Accordion.AccordionContent>
    </Accordion.AccordionItem>
  )
}
