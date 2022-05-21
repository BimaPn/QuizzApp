// score
let score = 0;
// interval dan timeout variabel
// function
let myInterval;
let myTimeOut;
function CountDown() {
    const timer = document.querySelector('.main-container .topSec .timer span')
    const setMinutes = 1.25;
    let time = setMinutes * 60;
        myInterval = setInterval(function(){       
            let minutes = Math.floor(time / 60)
            let seconds = time % 60;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timer.innerHTML = `${minutes} : ${seconds}`    
            time--;
            if(time < 0){
                clearInterval(myInterval);
            }
            time = time < 0 ? 0 :time;
    },1000)
    myTimeOut = setTimeout(function(){
        timeOutt()
    },(1000 * time) + 2000)
}
function stopTimer(){
    clearInterval(myInterval)
    clearTimeout(myTimeOut)
}
function timeOutt(){
    const timeOutDisplay = document.querySelector('.timeout-display')
    const displayResult = document.querySelector('.container-timeout h4 span')
    timeOutDisplay.style.display = 'block';
    displayResult.innerHTML = score;
}
function soal(pertanyaan) {
    const soal = document.querySelector('.main-container .soal')
    const pilihan1 = document.querySelector('.main-container ul .answer1')
    const pilihan2 = document.querySelector('.main-container ul .answer2')
    const pilihan3 = document.querySelector('.main-container ul .answer3')
    const pilihan4 = document.querySelector('.main-container ul .answer4')
 switch(pertanyaan){
            case 'satu':
            // soal
            soal.innerHTML = 'Jika rumah kita kemalingan, sebaiknya kita ...'
            // pilihan ganda
            pilihan1.innerHTML = 'Menonton anime'
            pilihan2.innerHTML = 'Membeli biskuat'
            pilihan3.innerHTML = 'Memanggil pihak berwajib'
            pilihan4.innerHTML = 'Main free fire'
            pilihan3.classList.add('benar')
                break;
            case 'dua':
                // soal
            soal.innerHTML = 'Penemu arus listrik bolak-balik adalah...'
            // pilihan ganda
            pilihan1.innerHTML = 'Thomas Alpha Edison'
            pilihan2.innerHTML = 'Jess no limit'
            pilihan3.innerHTML = 'Albert Einsten'
            pilihan4.innerHTML = 'Nicola Tesla'
            pilihan4.classList.add('benar')
                break;    
            case 'tiga':
                    // soal
                soal.innerHTML = 'Mexico berasal dari benua ?'
                // pilihan ganda
                pilihan1.innerHTML = 'Amerika'
                pilihan2.innerHTML = 'Asia'
                pilihan3.innerHTML = 'australia'
                pilihan4.innerHTML = 'Eropa'
                pilihan1.classList.add('benar')
                    break;  
             case 'empat':
                    // soal
                soal.innerHTML = 'Tuan rumah sea games 2022 adalah ...'
                // pilihan ganda
                pilihan1.innerHTML = 'Vietnam'
                pilihan2.innerHTML = 'Singapura'
                pilihan3.innerHTML = 'Malaysia'
                pilihan4.innerHTML = 'Cianjur'
                pilihan1.classList.add('benar')
                    break;
             case 'lima':
                        // soal
                    soal.innerHTML = 'orang yang suka menonton anime disebut ?'
                    // pilihan ganda
                    pilihan1.innerHTML = 'kpoper'
                    pilihan2.innerHTML = 'anime lover'
                    pilihan3.innerHTML = 'anak kecil'
                    pilihan4.innerHTML = 'wibu'
                    pilihan2.classList.add('benar')
                        break;
                        case 'enam':
                        // soal
                    soal.innerHTML = 'Rumus kimia dari air adalah ?'
                    // pilihan ganda
                    pilihan1.innerHTML = 'H20'
                    pilihan2.innerHTML = 'IL0v3U'
                    pilihan3.innerHTML = 'CO2'
                    pilihan4.innerHTML = 'H2SO4'
                    pilihan1.classList.add('benar')
                        break;
                        case 'tujuh':
                        // soal
                    soal.innerHTML = 'kucing termasuk hewan golongan ?'
                    // pilihan ganda
                    pilihan1.innerHTML = 'wibu'
                    pilihan2.innerHTML = 'Mamalia'
                    pilihan3.innerHTML = 'Mama Lia'
                    pilihan4.innerHTML = 'Herbivora'
                    pilihan2.classList.add('benar')
                        break;
                        case 'delapan':
                        // soal
                    soal.innerHTML = 'Jeff Bezos adalah pemilik dari ?'
                    // pilihan ganda
                    pilihan1.innerHTML = 'Amazon'
                    pilihan2.innerHTML = 'Facebook'
                    pilihan3.innerHTML = 'PT.Cinta Sejati'
                    pilihan4.innerHTML = 'Youtube'
                    pilihan1.classList.add('benar')
                        break;
                        case 'sembilan':
                        // soal
                    soal.innerHTML = 'Orang yang terlalu fanatik terhadap sesuatu sebaiknya di ...'
                    // pilihan ganda
                    pilihan1.innerHTML = 'Di apresiasi'
                    pilihan2.innerHTML = 'Dipukul'
                    pilihan3.innerHTML = 'Dibimbing kejalan yang benar'
                    pilihan4.innerHTML = 'Dihasut menjadi anime'
                    pilihan3.classList.add('benar')
                        break;
                        case 'sepuluh':
                        // soal
                    soal.innerHTML = '1 + 1 * 3 - 2 ='
                    // pilihan ganda
                    pilihan1.innerHTML = '4'
                    pilihan2.innerHTML = '6'
                    pilihan3.innerHTML = '5'
                    pilihan4.innerHTML = '2'
                    pilihan4.classList.add('benar')
                        break;              
    }
}
function TrueOrFalse(){
    const ul = document.querySelector('.main-container ul')
    const pilihan = document.querySelectorAll('.main-container ul li')
    const JawabanBenar = document.querySelector('.main-container ul .benar')
    let liListener = 1;
    pilihan.forEach((pilih)=>{  
        pilih.addEventListener('click',(e)=>{         
            if(liListener >= 2){
                pilih.removeEventListener('click',function(){});
            }else{
                if(e.target.classList.contains('benar')){
                    score += 10;
                    // scoreP.innerHTML = score;
                    e.target.style.backgroundColor = 'rgba(147, 250, 165,.7)'
                }else{
                    e.target.style.backgroundColor = 'rgba(207, 0, 15,.5)'
                    JawabanBenar.style.backgroundColor = 'rgba(147, 250, 165,.7)'
                }
            }         
            liListener ++;
            ul.setAttribute('class','checked')
        })
       
    })
}
function questReset() {
    const ul = document.querySelector('.main-container ul')
    const pilihan = document.querySelectorAll('.main-container ul li')
    pilihan.forEach((pilih)=>{ 
        pilih.classList.remove('benar')         
        pilih.style.backgroundColor = '#d7e3f3'
    })
    ul.classList.remove('checked')
}
function startButton() {
    const startContainer = document.querySelector('.start-container')
    const mainContainer = document.querySelector('.main-container')
    const buttonStart = document.querySelector('.start-container button')
    buttonStart.addEventListener('click',()=>{
        startContainer.style.display = 'none'
        mainContainer.style.display = 'block'
        buttonNext()
    })
}
function buttonNext() {
    soal('satu')
    TrueOrFalse()
    CountDown()
    const ButtonNext = document.querySelector('.main-container button')
    const ul = document.querySelector('.main-container ul')
    const question = document.querySelector('.bottomSec h5 span')
    let countButton = 2;
    ButtonNext.addEventListener('click',function(){
        if(countButton == 2 && ul.classList.contains('checked')){
            questReset()
            soal('dua')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 3 && ul.classList.contains('checked')){
            questReset()
            soal('tiga')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 4 && ul.classList.contains('checked')){
            questReset()
            soal('empat')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 5 && ul.classList.contains('checked')){
            questReset()
            soal('lima')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 6 && ul.classList.contains('checked')){
            questReset()
            soal('enam')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 7 && ul.classList.contains('checked')){
            questReset()
            soal('tujuh')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        } else if(countButton == 8 && ul.classList.contains('checked')){
            questReset()
            soal('delapan')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 9 && ul.classList.contains('checked')){
            questReset()
            soal('sembilan')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 10 && ul.classList.contains('checked')){
            questReset()
            soal('sepuluh')
            TrueOrFalse()
            question.innerHTML = countButton;
            countButton += 1;
        }else if(countButton == 11 && ul.classList.contains('checked')){
            displayResult()
            
        } else{
            alert('mohon masukan jawaban terlebih dahulu')
        }
        // console.log(scores)
    })  
}
function displayResult() {
    // CountDown(false)
    stopTimer()
    const mainContainer = document.querySelector('.main-container')
    const resultDisplay = document.querySelector('.display-score')
    const displayScore = document.querySelector('.display-score .score span') 
    const argument = document.querySelector('.display-score .argument')
    mainContainer.style.display = 'none'
    resultDisplay.style.display = 'block'
    if(score <= 100 && score >= 90){
        argument.innerHTML = '"GOOD JOB !"'
        argument.style.color = 'rgb(153, 212, 36)'
    }else if(score < 90 && score >= 70){
        argument.innerHTML = '"RATA RATA"'
        argument.style.color = 'rgb(11, 169, 11)'
    }else if(score < 70 && score >= 40){
        argument.innerHTML = '"DIBAWAH KKM"'
        argument.style.color = 'rgb(9, 118, 9)'
    }else{
        argument.innerHTML = '"SANGAT BURUK"'
        argument.style.color = 'red'
    }
    displayScore.innerHTML = score;
}
startButton()


