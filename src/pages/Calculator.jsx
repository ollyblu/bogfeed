import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import FeedCalculator from '../components/FeedCalculator'

export default function Kontak() {
  useScrollReveal()
  return (
    <div style={{marginTop:'100px'}}>
        <FeedCalculator/>
    </div>
  )
}