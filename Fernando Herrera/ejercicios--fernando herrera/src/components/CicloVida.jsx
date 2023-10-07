import React, {Component} from "react";

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aun NO esta en el DOM");

        this.state ={
            hora: new Date().toLocaleTimeString()
        }

        this.temporizador = null;
    }

    componentDidMount(){
        console.log(1, "El componente ya se encuentra en el DOM")
    }

    componentDidUpdate(){
        console.log(2, "El estado o las props del componente han cambiado")
    }

    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM")
    }


    tictac =()=>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    iniciar =()=>{
        this.tictac()
    };

    detener= ()=>{
        clearInterval(this.temporizador)
    }

    render(){
        console.log(4,"El componente se dibuja o redibuja por cambios en el DOM")
        return(
            <>
                <h2>Ciclo de vida de los componentes de Clase</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        )
    }
}