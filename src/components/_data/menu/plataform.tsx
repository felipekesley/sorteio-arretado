import { menu } from '@/seed'
import Link from 'next/link'

export const PlataformMenu = () => {
	return (
		<ul className="flex flex-col gap-3">
			{menu.platform.map((item) => (
				<li key={crypto.randomUUID()}>
					<Link href={item.slug} title={item.title} className="text-appText-disabled">
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	)
}
