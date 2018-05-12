import Entity from './Entity.js'
import * as Traits from './traits.js'
import {loadCharacter} from './loaders.js'


export function createMario (){
	return loadCharacter('mario')
	.then(sprite => {

		const mario = new Entity()
		mario.size.set(14, 16)

		mario.addTrait(new Traits.Go())
		mario.addTrait(new Traits.Jump())
		// mario.addTrait(new Traits.Velocity())

		mario.state = 'idle'
		mario.frameCount = 0

		mario.draw = function drawMario(context){

			let newState
			if (mario.jump.on)
				newState = 'jump'
			else if (mario.go.on)
				newState = 'run'
			else
				newState = 'idle'
			if(newState!==mario.state){
				mario.state = newState
				mario.frameCount = 0
			}

			let tile
			const animation = sprite.animations.get(mario.state)
			if(animation){
				tile = animation.frames[Math.floor(mario.frameCount/animation.frameLength) % animation.frames.length]
			} else {
				tile = mario.state
			}

			sprite.preciseDrawTile(tile, context, 0, 0)
			mario.frameCount++
		}

		return mario
	})
}
