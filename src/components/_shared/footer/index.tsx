import { PlataformMenu, RafflesMenu } from '@/components/_data/menu'
import { Container } from '@/components/_shared/container'
import { Title } from '@/components/_shared/title'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className="py-8">
			<Container>
				<Title tag="h3" fontWeight="bold" className="text-center text-white mb-8">
					Seu sonho a uma cota de distância. Participe agora mesmo!
				</Title>

				<div className="grid gap-6 grid-cols-12">
					<div className="col-span-6">
						<Title tag="h4" fontWeight="normal" className=" text-white mb-5">
							A plataforma
						</Title>

						<PlataformMenu />
					</div>
					<div className="col-span-6">
						<Title tag="h4" fontWeight="normal" className=" text-white mb-5">
							Sorteios
						</Title>

						<RafflesMenu />
					</div>
				</div>

				<div className="mt-6 flex flex-col gap-4">
					<p className="text-center text-appText-100">
						© 2024. Todos os direitos reservados. IPA TECNOLOGIA LTDA CNPJ:
						51.222.810/0001-23
					</p>
					<p className="text-center text-appText-100">
						Todos os sorteios do Sorteio Arretado são regulamentados e fiscalizados pela
						LOTEP - sob o número de autorização LTP-PRC-2024/00121
					</p>

					<Link
						href="/"
						title="Termos de uso / Política de privacidade"
						className="text-center text-appText-disabled"
					>
						Termos de uso / Política de privacidade
					</Link>
				</div>
			</Container>
		</footer>
	)
}
