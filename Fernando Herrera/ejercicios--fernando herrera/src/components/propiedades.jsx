import PropTypes from 'prop-types';

export  function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <h2>{props.numero}</h2>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto :"Props por defecto"
};
Propiedades.propTypes ={
    numero: PropTypes.number
}