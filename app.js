const getzcctitles = document.getElementsByClassName('acctitle');
// console.log(getzcctitles);
const getcontents = document.querySelectorAll('.accontent');
// console.log(getcontents);

console.log(getzcctitles.length);

// console.log(getzcctitles[0]);
// console.log(getzcctitles[1]);
// console.log(getzcctitles[2]);
// console.log(getzcctitles[3]);

for(var x=0; x<getzcctitles.length;x++){
    // console.log(x);
    // console.log(getzcctitles[x]);

    getzcctitles[x].addEventListener('click',function(e){

        // console.log('hay');
    
        // console.log(e);
        // console.log(e.target);
        // console.log(list);

        // e.target.classList.toggle('active');
        this.classList.toggle('active');

    });
}


