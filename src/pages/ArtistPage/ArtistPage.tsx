import React, { useEffect, useState } from 'react'
import "./ArtistPage.sass"
import IGroup from '../../interfaces/IGroup'
import { MembersList } from '../../components/MembersList/MembersList'
import { useParams } from 'react-router-dom'


export const ArtistPage: React.FC = () => {
  const [group, setGroup] = useState<IGroup>();
  const {id} = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/groups/${id}`)
    .then((responce) => {
      if (responce.ok) {
        return responce.json()
      }
    })
    .then((json) => {
      setGroup(json as IGroup)
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (!isLoading && !group) {
    return (<div className='d-flex justify-content-center mt-4'>Group info in empty</div>)
  }

  return (
    <div className='artist mt-3'>
      <h2>{group?.name}</h2>
      <div className='d-flex flex-column flex-lg-row justify-content-center artist__info gap-2'>
        <div className='artist__img'>
          <img src={group?.image_url} alt="" />
        </div>
        <div className='artist__info-text'>
          {!!group?.hangul_name && <p><span className='text-highlight'>Hangul name: </span>{group?.hangul_name}</p>}
          {!!group?.debut_date && <p><span className='text-highlight'>Debut date: </span>{group?.debut_date.toString()}</p>}
          <p><span className='text-highlight'>Agency: </span>{group?.agency}</p>
          <p><span className='text-highlight'>Fandom name: </span>{group?.fandom_name}</p>
          {!!group?.additional_info && <p><span className='text-highlight'>Debut date: </span>{group?.additional_info}</p>}
        </div>
      </div>
      <div className='mt-5'>
        <h2>Members</h2>
        {!!group?.id && <MembersList id={group.id}/>}
      </div>
    </div>
  )
}