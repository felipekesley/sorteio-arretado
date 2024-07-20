import { ListActive } from '@/components/_data/awards'
import { ListDone } from '@/components/_data/awards/listDone'
import { Container } from '@/components/_shared/container'
import { Section } from '@/components/_shared/section'
import { Title } from '@/components/_shared/title'
import { List } from '@/components/cardInfos'
import { DefaultCarousel } from '@/components/carousel'
import { Button } from '@/components/ui/button'
import { Newspaper, Pin, Ticket, Trophy } from 'lucide-react'
import Link from 'next/link'

export const HomeScreen = () => {
	return (
		<Container className="">
			<p className="uppercase text-appPrimary block text-center">
				OPORTUNIDADES QUE MUDARÃO SUA VIDA
			</p>

			<Title tag="h2" fontWeight="bold" className="text-white text-center mt-4">
				CONCORRA A PRÊMIOS INCRÍVEIS PARTICIPANDO DE NOSSOS SORTEIOS
			</Title>

			<Section>
				<DefaultCarousel />
			</Section>

			<Section>
				<div className="text-appPrimary flex justify-center gap-4 uppercase">
					<Ticket strokeWidth={1.25} />
					<p>Participe</p>
					<Ticket strokeWidth={1.25} />
				</div>
				<Title tag="h2" fontWeight="bold" className="text-white text-center my-4">
					Sorteios ativos
				</Title>
				<p className="text-appText-500 text-center block">
					Confira os sorteios em andamento e <br /> participe agora mesmo.
				</p>

				<ListActive />
			</Section>

			<Section>
				<div className="text-appPrimary flex justify-center gap-4 uppercase">
					<Pin strokeWidth={1.25} />
					<p>Passo a passo</p>
					<Pin strokeWidth={1.25} />
				</div>
				<Title tag="h2" fontWeight="bold" className="text-white text-center my-4">
					Como participar
				</Title>
				<p className="text-appText-500 text-center block mb-6">
					É muito simples! Preparamos um passo a <br /> passo para facilitar sua
					participação
				</p>

				<List />

				<Button className="block w-full mt-10">Quero participar!</Button>
			</Section>

			<Section>
				<div className="text-appPrimary flex justify-center gap-4 uppercase">
					<Trophy strokeWidth={1.25} />
					<p>Ganhadores</p>
					<Trophy strokeWidth={1.25} />
				</div>
				<Title tag="h2" fontWeight="bold" className="text-white text-center my-4">
					Sorteios finalizados
				</Title>
				<p className="text-appText-500 text-center block">
					Confira os sorteios finalizados e os <br /> participantes contemplados.
				</p>

				<ListDone />
			</Section>

			<Section>
				<div className="text-appPrimary flex justify-center gap-4 uppercase">
					<Newspaper strokeWidth={1.25} />
					<p>regulamento</p>
					<Newspaper strokeWidth={1.25} />
				</div>
				<Title tag="h2" fontWeight="bold" className="text-white text-center my-4">
					Ficou com dúvida?
				</Title>
				<p className="text-appText-500 text-center block">
					Confira nosso regulamento e fique por <br /> dentro dos sorteios e premiações.
				</p>

				<Button
					asChild
					className="flex items-center justify-center w-full mt-10 text-center"
				>
					<Link href="/" title="Nosso regulamento">
						Nosso regulamento
					</Link>
				</Button>

				<hr className="mt-12 border-b-2" />
			</Section>
		</Container>
	)
}
