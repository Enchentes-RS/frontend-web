import { Accordion as AccordionUi } from '@/components/ui/accordion'

interface AccordionProps {
  accordionItems: {
    summary: string
    content: JSX.Element
  }[]
}

const Accordion = ({ accordionItems = [] }: AccordionProps) => {
  return (
    <AccordionUi type="single" collapsible className="w-full">
      {accordionItems.map(({ summary, content }) => (
        <AccordionUi.Item value={summary} key={summary}>
          <AccordionUi.Trigger>{summary}</AccordionUi.Trigger>
          <AccordionUi.Content className="text-sm">
            {content}
          </AccordionUi.Content>
        </AccordionUi.Item>
      ))}
    </AccordionUi>
  )
}

export { Accordion }
