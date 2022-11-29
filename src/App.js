import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    tytle: 'Китайський шовк',
                    img: 'chinas-silk.png',
                    desc: 'lorem ipsum rwrwaraga',
                    price: '707.00',
                },

                {
                    id: 2,
                    tytle: 'Китайський шовк',
                    img: 'chinas-silk.png',
                    desc: 'lorem ipsum rwrwaraga',
                    price: '707.00',
                },

                {
                    id: 3,
                    tytle: 'Китайський шовк',
                    img: 'chinas-silk.png',
                    desc: 'lorem ipsum rwrwaraga',
                    price: '707.00',
                },

                {
                    id: 4,
                    tytle: 'Китайський шовк',
                    img: 'chinas-silk.png',
                    desc: 'lorem ipsum rwrwaraga',
                    price: '707.00',
                },

                {
                    id: 5,
                    tytle: 'Китайський шовк',
                    img: 'chinas-silk.png',
                    desc: 'lorem ipsum rwrwaraga',
                    price: '707.00',
                },
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Items items={this.state.items} />
                <Footer />
            </div>
        )
    }
}

export default App;