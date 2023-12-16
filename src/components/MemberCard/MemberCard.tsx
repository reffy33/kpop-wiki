import React from 'react'
import "./MemberCard.sass"
import { Card } from 'react-bootstrap'

export interface MemberCardProps {
  image_url: string,
  stage_name: string,
  real_name: string,
  birthday: string,
  position: string
}

const MemberCard: React.FC<MemberCardProps> = (props) => {
  return (
      <Card className='members__card'>
        <Card.Img variant="top" src={props.image_url} className='members__photo' />
        <Card.Body>
          <Card.Title>{props.stage_name}</Card.Title>
          <Card.Text>Stage name: {props.stage_name}</Card.Text>
          <Card.Text>Real name: {props.real_name}</Card.Text>
          <Card.Text>Birthday: {props.birthday}</Card.Text>
          <Card.Text>Position: {props.position}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default MemberCard