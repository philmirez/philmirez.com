import { useState, useEffect } from 'react'

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState)
  const [updates, setUpdates] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      callback()
    }
  }, [isSubmitting])

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
    setUpdates(updates => ({
      ...updates,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    updates,
    isSubmitting,
    setIsSubmitting
  }
}

export default useForm
