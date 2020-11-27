import { useState } from 'react';

function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCaixaAlta = textoInserido.toUpperCase();

    return <div>{textoEmCaixaAlta}</div>
}

function Contador() {
    const [contador, setContador] = useState(1);

    function somarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div><h1>{contador}</h1></div>
            <button onClick={somarContador}>Adicionar</button>
        </div>
    )
}

function Home() {
    return <Contador />
}

export default Home