//acrescenta linhas no textarea
const inputTexto = document.querySelectorAll(".input-texto-primario");
const mensagem = document.querySelectorAll(".mensagem");
verificaTamanho(inputTexto);
verificaTamanho(mensagem);

function verificaTamanho(txtAreas) {
   //var txtAreas = document.querySelectorAll('textarea')
      for(x=0;x<txtAreas.length;x++){
         txtAreas[x].addEventListener('input', function(){
              if(this.scrollHeight > this.offsetHeight) this.rows += 1;
         });
      }
}
   
