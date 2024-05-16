import { Helmet } from 'react-helmet-async'

import { DonationsInfo } from '@/components/info/donations-info'
import { GeneralInfo } from '@/components/info/general-info'

export const InfoPage = () => {
  return (
    <div className="flex flex-col gap-12 p-10 md:mx-auto md:max-w-2xl">
      <Helmet title="Informações" />
      <GeneralInfo />
      <DonationsInfo />
    </div>
  )
}
