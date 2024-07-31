import { Editor } from '@/components/editor/Editor'
import { Header } from '@/components/Header'
import React from 'react'

const Document = () => {
  return (
    <div className='flex flex-col'>
      <Header className='flex w-fit items-center justify-center gap-2'>
        <p className='document-title'>Fake Title</p>
      </Header>
      <Editor />
    </div>
  )
}

export default Document