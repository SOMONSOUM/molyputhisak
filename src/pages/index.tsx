import { Inter } from 'next/font/google'
import React from 'react'
import TitleWithButtons from '@/components/TitleWithButtons/TitleWithButtons'

export default function Home() {
  return (
    <React.Fragment>
      <TitleWithButtons
        title="Will you be my girlfriend?"
        button1Label="No"
        button2Label="Yes"
        onClickButton1={() => { }}
        onClickButton2={() => { }}
      />
    </React.Fragment>
  )
}
