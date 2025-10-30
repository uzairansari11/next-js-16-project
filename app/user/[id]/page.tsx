import React from 'react'

const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  return <div>hey this is userID {id}</div>
}

export default UserDetailPage
