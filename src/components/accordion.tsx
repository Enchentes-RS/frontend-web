import { Accordion as AccordionWrapper } from '@/components/ui/accordion'

interface AccordionProps {
  accordionContent: {
    summary: string
    content: JSX.Element
  }[]
}

const Accordion = ({ accordionContent = [] }: AccordionProps) => {
  return (
    <AccordionWrapper type="single" collapsible className="w-full">
      {accordionContent.map(({ summary, content }) => (
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
