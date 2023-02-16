import React, { useEffect, useState } from "react"
import styled, { css, useTheme } from "styled-components"
import { FormProvider, useForm } from "react-hook-form"
import Flex from "../flex/flex-component"
import Heading from "../heading/heading.components"
import Modal from "../modal/modal.components"
import Text from "../text/text.components"
import { yupResolver } from "@hookform/resolvers/yup"
import { ContactModalProps } from "./contact-modal.types"
import { IForm } from "./contact-modal.types"
import { schema } from "./schema"
import { Button } from "../button/button.components"
import Input from "../input/input.component"
const ContactModal = ({ modalOpen, setModalOpen }: ContactModalProps) => {
  const methods = useForm<IForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmitForm = methods.handleSubmit((form) => {
    console.log(form)
  })


  return (
    <>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <Flex direction="column" gap="16px">
            <Heading variant="h4" align="left">
              Contact Us!
            </Heading>
            <Text color="primary" align="center">
              Email us about your project idea and we will try our best to help
              you build your dream website!
            </Text>
            <FormProvider {...methods}>
              <form onSubmit={onSubmitForm} data-testid="sign-in-form">
                <Input
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="váš-email@underoof.sk"
                  err={methods.formState.errors.email?.message}
                  required
                />
                <Input
                  label="Heslo"
                  name="password"
                  type="password"
                  placeholder="Vaše heslo"
                  err={methods.formState.errors.password?.message}
                  required
                />

                <Button>Submit</Button>
              </form>
            </FormProvider>
          </Flex>
        </Modal>
      )}
    </>
  )
}

export default ContactModal
