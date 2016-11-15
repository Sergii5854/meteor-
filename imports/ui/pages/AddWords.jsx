import React from 'react';

class AddWords extends React.Component {
    constructor() {
        super();

        this.handlerForm = this.handlerForm.bind(this);
    }

    handlerForm(e) {
        e.preventDefault();

        let eng = this.refs.eng.value,
            translation = this.refs.translation.value,
            ru = this.refs.ru.value,
            tema = this.refs.tema.value;


        let word = {
            eng:eng,
            translation:translation,
            ru:ru,
            tema:tema,

        };

        Meteor.call('word.add', word);
        console.log(1);
        FlowRouter.go('/eng');
    }
    render() {
        return (
            <div name="AddWords">
                <h2>AddWords</h2>
                <p>In this area you can add yors words</p>
                <div id="AddWords" name="AddWords">

                    <form onSubmit={this.handlerForm} className="addw">
                        <p><input type="eng" ref="eng" name="eng" placeholder="English word:"/></p>
                        <p><input type="translation" ref="translation" name="translation" placeholder="Translation:"/></p>
                        <p> <input type="ru"  ref="ru" name="ru" placeholder="Russian Word:"/></p>
                        <p> <input type="tema"  ref="tema" name="tema" placeholder="Teма"/></p>
                        <p><input type="submit" value="Remember"/></p>

                    </form>
                </div>


            </div>
        )
    }
}

export default AddWords;