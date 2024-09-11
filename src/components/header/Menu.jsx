import React from 'react'

export default function Menu({menus}) {
  return (
    <ul className='nav-ul'>
      {menus.map(({id, href, name}) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>{name}</a>
        </li>
      ))}
    </ul>
  )
}
