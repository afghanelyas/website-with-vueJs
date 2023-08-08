import { ref, watch } from 'vue';
export default function useStorage(key, val = null){
    let storageVal = read()

    if(storageVal){
        val = ref(storageVal)
    }else{
        val = ref(val)
        write()
    }
    
    watch(val, write, {deep: true})
    
    function read(){
        return JSON.parse(localStorage.getItem(key))
    }

    function write(){
        if(val.value === '' || val.value === null){
            localStorage.removeItem(key)
        }else{
            localStorage.setItem(key, JSON.stringify(val.value))
        }
    }
    return val;
}