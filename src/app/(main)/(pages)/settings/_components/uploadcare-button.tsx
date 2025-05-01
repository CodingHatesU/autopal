'use client'
import React, { useEffect } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()

  const handleUpload = async (info: any) => {
    // The new library provides file info differently
    // The CDN URL is available in the fileInfo.cdnUrl property
    if (info?.fileInfo?.cdnUrl) {
      const file = await onUpload(info.fileInfo.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
  }

  return (
    <div>
      <FileUploaderRegular
        pubkey="a9428ff5ff90ae7a64eb" // Keep your original pubkey
        sourceList="local, camera, facebook, gdrive"
        classNameUploader="uc-light"
        onUploaded={handleUpload}
      />
    </div>
  )
}

export default UploadCareButton