import React from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
  </div>
)

export { Directory }
