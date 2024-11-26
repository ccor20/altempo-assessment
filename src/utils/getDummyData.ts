import CountriesCatalog from '@/assets/dummy/countries.json'
import GendersCatalog from '@/assets/dummy/genders.json'
import HowDidYouHearAboutUsCatalog from '@/assets/dummy/how-did-you-hear-about-us.json'
import OccasionTypeCatalog from '@/assets/dummy/ideal-service/occasion-types.json'
import ServiceTypeCatalog from '@/assets/dummy/ideal-service/services-types.json'

interface GetDummyDataProps {
  dataType:
    | 'countries'
    | 'genders'
    | 'howDidYouHearAboutUs'
    | 'idealService_occasionTypes'
    | 'idealService_services'
}

const getDummyData = async <T extends unknown>({
  dataType
}: GetDummyDataProps) => {
  try {
    switch (dataType) {
      case 'countries':
        return CountriesCatalog as T
      case 'genders':
        return GendersCatalog as T
      case 'howDidYouHearAboutUs':
        return HowDidYouHearAboutUsCatalog as T
      case 'idealService_occasionTypes':
        return OccasionTypeCatalog as T
      case 'idealService_services':
        return ServiceTypeCatalog as T
    }
  } catch (error) {
    console.error('Error getting dummy data:', error)
    return null
  }
}

export { getDummyData }
