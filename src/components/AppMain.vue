<template>
  <div class="wrapper">
    <div class="container">
      <div class="container__row-one">
        <div class="container__item">
          <div class="container__text-wrapper">
            <p class="container__text">Перед рассветом</p>
            <h2 class="container__title">Утренний бухгалтер</h2>
            <p class="container__text">Самые важные новости и события за день.</p>
            <P class="container__text">Кратко, по делу, структурировано.</P>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Новости для бухгалтеров, ИП и директора</p>
            </div>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Подборка статей за день</p>
            </div>

            <div class="toggle-wrapper">
              <ToggleBig
                id="toggle-notifications"
                label="Подписка на рассылки"
                :value="toggleNotifications"
                @update:value="toggleNotifications = $event"
                class="toggle-wrapper__button"
              />
              <span class="toggle-wrapper__text">Уже получает 59 342 человек</span>
            </div>
          </div>

          <div class="container__img">
            <img src="@/assets/img/12.png" width="80px" height="80px" />
          </div>
        </div>
        <div class="container__item">
          <div class="container__text-wrapper">
            <p class="container__text">После заката</p>
            <h2 class="container__title">Ночной бухгалтер</h2>
            <p class="container__text">Самая краткая газета о налогах и бухучете в</p>
            <P class="container__text">мире — современная рассылка для чтения.</P>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Анализ, оценка и только самое главное</p>
            </div>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Лучшие комменты юзеров в обзоре</p>
            </div>

            <div class="toggle-wrapper">
              <ToggleBig
                id="toggle-notifications"
                label="Подписка на рассылки"
                :value="toggleNotifications"
                @update:value="toggleNotifications = $event"
                class="toggle-wrapper__button"
              />
              <span class="toggle-wrapper__text">Уже получает 37 480 человек</span>
            </div>
          </div>

          <div class="container__img">
            <img src="@/assets/img/night.png" width="80px" height="80px" />
          </div>
        </div>
      </div>
      <div class="container__row-two">
        <div class="container__item">
          <div class="container__text-wrapper">
            <p class="container__text">Раз в две недели</p>
            <h2 class="container__title">Ножницы скидок</h2>
            <p class="container__text">Подборка самых выгодных и полезных</p>
            <P class="container__text">спецпредложений от надежных компаний.</P>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Акции и скидки от лидеров рынка</p>
            </div>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Те, кто подписался – экономят много денег</p>
            </div>

            <div class="toggle-wrapper">
              <ToggleBig
                id="toggle-notifications"
                label="Подписка на рассылки"
                :value="toggleNotifications"
                @update:value="toggleNotifications = $event"
                class="toggle-wrapper__button"
              />
              <span class="toggle-wrapper__text">Уже получает 92 118 человек</span>
            </div>
          </div>

          <div class="container__img">
            <img src="@/assets/img/cat.jpg" width="80px" height="80px" />
          </div>
        </div>
        <div class="container__item">
          <div class="container__text-wrapper">
            <p class="container__text">По мере появления анонсов</p>
            <h2 class="container__title">Чемодан вебинаров</h2>
            <p class="container__text">Подборка с анонсами бесплатных вебинаров</p>
            <P class="container__text"> на самые топовые темы при участии экспертов.</P>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Никогда не пришлем платные вебинары</p>
            </div>

            <div class="container__text-img">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.08471 11.6237L1.93292 8.47186C1.57839 8.11733 1.00389 8.11631 0.648103 8.46959C0.290537 8.82464 0.289516 9.40265 0.645826 9.75896L5.08471 14.1978L15.3586 3.92397C15.7128 3.56972 15.7128 2.99537 15.3586 2.64112C15.0044 2.28699 14.4303 2.28686 14.076 2.64082L5.08471 11.6237Z"
                  fill="#00CC33"
                />
              </svg>
              <p class="container__text-item">Подборка топовых тем для вебинаров</p>
            </div>

            <div class="toggle-wrapper">
              <ToggleBig
                id="toggle-notifications"
                label="Подписка на рассылки"
                :value="toggleNotifications"
                @update:value="toggleNotifications = $event"
                class="toggle-wrapper__button"
              />
              <span class="toggle-wrapper__text">Уже получает 92 082 человек</span>
            </div>
          </div>

          <div class="container__img">
            <img src="@/assets/img/forsh.jpg" width="80px" height="80px" />
          </div>
        </div>
      </div>
    </div>
    <svg class="end-logo" width="196" height="96" viewBox="0 0 196 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0993 55.7463H0.93335V52.4979H16.0993V55.7463Z" fill="black" />
      <path d="M19.8005 52.248H23.7726L37.4942 88.1628H33.5221L19.8005 52.248Z" fill="black" />
      <path d="M58.6182 88.7534H37.9455V85.3232H58.6182V88.7534Z" fill="black" />
      <path
        d="M61.71 71.8978C61.71 68.4752 62.1614 65.1888 63.0641 62.0388C63.9819 58.8888 65.3436 56.0265 67.149 53.452C68.9545 50.8774 70.8277 49.0601 72.7686 48L73.6262 50.7714C71.4295 52.4676 69.624 55.0573 68.2097 58.5405C66.8105 62.0237 66.0432 65.9233 65.9078 70.2395L65.8852 72.1704C65.8852 78.0161 66.9459 83.0894 69.0673 87.3904C70.3462 89.965 71.8658 91.9792 73.6262 93.433L72.7686 96C70.7675 94.8793 68.8567 93.0014 67.0362 90.3663C63.4854 85.2172 61.71 79.0611 61.71 71.8978Z"
        fill="black"
      />
      <path
        d="M95.5827 50.3376L92.0237 51.5472C93.1792 53.9664 95.8138 61.1776 96.5533 63.8294L100.158 62.5733C99.3727 59.968 96.5995 52.5707 95.5827 50.3376ZM116.104 53.3151L111.852 52.1055C110.928 59.084 108.108 66.5278 104.457 71.2266C99.7887 77.1816 92.9019 81.6479 86.2924 83.6019L89.4816 86.8585C95.9986 84.5323 102.839 79.7404 107.6 73.4132C111.39 68.3887 113.886 61.7359 115.272 55.967C115.457 55.2226 115.781 54.106 116.104 53.3151ZM82.6873 53.129L79.0359 54.4782C80.1452 56.4787 83.3344 64.3412 84.2125 67.2256L87.8639 65.8764C86.8009 62.8524 83.889 55.7343 82.6873 53.129Z"
        fill="black"
      />
      <path
        d="M133.523 72.1249C133.523 75.5021 133.079 78.743 132.191 81.8476C131.318 84.9371 129.972 87.7918 128.151 90.4117C126.346 93.0317 124.45 94.8945 122.464 96L121.584 93.433C123.901 91.646 125.759 88.8746 127.158 85.1188C128.573 81.3478 129.295 77.168 129.325 72.5793V71.8523C129.325 68.672 128.994 65.7189 128.332 62.9929C127.67 60.2518 126.745 57.7984 125.556 55.6327C124.382 53.4671 123.058 51.7785 121.584 50.567L122.464 48C124.45 49.1055 126.338 50.9531 128.129 53.5428C129.934 56.1325 131.281 58.9872 132.169 62.107C133.071 65.2267 133.523 68.566 133.523 72.1249Z"
        fill="black"
      />
      <path d="M157.558 88.7534H136.885V85.3232H157.558V88.7534Z" fill="black" />
      <path d="M161.643 88.1628H158.055L171.776 52.248H175.342L161.643 88.1628Z" fill="black" />
      <path d="M195.067 55.7463H179.901V52.4979H195.067V55.7463Z" fill="black" />
    </svg>
  </div>
</template>

<script>
import ToggleBig from './ToggleBig.vue'
export default {
  name: 'AppMain',
  components: {
    ToggleBig
  },
  data () {
    return {
      toggleValue: false, // Подписка на рассылки
      toggleNotifications: false // Уведомления
    }
  },
  methods: {
  
  }
}
</script>

<style scoped lang="sass">
.wrapper
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  width-max: 1024px

.container
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  width: 1024px
  background-color: rgba(245, 245, 248, 1)
  border-radius: 0px 0px 16px 16px

  &__row-one
    width: 1024px
    height: 300px
    padding: 24px 24px 0px 24px
    gap: 24px
    display: flex
    align-items: center
    justify-content: space-between

  &__row-two
    width: 1024px
    height: 300px
    padding: 0px 24px 48px 24px
    gap: 24px
    display: flex
    align-items: center
    justify-content: space-between

  &__item
    width: 476px
    radius: 16px
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08)

    background-color: rgba(255, 255, 255, 1)
    border-radius: 16px
    display: flex
    justify-content: space-between

  &__text-wrapper
    text-align: left
    margin: 24px 24px 24px 24px

  &__img
    display: flex
    margin-top: 24px
    margin-right: 24px

  &__text
    font-family: 'Roboto'
    font-style: normal
    font-weight: 400
    font-size: 13px
    line-height: 13px
    color: rgba(153, 153, 153, 1)
    margin-bottom: 0px
    margin-top: 5px

  &__title
    font-family: 'Roboto'
    line-height: 28px
    font-size: 20px
    font-weight: 500px
    color: rgba(0, 0, 0, 1)
    margin-top: 0px

  &__text-img
    display: flex
    align-items: center
    gap: 8px
    margin-top: 16px
    width: 324px
    height: 20px
    opacity: 0px

  &__text-item
    font-family: 'Roboto'
    font-weight: 400
    font-size: 14px
    line-height: 20px
    color: rgba(0, 0, 0, 1)

.toggle-wrapper
  display: flex
  align-items: center
  width: 324px
  height: 40px
  padding-top: 16px
  margin-right: 5px

  &__button
    width: 48px
    height: 24px
    display: flex

  &__text
    font-family: 'Roboto'
    font-size: 14px
    line-height: 20px
    color: rgba(0, 0, 0, 1)
    margin-left: 8px

.end-logo
  width-max: 1024px
  display: flex
  justify-content: center
  margin-top: -48px
</style>
