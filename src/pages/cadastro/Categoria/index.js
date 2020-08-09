import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor //nome: valor
        })
    }

    function handleOnChange(event) {
        // setValue(event.target.name, event.target.value);
        const { name, value} = event.target;
        setValue(
            name,
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria : {values.nome}</h1>
            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([...categorias, values]);
                setValues(valoresIniciais)
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleOnChange}
                />
                <div>
                    <label>
                        Descrição:
                    </label>
                    <input
                        type="textArea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleOnChange}
                    />
                </div>
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleOnChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Ir para home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria;