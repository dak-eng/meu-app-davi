import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Cep() {
    const { id } = useParams()
    const [ endereco, setEndereco] = useState(null)
    const [erro,setErro] = useState("");
    useEffect(() => {
        async function buscarCep() {
            try {
                setErro("")
                setEndereco(null)
                const resposta = await axios.get(
                    `https://brasilapi.com.br/api/cep/v1/${id}`
                )
                setEndereco({
                  logradouro: resposta.data.street,
                  bairro: resposta.data.neighborhood,
                  localidade: resposta.data.city,
                  uf: resposta.data.state,
                });
                console.log(resposta.data)
            } catch (error) {
                console.log(error)
                setErro("Não foi possível acessar o ViaCEP no momento.")
            }
        }
        buscarCep();
    }, [id]);
            
            return (
                    <div className="cep-card">
                    <h1>CEP: {id}</h1>
                    {endereco && (
                        <div className="cep-resultado">
                            <p><strong>📍 Rua:</strong> {endereco.logradouro}</p>
                            <p><strong>🏘️ Bairro:</strong> {endereco.bairro}</p>
                            <p><strong>🌆 Cidade:</strong> {endereco.localidade}</p>
                            <p><strong>🗺️ Estado:</strong> {endereco.uf}</p>
                        </div>
                    )}
                    {erro && <p className="cep-erro">{erro}</p>}
                
                </div>
            )
        }


export default Cep