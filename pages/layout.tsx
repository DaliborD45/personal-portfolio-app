
// Utils
import styled from "styled-components"
// Components
import Header from "../components/header/header.component"
// import Image from "../../components/image/image.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			{/* <Header /> */}
			<Main>{children}</Main>
		</>
	)
}

export default PageLayout

// const ScrollContainer = styled.div`
// 	position: relative;
// 	/* height: 100%; */
// 	/* scroll-behavior: smooth !important;
// 	scroll-snap-type: y mandatory; */
// `

const Main = styled.main`
	position: relative;
	z-index: 1;
	// background: linear-gradient(180deg, #1c2527 0%, #14161a 80.73%, #121316 100%);
	background-color:red;
	scroll-behavior: smooth !important;
`

const EyesContainer = styled.div`
	padding: 0 2rem;
	/* position: absolute; */
	width: 100%;
	max-width: 70rem;
	/* border: 1px solid red; */
	/* top: 0rem; */
	/* left: 50%;
	transform: translateX(-50%); */
	/* background-color: #444; */
	/* z-index: 10; */
	margin: 0 auto;
`
