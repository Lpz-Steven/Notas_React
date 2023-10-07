import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const FirstApp = ({title, subtitulo})=>{
    if(!title){
        throw new Error ('Title no existe');
    }
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitulo}</p>
        </>
       
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps={
    title:'No hay Titulo',
    subtitulo:'No hay subtitulo',
}