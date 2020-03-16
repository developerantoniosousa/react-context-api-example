import React from 'react'
import Context from './Context'
import Button from './Button'

export default function App() {
  const [age, setAge] = React.useState(21)

  return (
    <Context.Provider value={{
      name: 'Antonio',
      age,
      udpateAge: () => setAge(age + 1)
    }}>
      <Button />
      <Button />
    </Context.Provider>
  )
}

