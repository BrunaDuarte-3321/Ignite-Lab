import {CheckCircle, Lock} from 'phosphor-react';
import {Link, useParams} from 'react-router-dom'
import {isPast, format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames';


interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
export const Lesson = (props:LessonProps) => {

 const {slug} = useParams<{slug: string}>()


  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  const isActiviLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`}  className='group'>
      <span className="text-gray-300">
       {availableDateFormatted}
      </span>
      <div className={classNames('rounded border border-gray-500 p-4 mt-4 group-hover:border-green-500  transition-colors',{
      'bg-green-500': isActiviLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames("text-sm text-blue-500 font-medium flex items-center gap-2", {
              'text-white': isActiviLesson,
              'text-blue-500': !isActiviLesson
            })}>
            <CheckCircle size={20}/>
            Conteúdo liberado
          </span>
          ): (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em breve
            </span>
          ) }
          <span className={classNames("text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold ", {
            "border-white": isActiviLesson,
            "border-green-300": !isActiviLesson
          })}>
           {props.type === 'live'? 'AO VIVO': 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames(" mt-5 block", {
          'text-white': isActiviLesson,
          'text-gray-200': !isActiviLesson,
        })}>{props.title}</strong>
      </div>
    </Link>
  )
}