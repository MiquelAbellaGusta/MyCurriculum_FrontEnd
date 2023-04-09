const Flag = ({ idioma }) => {

    switch (idioma) {
        case 'catala':
            idioma = ""
            break;
        case 'spanish':
            idioma = ""
            break;
        case 'english':
            idioma = ""
            break;
        default: idioma = ""

    }


    return (
        <div>
            <img className="flag" src={idioma} alt="Bandera" />
        </div>
    );
}

export default Flag;