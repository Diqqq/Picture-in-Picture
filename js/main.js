const videoElement = document.querySelector('#video')
const button = document.querySelector('.button')
const selectButton = document.querySelector('.select')

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia()
		videoElement.srcObject = mediaStream
		videoElement.onloadedmetadata = () => {
			videoElement.play()
		}
	} catch (error) {
		// Catch Error Here
		console.log(`Error: ${error} has been received.`)
	}
}

button.addEventListener('click', async () => {
	// Disable Button
	button.disabled = true
	// Start Picture in Picture
	await videoElement.requestPictureInPicture()
	// Reset Button
	button.disabled = false
})

// selectButton.addEventListener('click', () => {
// 	if (document.pictureInPictureEnabled) {
// 		document.exitPictureInPicture()
//         selectMediaStream()
// 	} else selectMediaStream()
// })

selectButton.addEventListener('click', selectMediaStream)