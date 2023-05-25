
export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // this.coverImage = data.coverImage
    // this.createdAt = data.createdAt || new Date().toLocaleTimeString('en-US')
  }
}
