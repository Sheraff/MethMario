import {Trait} from './Entity.js'

// export class Velocity extends Trait{
// 	constructor() {
// 		super('velocity')
// 	}
//
// 	update (entity, 𝛥t){
// 		entity.pos.x += entity.vel.x * 𝛥t / 1000
// 		entity.pos.y += entity.vel.y * 𝛥t / 1000
// 	}
// }

export class Jump extends Trait{
	constructor(){
		super('jump')
		this.duration = 150
		this.velocity = -300
		this.engagedTime = this.duration
		this.on = false
	}

	start() {
		this.engagedTime = 0
		this.on = true
	}

	cancel() {
		this.engagedTime = this.duration
		this.on = false
	}

	update(entity, 𝛥t) {
		if(this.engagedTime < this.duration){
			entity.vel.y = this.velocity
			this.engagedTime += 𝛥t
		}
	}
}

export class Go extends Trait{
	constructor(){
		super('go')
		this.dir = 0
		this.speed = 15
	}
	left(){
		this.dir = -1
		this.on = true
	}
	right(){
		this.dir = 1
		this.on = true
	}
	stop(){
		this.dir = 0
		this.on = false
	}
	update(entity, 𝛥t) {
		entity.vel.x = this.speed * this.dir * 𝛥t
	}
}
