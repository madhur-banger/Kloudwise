import React from 'react'


export default function BlogName({ params } ) {
  // Write code to fetch the params.id from Notion database
  // if 200 => return the page or else show 404 error
  return (
    <h5>{params.blogName}</h5>
  )
}
