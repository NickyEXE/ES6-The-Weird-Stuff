class Villain {

  murder = (victim) => {
    return `${this.name} has murdered ${victim}.`
  }
}




class Creature extends Villain {
  constructor({ id, name, bodyCount, image_url: imageUrl }) {
    super()
    this.id = id
    this.name = name
    this.bodyCount = bodyCount
    this.imageUrl = imageUrl
  }

}

claudeRains = new Creature({ id: 1, name: "Invisible Man", bodyCount: 1000, image_url: "some image"})
