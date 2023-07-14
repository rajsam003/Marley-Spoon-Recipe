export type Recipe = {
  title: string
  photo: {
    fields: {
      file: {
        url: string
      }
    }
  }
  calories: number
  description: string
  chef: {
    fields: {
      name: string
    }
  }
  tags: Array<{
    fields: {
      name: string
    }
  }>
}
