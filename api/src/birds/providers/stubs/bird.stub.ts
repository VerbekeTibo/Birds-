
import { Bird } from "../../entities/bird.entity"
import { CreateBirdInput } from "../../../birds/dto/create-bird.input"
import { birdProviders } from "../bird.provider"


export const createBirdInputStub = (): CreateBirdInput => {
    const b = new CreateBirdInput()
    b.name = 'name'
    b.fullname = 'fullname'
    b.category = 'category'
    b.url = 'url'
    b.observations = 2
    b.description = 'description'
    return b
}

export const createBird = () : Bird =>{
    const bird = new Bird()
    bird.id ='abc123'
    bird.name = 'bird'
    bird.fullname = 'bird full'
    bird.category = 'cat 1'
    bird.url = 'http://bird.com'
    bird.observations = 2
    bird.description = 'a bird description'
    return bird
    
}