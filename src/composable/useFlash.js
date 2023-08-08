import swal from 'sweetalert'

export default function useFlash(){
   function flash(title, message, level = 'success'){
        return swal(title, message, level)
    }
    return {flash}
}
