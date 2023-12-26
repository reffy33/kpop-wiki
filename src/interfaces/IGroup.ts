interface IGroup {
  id: number
  name: string
  fandom_name: string
  agency: string
  type: string
  image_url?: string
  hangul_name?: string 
  debut_date?: Date
  additional_info?: string
}

export default IGroup