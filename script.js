let form=document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let para=document.querySelector('.greet')
    para.classList.remove('hidden')
})