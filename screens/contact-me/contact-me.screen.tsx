import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import Input from "../../components/input/input.component"
import { FormProvider, useForm } from "react-hook-form"
import { IForm } from "./contactMe.types"
import PageContainer from "../../components/page-container/page-container.component"
import Heading from "../../components/heading/heading.components"
import { Button } from "../../components/button/button.components"
import ContactModal from "../../components/contact-modal/contact-modal.component"
function ContactMe() {
  const [modalOpen, setModalOpen] = useState(false)
  const CONTACT_ME_DATA: Array<any> = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "message", type: "text", placeholder: "Share your thoughts" },
  ]
  const theme = useTheme()
  const methods = useForm<IForm>({
    // resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  })

  return (
    <Wrapper>
      <Container>
        <Heading variant="h2" align="center" color="white">
          Have Projects in Your Mind?
          <br />
          Lets Work Together
        </Heading>
        <Description>
          Contact me with your project idea and get full page product
        </Description>
        <Button onClick={() => setModalOpen(true)}>
          Lets Start Your Project
        </Button>
      </Container>
      <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Wrapper>
  )
}

export default ContactMe
const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`
const Description = styled.p`
  font-size: 1.8rem;
  margin: 4rem 0rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`
const Container = styled(PageContainer)`
  padding: 14rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
