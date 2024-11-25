import CountriesCatalog from '@/assets/dummy/countries.json'
import GendersCatalog from '@/assets/dummy/genders.json'
import HowDidYouHearAboutUsCatalog from '@/assets/dummy/how-did-you-hear-about-us.json'

interface GetDummyDataProps {
  dataType: 'countries' | 'genders' | 'howDidYouHearAboutUs'
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
    }
  } catch (error) {
    console.error('Error getting dummy data:', error)
    return null
  }
}

export { getDummyData }
