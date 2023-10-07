import { useState, useEffect } from "react";

const QuestionComponent = (props) => {
  const [data, setData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCorrection, setShowCorrection] = useState(false);

  useEffect(() => {
    fetch("http://localhost:1337/api/preguntas")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <p>Cargando...</p>;
  }

  const arregloP = data.data;
  console.log(arregloP);

  const handleOptionClick = () => {
    setShowCorrection(true);
    props.decrement();
  };

  const handleContinueClick = () => {
    if (currentQuestion < arregloP.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowCorrection(false);
    } else {
      // Has llegado al final de las preguntas
    }
  };

  const validateResponse = (question, opcion) => {
    const { opcion_correcta } = question;
    if (opcion === opcion_correcta) {
      handleContinueClick();
    } else {
      handleOptionClick();
    }
  };

  return (
    <>
      {!showCorrection && (
        <div>
          <p>{arregloP[currentQuestion].attributes.enunciado}</p>
          <button
            onClick={() =>
              validateResponse(arregloP[currentQuestion].attributes, 1)
            }
          >
            {arregloP[currentQuestion].attributes.opcion1}
          </button>
          <button
            onClick={() =>
              validateResponse(arregloP[currentQuestion].attributes, 2)
            }
          >
            {arregloP[currentQuestion].attributes.opcion2}
          </button>
          <button
            onClick={() =>
              validateResponse(arregloP[currentQuestion].attributes, 3)
            }
          >
            {arregloP[currentQuestion].attributes.opcion3}
          </button>
          <button
            onClick={() =>
              validateResponse(arregloP[currentQuestion].attributes, 4)
            }
          >
            {arregloP[currentQuestion].attributes.opcion4}
          </button>
        </div>
      )}

      {showCorrection && (
        <div>
          <p>{arregloP[currentQuestion].attributes.informacion}</p>
          <button onClick={handleContinueClick}>Continuar</button>
        </div>
      )}
    </>
  );
};

export default QuestionComponent;
