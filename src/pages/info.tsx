import { Helmet } from 'react-helmet-async'

import { DonationsInfo } from '@/components/donations-info'
import { GeneralInfo } from '@/components/general-info'

export const InfoPage = () => {
  return (
    <>
      <Helmet title="Informações" />
      <div className="mx-auto flex w-full flex-col gap-12 px-4 py-6 sm:max-w-2xl">
        <GeneralInfo />
        <DonationsInfo />
      </div>
    </>
  )
}
