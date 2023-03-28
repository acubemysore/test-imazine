const closeBtn = document.querySelector('.close')
const teamMemberFullInfo = document.querySelector('.team-member-full-info')
const teamInfo = document.querySelector('.team-info')


closeBtn.addEventListener('click',()=>{
    teamMemberFullInfo.classList.toggle('remove')
})

teamInfo.addEventListener('click',(e)=>{
    if(e.target.closest('.team-member')){
        teamMemberFullInfo.classList.toggle('remove')
    }
})