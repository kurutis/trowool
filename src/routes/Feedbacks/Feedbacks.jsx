export  let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('Feedbacks'))
    if (arr) {
        return arr
    } 
    return []
}


export const Feedbacks = () =>{

}