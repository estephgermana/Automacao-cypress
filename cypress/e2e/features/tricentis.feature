Funcionalidade: Envio de Formulário

  Cenário: Submeter o formulário com sucesso e receber confirmação
    Dado que eu esteja na página "Enter Vehicle Data"
    Quando eu preencher o formulário e clicar em next
    E eu estiver na página "Enter Insurant Data"
    Quando eu preencher o formulário e clicar em next
    E eu estiver na página "Enter Product Data"
    Quando eu preencher o formulário e clicar em next
    E eu estiver na página "Select Price Option"
    Quando eu preencher o formulário e clicar em next
    E eu estiver na página "Send Quote"
    Quando eu preencher o formulário e clicar em Send
    Então eu devo ver "Sending e-mail success!" na tela
