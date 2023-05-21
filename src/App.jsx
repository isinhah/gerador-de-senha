import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar senha"); //valor inicial

  //Função de gerar senha
  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";
    for (let index = 0; index < length; index++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword); //vai atribuir a nova senha gerada ao state
    setCopyText("Copiar senha"); //vai atribuir copiar senha novamente ao state, assim que clicar em gerar senha
  }

  //Função de copiar senha
  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Senha copiada!");
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar senha</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
