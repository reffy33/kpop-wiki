import IGroup from '../../interfaces/IGroup'
import './ArtistCard.sass'

export const ArtistCard: React.FC<IGroup> = (artist) => {
  return(
    <div className='artist-card d-flex justify-content-center'>
      <a href={`/groups/${artist.id}`} className='artist-card__link'>
        <div className='artist-card__content'>
          <img src={artist.image_url} />
          <span className="artist-card__text">{artist.name}</span>
        </div>
      </a>
    </div>
  )
}
