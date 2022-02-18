import Image from './Image/Image';
import Quote from './Quote/Quote';
import Text from './Text/Text';

const Gallery = (props) => {
    return (
        <div className="bg-dark text-white">
            <div className='leaf text'>
                <h2>Картины Германа Гессе</h2>
                <Quote quote='«Что такое зелено-голубое? Что такое жемчужно-голубое? Как можно выразить едва заметное преобладание желтого, кобальтового, синего, фиолетового? А ведь в этом преобладании заключена вся сладостная тайна настроения...»'
                    sign='Герман Гессе (2 июля 1877 — 9 августа 1962)' />
                {props.content.map((inner, index) => {
                    if (inner.startsWith('http:')) {
                        return <Image src={inner}
                            key={`message_${index}`} />
                    } else {
                        return <Text text={inner}
                            key={`message_${index}`} />
                    }
                })}
            </div>
        </div>
    );
}

export default Gallery 