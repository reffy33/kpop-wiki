import { ArtistCard } from "../../components/ArtistCard/ArtistCard"
import { useEffect, useState } from "react"
import IGroup from "../../interfaces/IGroup";
import './ArtitstsList.sass'

export enum ArtistType {
  male = "male",
  female = "female",
  co_ed = "co-ed"
}

export const ArtistsList: React.FC<{artistType?: ArtistType}> = (props) => {
  const [groups, setGroups] = useState<IGroup[]>();
  const [isLoading, setLoading] = useState(false);

  var url = 'http://localhost:8000/groups/?limit=30'
  if (props.artistType) {
    url = url + '&type=' + props.artistType
  }

  useEffect( () => {
    setLoading(true)
    fetch(url)
    .then((responce) => {
      if (responce.ok) {
        return responce.json()
      }
    })
    .then((json) => {
      setGroups(json as IGroup[])
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  console.log(groups);

  if ((!groups || !groups.length) && !isLoading) {
    return (<div className="d-flex mt-4 justify-content-center">Groups not found!</div>)
  }

  return (
    <>
    <div className="d-flex flex-column justify-content-center mt-4">
      <div className="row justify-content-center">
          {groups?.map((group) => {
            return <ArtistCard key={group.id} {...group} />
          })}
      </div>
      <div className="d-flex justify-content-center mt-5"> 
        <a href="/create" className="add-group-link">Add group</a>
      </div>
    </div>
    </>
  )
}