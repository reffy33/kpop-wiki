import React from 'react'
import "./MemberCard.sass"
import { Card } from 'react-bootstrap'
import IMember from '../../interfaces/IMember'

export const MemberCard: React.FC<IMember> = (member) => {
  return (
      <Card className='members__card'>
        <Card.Img variant="top" src={member.image_url} className='members__photo' />
        <Card.Body>
          {member.ex_member && <Card.Title style={{color: "red"}}>EX MEMBER</Card.Title>}
          <Card.Title>{member.stage_name}</Card.Title>
          <Card.Text>Stage name: {member.stage_name}</Card.Text>
          <Card.Text>Real name: {!!member.real_name ? member.real_name : "—"}</Card.Text>
          <Card.Text>Birthday: {!!member.birthday ? member.birthday.toString() : "—"}</Card.Text>
          <Card.Text>Position: {!!member.position ? member.position : "—"}</Card.Text>
          {member.solo_debut && <Card.Text>Solo debuted at: {member.solo_debut.toString()}</Card.Text>}
        </Card.Body>
      </Card>
  )
}