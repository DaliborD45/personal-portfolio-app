export interface ContactModalProps {
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export type OnSubmitType = () => void
export type OnErrorType = (error: ApolloError) => void
export type OnCompletedType = (data: ILoginUserData) => void

export interface IProps {
  onSubmit?: OnSubmitType
  onCompleted?: OnCompletedType
  onError?: OnErrorType
}

export interface IForm {
  email: string
  password: string
}

export interface ILoginUserData {
  loginUser: {
    message: {
      sk: string
      en: string
    }
    token: string
    user: object
  }
}

export interface IloginUserVars {
  input: {
    email: string
    password: string
  }
}
