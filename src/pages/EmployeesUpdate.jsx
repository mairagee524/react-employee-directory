import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EmployeesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            phone: '',
            email: '',
            dob: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPhone = async event => {
        const phone = event.target.validity.valid
            ? event.target.value
            : this.state.phone

        this.setState({ phone })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputDob = async event => {
        const dob = event.target.value
        this.setState({ dob })
    }
    handleUpdateEmployee = async () => {
        const { id, name, phone, email, dob } = this.state
        const payload = { name, phone, email, dob }

        await api.updateEmployeeById(id, payload).then(res => {
            window.alert(`Employee updated successfully`)
            this.setState({
                name: '',
                phone: '',
                email: '',
                dob: ''
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const employee = await api.getEmployeeById(id)

        this.setState({
            name: employee.data.data.name,
            phone: employee.data.data.phone,
            email: employee.data.data.email,
            dob: employee.data.data.dob,
        })
    }

    render() {
        const { name, phone, email, dob } = this.state
        return (
            <Wrapper>
                <Title>Create Employee</Title>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Phone: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />
                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
                <Label>Date of Birth: </Label>
                <InputText
                    type="text"
                    value={dob}
                    onChange={this.handleChangeInputDob}
                />
                <Button onClick={this.handleUpdateEmployee}>Update Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmployeesUpdate
