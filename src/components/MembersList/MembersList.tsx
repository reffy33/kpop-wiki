import React, { useEffect, useState } from 'react'
import { MemberCard } from '../MemberCard/MemberCard';
import IMember from '../../interfaces/IMember'


export const MembersList: React.FC<{id: number}> = (props) => {
  const [members, setMembers] = useState<IMember[]>();
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/members/group_members/${props.id}`)
    .then((responce) => {
      if (responce.ok) {
        return responce.json()
      }
    })
    .then((json) => {
      setMembers(json as IMember[])
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (!isLoading && !members?.length) {
    return (<div className='d-flex justify-content-center'>Members list is empty</div>)
  }

  return (
    <div className='row text-center'>
      {members?.map((member) =>
      <div className='col-lg-4 col-md-6 mt-4 d-flex justify-content-center'>
        <MemberCard {...member}/>
      </div>
      )}
    </div>
  )
}