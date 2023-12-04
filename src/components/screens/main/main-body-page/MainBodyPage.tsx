import { FC } from 'react'
import { slides } from '@screens/main/main-body-page/slides.data'
import GaleryCarusel from '@screens/carusel/galery-carusel/GaleryCarusel'
import Arrow from 'components/ui/Arrow'

const MainBodyPage: FC = () => {
	return (
		<div className='flex flex-col mt-[3rem]'>
			<span className='text-4xl max-w-[80%] font-bold'>
				Велична краса і дивовижість неповторного сотуару з лабрадором кольору
				оливи
			</span>
			<div className='mt-[5rem] flex'>
				<div className='max-w-[500px] flex flex-col '>
					<span className='text-2xl'>Сотуар з лабрадором кольору оливи</span>
					<span className='text-sm mt-5 flex flex-col gap-3'>
						<div className='inline-block'>
							У самому центрі міста, на вулиці, де виткані історія та
							архітектура, розташувалася невеличка ювелірна майстерня під назвою
							"Арома Каменів". Вітрина цього магазину вражала розкішшю та красою
							прикрас, кожна з яких розповідала власну неповторну історію.
						</div>
						<div className='inline-block'>
							Таємничий клієнт вирішив замовити в цій майстерні справжнє чудо -
							сотуар із лабрадором кольору оливи, надзвичайно рідкісним та
							цінним каменем. Замовлення викликало захоплення та викликало
							нестриману творчість ювелірів, які працювали день і ніч, вкладаючи
							в кожен елемент свою майстерність і почуття.
						</div>
						<div className='inline-block'>
							Коли сотуар був готовий, його блиск і тепло каменів оливкового
							лабрадору вразили не лише замовника, але й усе місто. Цей шедевр
							від "Арома Каменів" став не просто коштовністю, але й справжнім
							символом унікальної краси та витонченості, що розкриває в собі
							таємниці природи та витонченого мистецтва.
						</div>
					</span>
					<Arrow label='Детальніше' className='max-w-[350px]' />
				</div>
				<GaleryCarusel className='ml-[4rem]'>
					{slides.map(slide => (
						<img
							className='rounded-[2.8rem] object-fill max-h-[674px]'
							width={450}
							height={600}
							src={slide.url}
							alt='minaev'
						/>
					))}
				</GaleryCarusel>
			</div>
		</div>
	)
}

export default MainBodyPage
