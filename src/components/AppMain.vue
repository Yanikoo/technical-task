<template>
  <div class="wrapper">
    <div class="container">
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
            <span class="toggel-wrapper__text">Уже получает 59 342 человек</span>
          </div>
        </div>

        <div class="container__img">
          <img src="@/assets/img/12.png" width="80px" height="80px" />
        </div>
      </div>
    </div>
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
    // Обработка других действий, если необходимо
  }
}
</script>

<style scoped lang="sass">
.wrapper
  display: flex
  justify-content: center
  width-max: 1024px

.container
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  width: 1024px
  gap: 24px
  background-color: rgba(245, 245, 248, 1)
  border-radius: 0px 0px 16px 16px

  &__item
    width: 476px
    radius: 16px
    padding: 24px
    margin: 24px
    background-color: rgba(255, 255, 255, 1)
    border-radius: 16px
    display: flex
    justify-content: space-between

  &__text-wrapper
    // width: 348px
    // height: 196px
    text-align: left

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

.toggel-wrapper
  display: flex
  align-items: center
  width: 324px
  height: 40px
  padding-top: 16px

  &__button
    width: 48px
    height: 24px
    display: flex

  &__text
    font-family: 'Roboto'
    font-size: 14px
    line-height: 20px
    color: rgba(0, 0, 0, 1)
</style>
