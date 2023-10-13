<template>
    <div>
        <div :class="{ 'bulb-on': isOn, 'bulb-off': !isOn }"></div>
        <span>{{ isOn ? "Світло " : "Темно" }} </span>
    </div>
</template>
  
<script>
export default {
    props: {
        isOn: Boolean
    }
};
</script>
  
<style scoped>
.bulb-on {
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50%;
    box-shadow: 0 0 10px yellow;
}

.bulb-off {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 50%;
}
</style>