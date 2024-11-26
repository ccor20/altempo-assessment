import { useState } from 'react'
import { ContractorTypeOption } from '@/types'
import { SelectOption } from '@/components/types'
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

const importantCharacteristics: SelectOption[] = [
  {
    value: 'responsibility',
    label: 'Responsabilidad'
  },
  {
    value: 'proactivity',
    label: 'Proactividad en materiales'
  },
  {
    value: 'location',
    label: 'Cercano a mi ubicación'
  },
  {
    value: 'creative',
    label: 'Creativo'
  },
  {
    value: 'intermediate',
    label: 'Que tenga un nivel de experiencia intermedio'
  },
  {
    value: 'proposals',
    label: 'Genere propuestas en el proceso'
  },
  {
    value: 'material',
    label: 'Contar con material propio'
  },
  {
    value: 'brand',
    label: 'Que tenga una marca personal'
  },
  {
    value: 'groups',
    label: 'Solo que sean agrupaciones'
  },
  {
    value: 'beginner',
    label: 'Que tenga un nivel de experiencia principiante'
  },
  {
    value: 'high',
    label: 'Que tenga un nivel de experiencia alto'
  },
  {
    value: 'other',
    label: 'Otro'
  }
]

const useInterestPreferences = () => {
  const [contractorTypesSelected, setContractorTypesSelected] = useState<
    string[]
  >([])
  const [
    importantCharacteristicsSelected,
    setImportantCharacteristicsSelected
  ] = useState<string[]>([])
  const [yourGoal, setYourGoal] = useState<string>('')

  const handleSelectedContractorTypes = (contractorId: string) => {
    if (contractorTypesSelected.includes(contractorId)) {
      setContractorTypesSelected(
        contractorTypesSelected.filter((id) => id !== contractorId)
      )
    } else {
      setContractorTypesSelected([...contractorTypesSelected, contractorId])
    }
  }

  const handleSelectedImportantCharacteristics = (characteristic: string) => {
    if (importantCharacteristicsSelected.includes(characteristic)) {
      setImportantCharacteristicsSelected(
        importantCharacteristicsSelected.filter((id) => id !== characteristic)
      )
    } else {
      setImportantCharacteristicsSelected([
        ...importantCharacteristicsSelected,
        characteristic
      ])
    }
  }

  const handleYourGoal = (goal: string) => {
    setYourGoal(goal)
  }

  return {
    contractorTypesSelected,
    contractorTypeOptions,
    importantCharacteristics,
    importantCharacteristicsSelected,
    yourGoal,
    handleSelectedContractorTypes,
    handleSelectedImportantCharacteristics,
    handleYourGoal
  }
}

export default useInterestPreferences
