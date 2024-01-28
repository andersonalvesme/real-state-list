'use client'

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter()

  const handleReturn = () => {
    router.back()
  }

  return (
    <div className="m-4">
      <p className="text-xs text-gray-400 hover:cursor-pointer hover:text-gray-500" onClick={handleReturn}>Return to list</p>
    </div>

  )
}
