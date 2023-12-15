import './ArtistCard.sass'

interface ArtistCardProps {
  name: string,
  link: string,
  image: string
}

export const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  return(
    <div className='artist-card'>
      <a href={props.link} className='artist-card__link'>
        <div className='artist-card__content'>
          <img src={props.image} />
          <span className="artist-card__text">{props.name}</span>
        </div>
      </a>
    </div>
  )
}
