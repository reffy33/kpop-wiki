import React, { useEffect, useState } from 'react'
import { MemberCard } from '../MemberCard/MemberCard';
import IMember from '../../interfaces/IMember'
import { Card } from 'react-bootstrap';
import "./MembersList.sass"
import { NewMemberCard } from '../NewMemberCard/NewMemberCard';


export const MembersList: React.FC<{id: number}> = (props) => {
  const [members, setMembers] = useState<IMember[]>();
  const [isAdding, setIsAdding] = useState(false);
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

  const AddCard: React.FC = () => {
    return (
      <>
        {isAdding && 
          <div className='col-lg-4 col-md-6 mt-4 d-flex justify-content-start'>
            <Card style={{ width: '400px'}}>
              <Card.Body>
                <NewMemberCard group_id={props.id} close={() => setIsAdding(false)}/>
              </Card.Body>
            </Card>
          </div>
        }
        {!isAdding && 
          <div className='col-lg-4 col-md-6 mt-4 d-flex justify-content-center'>
            <Card className="addmember-card" onClick={ () => {setIsAdding(true)}}>
              <Card.Body className="addmember-card__body">
                <div className="addmember-card__icon">
                  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd" >
                    <g id="Icon-Set-Filled"  transform="translate(-466.000000, -1089.000000)">
                    <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle">
                    </path>
                    </g>
                    </g>
                  </svg>
                </div>
                <span className="addmember-card__text">Add Member</span>
              </Card.Body>
            </Card>
          </div>
        }
      </>
    );
  }


  if (!isLoading && !members?.length) {
    return (
      <>
        <div className='d-flex flex-column align-items-center'>
          <div>
            Members list is empty
          </div>
            <AddCard />
        </div>
      </>
    )
  }

  return (
    <div className='row pb-3'>
        {members?.map((member) =>
        <div className='col-lg-4 col-md-6 mt-4 d-flex justify-content-center text-center'>
          <MemberCard {...member}/>
        </div>
        )}
      <AddCard />
    </div>
  )
}