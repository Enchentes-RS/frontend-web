import { Helmet } from 'react-helmet-async'

import { DonationsInfo } from '@/components/donations-info'
import { GeneralInfo } from '@/components/general-info'

export const InfoPage = () => {
  return (
    <div className="mx-auto flex flex-col gap-12 p-10 md:max-w-2xl">
      <Helmet title="Informações" />
      <GeneralInfo />
      <DonationsInfo />
    </div>
  )
}
