import { Buttons, Inputs } from '@/components'
import useSignupForm from './hooks/useSignupForm'
import styles from './styles'

type Props = {
  onContinue: () => void
  onCancel: () => void
}

const SignupForm: React.FC<Props> = ({ onContinue, onCancel }) => {
  const {
    user,
    isLoading,
    requiredFieldsErrors,
    onChangeText,
    onChangeCountry,
    onChangeGender,
    onChangeHowDidYouKnowUs,
    onChangeDate,
    checkIfHasErrors,
    getCountryCatalog,
    getGenderCatalog,
    getHowDidYouHearAboutUsCatalog
  } = useSignupForm()

  return (
    <div className={styles}>
      <div className="form-header">
        <h4 className="paragraph-base">INFORMACIÓN GENERAL</h4>
        <span className="paragraph-sm">Compártenos un poco de ti.</span>
      </div>
      {isLoading ? (
        <div className="loading">
          <span className="heading-5">Cargando...</span>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const hasErrors = checkIfHasErrors()

            if (!hasErrors) onContinue()
          }}
        >
          <div className="form-row">
            <Inputs.Text
              label="Nombre"
              name="name"
              onChange={onChangeText}
              error={requiredFieldsErrors?.name}
            />
            <Inputs.Text
              label="Correo electrónico"
              name="email"
              type="email"
              onChange={onChangeText}
              error={requiredFieldsErrors?.email}
            />
          </div>
          <div className="form-row">
            <Inputs.Text
              label="Contraseña"
              name="password"
              type="password"
              id="password"
              helperText="Asegúrate de cumplir con 8 caracteres mínimo."
              onChange={onChangeText}
              error={requiredFieldsErrors?.password}
            />
            <Inputs.Text
              label="Confirmar contraseña"
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              onChange={onChangeText}
              error={requiredFieldsErrors?.confirmPassword}
            />
          </div>
          <div className="form-row">
            <Inputs.Select
              label="País de residencia"
              id="country"
              name="country"
              options={getCountryCatalog()}
              onSelectChange={onChangeCountry}
              error={requiredFieldsErrors?.country}
              selectedValue={user?.country}
            />
            <Inputs.Date
              label="Fecha de nacimiento"
              // id="birthday"
              // name="birthday"
              onChange={onChangeDate}
              value={user?.birthday}
              error={requiredFieldsErrors?.birthday}
            />
          </div>
          <div className="form-row">
            <Inputs.Select
              label="Género"
              id="gender"
              name="gender"
              options={getGenderCatalog()}
              optional
              onSelectChange={onChangeGender}
              selectedValue={user?.gender}
            />
            <Inputs.Text
              label="Teléfono"
              id="phone"
              name="phone"
              optional
              type="tel"
              value={user?.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeText(e, true)
              }
            />
          </div>
          <div className="form-row">
            <Inputs.Select
              label="¿Cómo nos conociste?"
              id="howDidYouKnowUs"
              name="howDidYouKnowUs"
              options={getHowDidYouHearAboutUsCatalog()}
              optional
              onSelectChange={onChangeHowDidYouKnowUs}
              selectedValue={user?.howDidYouKnowUs}
            />
            <div></div>
          </div>
          <div className="actions">
            <Buttons.OutlineButton
              className="cancel-button"
              type="button"
              onClick={onCancel}
            >
              <span className="paragraph-base">Cancelar</span>
            </Buttons.OutlineButton>
            <Buttons.DefaultButton className="submit-button" type="submit">
              <span className="paragraph-base">Continuar</span>
            </Buttons.DefaultButton>
          </div>
        </form>
      )}
    </div>
  )
}

export default SignupForm
