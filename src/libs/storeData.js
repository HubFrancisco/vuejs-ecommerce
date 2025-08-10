import { ref } from 'vue'

const storeData = ref([1, 2, 3])

function setData(data) {
    storeData.value.push(data)
}
export {
    setData, storeData
}

