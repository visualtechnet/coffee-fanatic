import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = (props) => {
  return (
    <Link href={props.href}>
      <>
      <h2>{props.name}</h2>
      <Image src={props.imgUrl} width={260} height={260} />
      </>
    </Link>
  )
}

export default Card