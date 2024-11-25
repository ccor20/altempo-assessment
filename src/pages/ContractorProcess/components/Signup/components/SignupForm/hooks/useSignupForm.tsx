import { useEffect, useState } from 'react'
import { Country } from '@/types'
import { getDummyData } from '@/utils/getDummyData'
import { SelectOption } from '@/components/types'

interface User {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  country?: SelectOption
  birthday?: Date
  gender?: SelectOption
  phone?: string
  howDidYouKnowUs?: SelectOption
}

interface RequiredFieldsErrors {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  country?: string
  birthday?: string
}

interface Catalogs {
  countries: Country[] | null
  genders: string[] | null
  howDidYouHearAboutUs: string[] | null
}

const useSignupForm = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: undefined,
    birthday: undefined,
    gender: undefined,
    howDidYouKnowUs: undefined
  })
  const [requiredFieldsErrors, setRequiredFieldsErrors] =
    useState<RequiredFieldsErrors>()
  const [catalogs, setCatalogs] = useState<Catalogs>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handlePhoneNumber = (inputValue: string) => {
    if (!/^[0-9+ ]*$/.test(inputValue)) return

    let cleaned = inputValue.replace(/\s/g, '')
    let formatted = ''

    if (cleaned.startsWith('+')) {
      formatted = cleaned.split('').reduce((acc, curr, idx) => {
        if (idx === 0) return curr
        return acc + (idx % 3 === 0 ? ' ' + curr : curr)
      }, '')
    } else {
      formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ')
    }

    return formatted
  }

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement>,
    isForPhone?: boolean
  ) => {
    const { name, value } = e.target
    let newValue = value

    if (isForPhone) {
      newValue = handlePhoneNumber(value) || ''
    }

    setUser((prevState) => ({
      ...prevState,
      [name]: newValue.trim()
    }))
  }

  const onChangeCountry = (value: SelectOption) => {
    setUser((prevState) => ({
      ...prevState,
      country: value
    }))
  }

  const onChangeGender = (value: SelectOption) => {
    setUser((prevState) => ({
      ...prevState,
      gender: value
    }))
  }

  const onChangeHowDidYouKnowUs = (value: SelectOption) => {
    setUser((prevState) => ({
      ...prevState,
      howDidYouKnowUs: value
    }))
  }

  const onChangeDate = (date: Date) => {
    setUser((prevState) => ({
      ...prevState,
      birthday: date
    }))
  }

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const checkIfHasErrors = (): boolean => {
    let hasErrors = false

    if (user?.name) {
      if (user?.name.length < 3) {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          name: 'El nombre debe tener al menos 3 caracteres.'
        }))
        return true
      } else {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          name: undefined
        }))
        hasErrors = false
      }
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        name: 'El nombre es requerido.'
      }))
      return true
    }

    if (user?.email) {
      if (isValidEmail(user?.email)) {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          email: undefined
        }))
        hasErrors = false
      } else {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          email: 'El formato del email es incorrecto.'
        }))
        return true
      }
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        email: 'El email es requerido.'
      }))
      return true
    }

    if (user?.password) {
      if (user?.password.length < 8) {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          password: 'La contraseña debe tener al menos 8 caracteres.'
        }))
        return true
      } else {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          password: undefined
        }))
        hasErrors = false
      }
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        password: 'La contraseña es requerida.'
      }))
      return true
    }

    if (user?.confirmPassword) {
      if (user?.confirmPassword !== user?.password) {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          confirmPassword: 'Las contraseñas no coinciden.'
        }))
        return true
      } else {
        setRequiredFieldsErrors((prevState) => ({
          ...prevState,
          confirmPassword: undefined
        }))
        hasErrors = false
      }
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        confirmPassword: 'La confirmación de la contraseña es requerida.'
      }))
      return true
    }

    if (!user?.country) {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        country: 'Se debe asignar al menos un país.'
      }))
      return true
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        country: undefined
      }))
      hasErrors = false
    }

    if (!user?.birthday) {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        birthday: 'La fecha de nacimiento es requerida.'
      }))
      return true
    } else {
      setRequiredFieldsErrors((prevState) => ({
        ...prevState,
        birthday: undefined
      }))
      hasErrors = false
    }

    return hasErrors
  }

  const getCatalogs = async () => {
    setIsLoading(true)

    try {
      const countries = await getDummyData<Country[]>({ dataType: 'countries' })
      const genders = await getDummyData<string[]>({ dataType: 'genders' })
      const howDidYouHearAboutUs = await getDummyData<string[]>({
        dataType: 'howDidYouHearAboutUs'
      })

      setCatalogs({
        countries,
        genders,
        howDidYouHearAboutUs
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCountryCatalog = () =>
    catalogs?.countries?.map((country) => ({
      label: country.name,
      value: country.code
    })) as SelectOption[]

  const getGenderCatalog = () =>
    catalogs?.genders?.map((gender) => ({
      label: gender,
      value: gender
    })) as SelectOption[]

  const getHowDidYouHearAboutUsCatalog = () =>
    catalogs?.howDidYouHearAboutUs?.map((option) => ({
      label: option,
      value: option
    })) as SelectOption[]

  useEffect(() => {
    getCatalogs()
  }, [])

  return {
    user,
    requiredFieldsErrors,
    isLoading,
    checkIfHasErrors,
    onChangeText,
    onChangeCountry,
    onChangeGender,
    onChangeHowDidYouKnowUs,
    onChangeDate,
    getCountryCatalog,
    getGenderCatalog,
    getHowDidYouHearAboutUsCatalog
  }
}

export default useSignupForm
