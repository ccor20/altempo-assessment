import { useEffect, useState } from 'react'
import { IdealServiceCatalogItem } from '@/types'
import { getDummyData } from '@/utils/getDummyData'

interface IdealServiceCatalogs {
  serviceTypes: IdealServiceCatalogItem[]
  occasionTypes: IdealServiceCatalogItem[]
}

const useIdealService = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [idealServiceCatalogs, setIdealServiceCatalogs] =
    useState<IdealServiceCatalogs>({ serviceTypes: [], occasionTypes: [] })
  const [serviceSelected, setServiceSelected] =
    useState<IdealServiceCatalogItem>()
  const [occasionTypeSelected, setOccasionTypeSelected] =
    useState<IdealServiceCatalogItem>()

  const getCatalogs = async () => {
    setIsLoading(true)

    try {
      const serviceTypes = await getDummyData<IdealServiceCatalogItem[]>({
        dataType: 'idealService_services'
      })

      const occasionTypes = await getDummyData<IdealServiceCatalogItem[]>({
        dataType: 'idealService_occasionTypes'
      })

      if (serviceTypes && occasionTypes)
        setIdealServiceCatalogs({ serviceTypes, occasionTypes })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleServiceSelected = (service: IdealServiceCatalogItem) => {
    setServiceSelected(service)
  }

  const handleOccasionTypeSelected = (
    occasionType: IdealServiceCatalogItem
  ) => {
    setOccasionTypeSelected(occasionType)
  }

  useEffect(() => {
    getCatalogs()
  }, [])

  return {
    isLoading,
    idealServiceCatalogs,
    serviceSelected,
    occasionTypeSelected,
    handleServiceSelected,
    handleOccasionTypeSelected
  }
}

export default useIdealService
