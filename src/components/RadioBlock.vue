<template>
    <div class="radio-group">
        <label>
            <input type="radio" @click="getvalue" name="radios" value="1">
            текст 1</label>

        <label>
            <input type="radio" @click="getvalue" name="radios" value="2">
            текст 2</label>
        <label>
            <input type="radio" @click="getvalue" name="radios" value="3">
            текст 3</label>
    </div>
</template>
  
<script>
export default {
    emits: ['selectedOption'],
    methods: {
        getvalue(e) {
            this.$emit('selectedOption', e.target?.value);
        }
    }
};
</script>
    
<style scoped>
.radio-group {
    display: flex;
    flex-direction: column;
}

label {
    cursor: pointer;
    padding: 5px;
}
</style>