'use client'

import { useEffect } from 'react'

export const useClearFormToken = () => {
  useEffect(() => {
    const deleteToken = () => {
      document.cookie =
        'form_access_token=; Path=/; Max-Age=0; Secure; SameSite=Strict'
    }

    deleteToken()

    const handleBeforeUnload = () => deleteToken()
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
}
