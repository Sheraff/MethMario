import Spritesheet from '/js/Spritesheet.js'
import {loadImage} from '/js/loaders.js'

export function loadMotionSprite() {
	return loadImage('/img/characters.gif')
		.then(img => {
			const sprite = new Spritesheet(img, 16, 16)
			sprite.preciseDefine('idle', 276, 44, 16, 16)
			return sprite
		})
}
