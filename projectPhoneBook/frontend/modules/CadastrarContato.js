import validator from 'validator';

export default class CadastrarContato{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const nome = el.querySelector('input[name="nome"]');
        const email = el.querySelector('input[name="email"]');
        const telefone = el.querySelector('input[name="telefone"]');

        let error = false;

        if(!nome.value){
            error = true;
            alert('nome precisa ser preenchido');            
        }

        if(!email.value && !telefone.value){
            error = true;
            alert('preencha o campo email ou telefone');
        }

        if(email.value && !validator.isEmail(email.value)){
            error = true;
            alert('email invalido');
        }

        if(!error) el.submit();
    }
}