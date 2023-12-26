interface IMember {
  id: number
  stage_name: string
  image_url?: string
  real_name?: string
  birthday?: Date
  position?: string
  ex_member: boolean
  solo: boolean
  solo_debut?: Date
  group_id: number
}

export default IMember