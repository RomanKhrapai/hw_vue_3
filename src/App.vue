<template>
  <div>
    <CustomButton class="light-bulb-btn" @click="turnLight">увімкнути світло</CustomButton>
    <Text>{{ isLight ? "Світло світить" : "Світло вимкнене" }}</Text>
    <LightBulb :isOn="isLight"></LightBulb>
    <Text v-show="isLight">Приховати з v-show </Text>
    <Text v-if="isLight">Приховати з v-if </Text>
    <RadioBlock @selectedOption="turnRadio"></RadioBlock>
    <Text v-if="!radio">оберіть радіо кнопку</Text>
    <Text v-if="radio === 1">Обрано першу радіо кнопку</Text>
    <Text v-if="radio === 2">Обрано другу радіо кнопку</Text>
    <Text v-if="radio === 3">Обрано третю радіо кнопку</Text>
    <CustomButton class="wait-btn" :disabled="numBtnDisabled === 1" @click="addDisabled(1)">{{
      textBtn(1) }}
      атрибут 'disabled'
    </CustomButton>
    <CustomButton class="wait-btn" :disabled="numBtnDisabled === 2" @click="addDisabled(2)">{{
      textBtn(2) }}
      атрибут 'disabled'</CustomButton>
  </div>
</template>

<script>
import Text from "./components/Text.vue"
import LightBulb from "./components/LightBulb.vue"
import RadioBlock from "./components/RadioBlock.vue"

export default {
  components: {
    Text, LightBulb, RadioBlock
  },
  data() {
    return {
      isLight: true,
      radio: null,
      numBtnDisabled: null,
    }
  },
  methods: {
    turnLight() {
      this.isLight = !this.isLight
    },
    turnRadio(index) {
      this.radio = +index;
    },
    addDisabled(index) {
      this.numBtnDisabled = index;
    },
    textBtn(index) {
      return this.numBtnDisabled !== index ? 'додати' : ''
    }
  },

}
</script>

<style scoped>
.light-bulb-btn {
  margin-bottom: 10px;
}

.wait-btn {
  width: 200px;
  height: 80px;
}
</style>
