import { Accordion as AccordionWrapper } from '@/components/ui/accordion'

interface AccordionProps {
  accordionItems: {
    summary: string
    content: JSX.Element
  }[]
}

const Accordion = ({ accordionItems = [] }: AccordionProps) => {
  return (
    <AccordionWrapper type="single" collapsible className="w-full">
      {accordionItems.map(({ summary, content }) => (
        <AccordionWrapper.Item value={summary} key={summary}>
          <AccordionWrapper.Trigger>{summary}</AccordionWrapper.Trigger>
          <AccordionWrapper.Content className="text-sm">
            {content}
          </AccordionWrapper.Content>
        </AccordionWrapper.Item>
      ))}
    </AccordionWrapper>
  )
}

export { Accordion }
