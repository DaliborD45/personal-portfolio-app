// Utils
import styled, { css } from "styled-components"

// Components
// import Image from "../image/image.component"

// Hooks
import { useFormContext } from "react-hook-form"
import { useBoolean } from "usehooks-ts"

// Icons
import { FiEye } from "react-icons/fi"

export interface IProps {
  name: string
  label: string
  type: "text" | "password" | "email" | "number" | "tel"
  rounded?: boolean
  validation?: object
  err?: string | undefined
  required?: boolean
  min?: number
  max?: number
  placeholder?: string
}

interface IInputContainerProps {
  hasError: boolean
  hasValue: boolean
  rounded: boolean
}

const Input: React.FC<IProps> = ({
  name,
  label,
  rounded,
  type,
  validation,
  required,
  err,
  ...rest
}) => {
  const { register, watch } = useFormContext()

  const { value: showPassword, toggle } = useBoolean(false)

  const value = watch(name)

  return (
    <InputContainer className="input">
      <InputGroup
        hasValue={!!value?.toString().length}
        rounded={rounded ? true : false}
        hasError={!!err}
      >
        <input
          {...rest}
          className="form-input"
          type={showPassword ? "text" : type}
          required={required}
          id={name}
          {...register(name, validation)}
        />
        <label htmlFor={name} className={`form-input-label shrink`}>
          {label}
        </label>
        {(type === "password" || showPassword) && (
          <figure
            onClick={(e) => {
              e.preventDefault()
              toggle()
            }}
          >
            {/* {showPassword ? (
              <Image
                src={"/assets/icons/show-password-icon.svg"}
                alt="password icon"
                width="25"
                height="25"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <FiEye />
            )} */}
          </figure>
        )}
      </InputGroup>
      <p>{err}</p>
    </InputContainer>
  )
}

export default Input

const InputContainer = styled.div`
	p {
		margin-left: 1.5rem;
		color: #000;
	}
`

const shrinkLabel = css`
	left: 0rem;
	top: -24px;
	font-size: 12px;
	font-weight: 700;

	color: #000;
`
const InputGroup = styled.div<IInputContainerProps>`
	position: relative;
	.form-input {
		background-color: #eee;
		color: #000;
		font-size: 1.6rem;
		padding: 1.7rem 2.4rem;
		display: block;
		width: 100%;
		border: ${({ theme, hasError, hasValue }) =>
			hasError
				? `1px solid red`
				: hasValue
				? `1px solid blue`
				: `1px solid #ddd`};
		border-radius: ${({ rounded }) => (rounded ? "999rem" : ".7rem")};
		margin: 3rem 0 1rem;
		font-family: inherit;
		&:focus {
			outline: none;
			border: ${({ theme, hasError }) =>
				hasError ? `1px solid red` : `1px solid blue`};
		}
		&:focus ~ .form-input-label {
			${shrinkLabel}
		}

		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			-webkit-box-shadow: 0 0 0 30px #eee inset !important;
		}

		&:-webkit-autofill {
			-webkit-text-fill-color: #000 !important;
		}
	}

	input[type="password"] {
		letter-spacing: 0.3em;
	}

	.form-input-label {
		color: #000;
		font-size: 1.2rem;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 1.5rem;
		top: 1.5rem;
		transition: 300ms ease all;
		&.shrink {
			${shrinkLabel}
		}
	}

	figure {
		cursor: pointer;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 2.4rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 2.5rem;

		color: #000;
	}
`

