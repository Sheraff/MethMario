import KeyMapping from './KeyMapping.js'

export function setupKeyboard(entity) {

	const keys = new KeyMapping(window)

	// UP & DOWN
	keys.add('z', console.log)
	keys.add('s', console.log)

	// LEFT & RIGHT
	keys.add('q', (press) => {
		if (press)
			entity.go.left()
		else
			entity.go.stop()
	})
	keys.add('d', (press) => {
		if (press)
			entity.go.right()
		else
			entity.go.stop()
	})

	// SPACE
	keys.add(' ', (press) => {
		if (press)
			entity.jump.start()
		else
			entity.jump.cancel()
	})

	return keys
}
