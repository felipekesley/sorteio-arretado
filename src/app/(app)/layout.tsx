import { AppRoot } from '@/components/_shared/appRoot'
import { Footer } from '@/components/_shared/footer'
import { Header } from '@/components/_shared/header'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<AppRoot>
				<Header />
				{children}
				<Footer />
			</AppRoot>
		</>
	)
}

export default AppLayout
