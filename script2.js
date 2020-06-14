const timerValue = document.querySelector('.timer-value')

const clicksValue = document.querySelector('.clicks-value')

const button = document.querySelector('.click-area')

const achievement = document.querySelector('.achievement')

const nicknameValue = document.querySelector('.nickname-value')

const leaderboard = document.querySelector('.left-container')

const clickAchievement = 13

let nickname = localStorage.getItem('nicknameValue')

let bestResultNickname = localStorage.getItem('bestResultNickname')s

let bestResultValue = localStorage.getItem('bestResultValue')

leaderboard.innerHTML = bestResultNickname + ' | ' + bestResultValue + ' ' + 'cps'

let clicks = 0

let timer = 1000

let active = false

let fps = 10

nicknameValue.value = nickname

nicknameValue.addEventListener('input', (e) => {

  nickname = e.target.value

  localStorage.setItem('nicknameValue', e.target.value)
})


button.addEventListener('click', (event) => {
  if(!active) {
    clicks = 0
    timer = 1000
    clicksValue.innerHTML = clicks

    setTimeout(() => {
      active = false
      button.disabled = true

      if(clicks > bestResultValue) {
        bestResultValue = clicks

        bestResultNickname = nickname

        leaderboard.innerHTML = bestResultNickname + ' | ' + bestResultValue + ' ' + 'cps'


        localStorage.setItem('bestResultValue', clicks)

        localStorage.setItem('bestResultNickname', nickname)
      }

      setTimeout(()=>{
        button.disabled = false
      }, 1000)
    }, timer)


    for (let q = 0; q < fps; q++){
      setTimeout(()=>{
        timer = timer - (1000 / fps)
        timerValue.innerHTML = timer / 1000
      }, (1000 / fps) * q)
    }
  }
  if(clicks !== clickAchievement) {
    achievement.innerHTML = ''
  }

  active = true

  if(active) {
    clicks++
    clicksValue.innerHTML = clicks
  }

  if(clicks === clickAchievement) {
    achievement.innerHTML = 'вы хорошо кликаете'
  }



})