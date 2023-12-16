import React from 'react'
import "./ArtistPage.sass"
import MemberCard, { MemberCardProps } from '../../components/MemberCard/MemberCard'

const MemberInfo = {
  image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fkpop%2Fimages%2F3%2F3e%2FStray_Kids_Bang_Chan_TOP_concept_photo.png%2Frevision%2Flatest%3Fcb%3D20200502042553&f=1&nofb=1&ipt=9d10885e0872386ce5c1db33a1b847b14490bb33d1fb9d94a02343ebef74f9b2&ipo=images',
  stage_name: "Bang Chan",
  real_name: "Bang Christopher Chan",
  birthday: "October 7th, 1997",
  position: "Leader, vocalist, rapper, dancer, producer"
} as MemberCardProps

export interface ArtistProps {
  name: string,
  hangulName?: string,
  debutDate: string,
  agency?: string,
  fandomName?: string,
  additionalInfo?: string
}

const ArtistPage: React.FC<ArtistProps> = (props) => {
  return (
    <div className='artist mt-3'>
      <h2>{props.name}</h2>
      <div className='d-flex flex-column flex-lg-row justify-content-center artist__info gap-2'>
        <div className='artist__img'>
          <img src="https://1409791524.rsc.cdn77.org/data/images/full/586214/stray-kids.jpg" alt="" />
        </div>
        <div className='artist__info-text'>
          <p><span className='text-highlight'>Hangul name:</span>{props.hangulName}</p>
          <p><span className='text-highlight'>Debut date:</span>{props.debutDate}</p>
          <p><span className='text-highlight'>Agency:</span>{props.agency}</p>
          <p><span className='text-highlight'>Fandom name:</span>{props.fandomName}</p>
          <p><span className='text-highlight'>Additional info:</span>{props.additionalInfo}</p>
        </div>
      </div>
      <div className='mt-5 members'>
        <h2>Members</h2>
        <div className='row text-center'>
          {[...Array(8)].map(() =>
            <div className='col-lg-4 col-md-6 mt-4 members__column'>
              <MemberCard {...MemberInfo}/>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ArtistPage