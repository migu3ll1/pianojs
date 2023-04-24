lert(' importante: caso esteja usando um dispositivo movel, e não tenha um teclado disponivel, por favor utilize a funcionalidade no fim da pagina !!! (:')
function detecta(event)
{
   let regitro=window.document.querySelector('.nt_salva')
    //audio notas
    const notaDO= new Audio('nts_piano/piano-c_C_major.wav')
    const notaDOsus= new Audio('nts_piano/piano-c_Csus_major.wav')
    const notRE= new Audio('nts_piano/piano-d_D_major.wav')
    const notREsus= new Audio('nts_piano/d6-82020.mp3')
    const notMI= new Audio('nts_piano/piano-e_E_major.wav')
    const notFA= new Audio('nts_piano/piano-f_F_major.wav')
    const notSOL= new Audio('nts_piano/sol-101774.mp3')
    const notSOLsus=new Audio('nts_piano/f6-102819.mp3')
    const notLA= new Audio('nts_piano/la-80237.mp3')
    const notLAsus= new Audio('nts_piano/g6-82014.mp3')
    const notSI= new Audio('nts_piano/si-80238.mp3')
    const notaSIsus=new Audio('nts_piano/a6-82015.mp3')
    //select teclas brancas
    let tlc=window.document.querySelector('#tecla1')
    let tlc2=window.document.querySelector('#tecla2')
    let tlc3=window.document.querySelector('#tecla3')
    let tlc4=window.document.querySelector('#tecla4')
    let tlc5=window.document.querySelector('#tecla5')
    let tlc6=window.document.querySelector('#tecla6')
    let tlc7=window.document.querySelector('#tecla7')

    //select teclas pretas
    let tlcW= window.document.querySelector('#pretaW')
    let tlcE= window.document.querySelector('#pretaE')
    let tlcY= window.document.querySelector('#pretaY')
    let tlcU= window.document.querySelector('#pretaU')
    let tlcI= window.document.querySelector('#pretaI')

    var tecla = event.key;
    if (tecla == "a" || tecla=='A'){
        notaDO.play()
        tlc.classList.add('ative_tecla')
        regitro.innerHTML=('DO')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="w" || tecla=='W'){
        notaDOsus.play()
        tlcW.classList.add('active_teclaPT')
        regitro.innerHTML=('DO#')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="s" || tecla=='S'){
        notRE.play()
        tlc2.classList.add('ative_tecla')
        regitro.innerHTML=('RE')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="e" || tecla=='E'){
        notREsus.play()
        tlcE.classList.add('active_teclaPT')
        regitro.innerHTML=('RE#')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="d" || tecla=='D'){
        notMI.play()
        tlc3.classList.add('ative_tecla')
        regitro.innerHTML=('MI')
        regitro.classList.add('opem_nts')
       
    }
    if(tecla=="f" || tecla=='F'){
        notFA.play()
        tlc4.classList.add('ative_tecla')
        regitro.innerHTML=('FA')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="g" || tecla=='G'){
        notSOL.play()
        tlc5.classList.add('ative_tecla')
        regitro.innerHTML=('SOL')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="y" || tecla=='Y'){
        notSOLsus.play()
        tlcY.classList.add('active_teclaPT')
        regitro.innerHTML=('SOL#')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="h" || tecla=='H'){
        notLA.play()
        tlc6.classList.add('ative_tecla')
        regitro.innerHTML=('LA')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="u" || tecla=='U'){
        notLAsus.play()
        tlcU.classList.add('active_teclaPT')
        regitro.innerHTML=('LA#')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="j" || tecla=='J'){
        notSI.play()
        tlc7.classList.add('ative_tecla')
        regitro.innerHTML=('SI')
        regitro.classList.add('opem_nts')
    }
    if(tecla=="i" || tecla=='I'){
        notaSIsus.play()
        tlcI.classList.add('active_teclaPT')
        regitro.innerHTML=('SI#')
        regitro.classList.add('opem_nts')

    }
}

function removeAnimation(){
    //select teclas brancas
    let tlc=window.document.querySelector('#tecla1')
    let tlc2=window.document.querySelector('#tecla2')
    let tlc3=window.document.querySelector('#tecla3')
    let tlc4=window.document.querySelector('#tecla4')
    let tlc5=window.document.querySelector('#tecla5')
    let tlc6=window.document.querySelector('#tecla6')
    let tlc7=window.document.querySelector('#tecla7')
    
    //select teclas pretas
    let tlcW= window.document.querySelector('#pretaW')
    let tlcE= window.document.querySelector('#pretaE')
    let tlcY= window.document.querySelector('#pretaY')
    let tlcU= window.document.querySelector('#pretaU')
    let tlcI= window.document.querySelector('#pretaI')
    
    //remover animação teclas brancas
    tlc.classList.remove('ative_tecla')
    tlc2.classList.remove('ative_tecla')
    tlc3.classList.remove('ative_tecla')
    tlc4.classList.remove('ative_tecla')
    tlc5.classList.remove('ative_tecla')
    tlc6.classList.remove('ative_tecla')
    tlc7.classList.remove('ative_tecla')
    
    //remover animação teclas pretas
    tlcW.classList.remove('active_teclaPT')
    tlcE.classList.remove('active_teclaPT')
    tlcY.classList.remove('active_teclaPT')
    tlcU.classList.remove('active_teclaPT')
    tlcI.classList.remove('active_teclaPT')
}

//teclado para dispositivos moveis
function celYes(){
    const iptCEL= window.document.querySelector('.teclado_cel')
    iptCEL.classList.remove('teclado_cel')
    iptCEL.classList.add('abertura')
}
function celNot(){ 
    const alerta= window.document.getElementById('txt')
    alerta.classList.add('abertura')
    alerta.classList.add('parametros_abertura_2')
    alerta.innerText='obrigado pelo feedback'
}