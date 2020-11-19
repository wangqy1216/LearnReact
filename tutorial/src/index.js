import React from 'react';
import ReactDom from 'react-dom';

function BookList(){
    return (
        <section>
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
           
    )
}

const Title = () => {
    return (
        <h1>The Three-Body Problem</h1>    
    )
}

const Author = () => {
    return (
        <h1>Liu Cixin</h1>    
    )
}

const Image = () => {
    return (
        <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51c6PKzjPLL._SX327_BO1,204,203,200_.jpg" alt=""/> 
        </div>
    )
}

// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world');
// }

// const Person = () => <h2> This is my message. </h2>;
// const Message = () => {
//     return <p>this is my message.</p>
// }

ReactDom.render(<BookList />, document.getElementById('root'));