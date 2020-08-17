import React, { Component } from 'react'
import styled from 'styled-components'

import api from '../api'

class EmployeesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            isLoading: false,
            searchName: '',
            orderName: 'asc' // 'desc'
        }
    }

    // Eric asks : do you need `async/await`?
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllEmployees().then(employees => {
            this.setState({
                employees: employees.data.results,
                isLoading: false,
            })
        })
    }

    render() {
        const { employees } = this.state
        console.log('TCL: EmployeesList -> render -> employees', employees)

        let showTable = true

        if (!employees.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {/* Search bar */}
                <SearchBar>
                    <Label>Search Name:</Label>
                    <SearchInput placeholder="Type something... 🦜" onChange={event => {
                        const searchName = event.target.value
                        this.setState({ searchName })
                    }}/>
                </SearchBar>
                {/* filters */}
                <FilterBar>
                    <FilterButton onClick={() => this.setState({ orderName: 'asc/desc' })}>Order by name</FilterButton>
                </FilterBar>
                {showTable && (
                    employees
                    // .sort((rightEmployee, leftEmployee) => {
                    //   is rightEmployee before left? asc
                    //   is left before right? desc
                    //   or are they same
                    // })
                    .filter(employee => {
                        const employeeName = `${employee.name.first} ${employee.name.last}`;

                        //  'barry' contain 'b' :  partial match

                        if (employeeName.includes(this.state.searchName)) {
                            return true;
                        }

                        return false;
                    })
                    .map(employee => (
                            <Card key={employee.login.uuid}>
                                {/* picture.large */}
                                <EmployeePicture src={employee.picture.large} />
                                {/* Name.title, name.first, name.last */}
                                <EmployeeName>{`${employee.name.first} ${employee.name.last}`}</EmployeeName>
                                {/* Phone number and email*/}
                                <EmployeeDetails>
                                    <EmployeePhoneNumber>{employee.email}</EmployeePhoneNumber>
                                    <EmployeeEmail>{employee.phone}</EmployeeEmail>
                                </EmployeeDetails>
                            </Card>
                        )
                    )
                )}

            </Wrapper>
        )
    }
}

const EmployeeEmail = styled.p``

const EmployeePhoneNumber = styled.p``

const EmployeeDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const EmployeeName = styled.h3``

const EmployeePicture = styled.img``

const Card = styled.div`
    padding: 1rem;
    border-radius: 8px;
    /* brumm.af */
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FilterBar = styled.div``

const FilterButton = styled.button``

const SearchBar = styled.div``

const Label = styled.label``

const SearchInput = styled.input``

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

export default EmployeesList
