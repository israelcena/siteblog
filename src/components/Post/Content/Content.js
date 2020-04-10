import React from 'react'
import dayjs from 'dayjs'
import readingTime from 'reading-time'

const Content = ({ body, title, date }) => (
  <div className="">
    <h1 className="text-5xl mt-3 mb-0">{title}</h1>
    <p className="text-gray-500">
      Postado em{' '}
      <time dateTime={dayjs(date).format('DD MM, YYYY')}>
        {dayjs(date).format('DD MM, YYYY')}
      </time>{' '}
      <br />
      {readingTime(body).text}
    </p>
    <div className="" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default Content
