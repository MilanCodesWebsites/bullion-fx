const progressBar = document.getElementById('progress-bar')
const appContainer = document.getElementById('main-app-container')
const loadingScreen = document.querySelector('.loading-screen')

let duration = 9000
let interval = 100
let progress = 0
let step = (interval / duration) * 100

let progressInterval = setInterval(() => {
  progress += step
  progressBar.style.width = `${progress}%`
  if (progress >= 100) {
    clearInterval(progressInterval)
    loadingScreen.style.display = 'none'
    appContainer.style.display = 'block'
  }
}, interval)