let numbers=document.querySelectorAll('.number div')
let n=''
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',(event)=>{
        event.preventDefault()  
        let actives=document.getElementsByClassName('active')
        for (let active=0;active<actives.length;active++){ 
            actives[active].classList.remove('active')   
        }
        numbers[i].classList.add('active')
        n=numbers[i].id       
    })
}
let btn=document.getElementById('btn')
let part2=document.getElementById('part2')
let part1=document.getElementById('part1')
let choixUtilisateur=document.getElementById('choixUtilisateur')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(n!==""){
        choixUtilisateur.textContent=n
        part2.classList.remove('part2')
        part1.classList.add('part1')      
    }
    

})