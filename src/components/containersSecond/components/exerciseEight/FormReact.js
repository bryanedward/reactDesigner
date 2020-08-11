import React from 'react'


class FormReact extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            validated: true,
            gender: "",
            color: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        // comporobae el tipo de dato a actualizar
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {

        const Input = {
            padding: '1.0em',
            margin: '1.0em'

        };

        return (
            <div>
                <form>
                    <input name="firstName"
                        placeholder="Escribe"
                        type="text"
                        style={Input}
                        onChange={this.handleChange} />
                    <br />
                    <input name="lastName"
                        placeholder="tus tonteras"
                        type="text"
                        style={Input}
                        onChange={this.handleChange} />

                    <label>
                        <input type="checkbox"
                            checked={this.state.validated}
                            name="validated"
                            onChange={this.handleChange}
                        />
                        Es amigable ese tipo ?
                    </label>

                    <label>
                        <input type="radio"
                            value="male"
                            name="gender"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />
                        Hombre
                    </label>
                    <label>
                        <input type="radio"
                            value="female"
                            name="gender"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />
                        Mujer
                    </label>

                    <select value={this.state.color} onChange={this.handleChange} name="color">
                        <option value="red"> rojo</option>
                        <option value="blue"> azul</option>
                    </select>
                </form>
                <h3>{this.state.firstName}</h3>
                <br />
                <h4>{this.state.lastName}</h4>
                <br />
                <h3>{this.state.gender}</h3>
                <br />
                <h3>{this.state.color}</h3>
            </div>

        )
    }
}

export default FormReact;