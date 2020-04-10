import React from 'react'
import dayjs from 'dayjs'
import readingTime from 'reading-time'

import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/pt-br' // import locale
dayjs.extend(isLeapYear) // use plugin
dayjs.locale('pt-br') // use locale

const Content = ({ body, title, date }) => (
  <div className="">
    <h1 className="text-5xl mt-3 mb-0">{title}</h1>
    <p className="text-gray-500">
      Postado em{' '}
      <time dateTime={dayjs(date).format('DD MMMM YYYY')}>
        {dayjs(date).format('DD MMMM, YYYY')}
      </time>{' '}
      <br />
      {readingTime(body).text}
    </p>
    <div className="" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default Content
