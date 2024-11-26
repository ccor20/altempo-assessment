import { useState } from 'react'
import { ContractorTypeOption } from '@/types'
import AnnouncerIcon from '@/assets/icons/announcer.svg?react'
import ComposerIcon from '@/assets/icons/composer.svg?react'
import MusicalizationIcon from '@/assets/icons/musicalization.svg?react'
import ProducerIcon from '@/assets/icons/producer.svg?react'
import SingerIcon from '@/assets/icons/singer.svg?react'

const contractorTypeOptions: ContractorTypeOption[] = [
  {
    id: 'music',
    label: 'Musicalización',
    icon: <MusicalizationIcon />
  },
  {
    id: 'producer',
    label: 'Productor',
    icon: <ProducerIcon />
  },
  {
    id: 'announcer',
    label: 'Locutor',
    icon: <AnnouncerIcon />
  },
  {
    id: 'composer',
    label: 'Compositor',
    icon: <ComposerIcon />
  },
  {
    id: 'singer',
    label: 'Cantante',
    icon: <SingerIcon />
  }
]

const useInterestPreferences = () => {
  const [contractorTypesSelected, setContractorTypesSelected] = useState<
    string[]
  >([])

  const handleSelectedContractorTypes = (contractorId: string) => {
    if (contractorTypesSelected.includes(contractorId)) {
      setContractorTypesSelected(
        contractorTypesSelected.filter((id) => id !== contractorId)
      )
    } else {
      setContractorTypesSelected([...contractorTypesSelected, contractorId])
    }
  }

  return {
    contractorTypesSelected,
    contractorTypeOptions,
    handleSelectedContractorTypes
  }
}

export default useInterestPreferences
