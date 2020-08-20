import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import api from '../api'

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            isLoading: false,
            searchName: '',
            ascendingFirstName: "",
            ascendingLastName: "",
            ascendingAge: '',
            location: "",
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })

        api.getAllEmployees().then(employees => {
            this.setState({
                employees: employees.data.results,
                isLoading: false,
            })
        })
    }

    // sort in ascendingFirstName or descending order of first name
    handleFirstNameSort = (event) => {
        event.preventDefault();
        const { ascendingFirstName } = this.state;
        if (ascendingFirstName === false || ascendingFirstName === "") {
        // A to Z
        this.handleFirstNameSortAZ();
        } else if (ascendingFirstName === true) {
        // Z to A
        this.handleFirstNameSortZA();
        } else if (ascendingFirstName === true) {
        // location
        this.handleFirstNameSortLocation();
        }
        return;
    };

    // sort A to Z of first name
    handleFirstNameSortAZ = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
            a.name.first.localeCompare(b.name.first)
        ),
        ascendingFirstName: true,
        });
    };

    // sort Z to A of first name
    handleFirstNameSortZA = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
            b.name.first.localeCompare(a.name.first)
        ),
        ascendingFirstName: false,
        });
    };



    // sort in ascending or descending order of last name
    handleLastNameSort = (event) => {
        event.preventDefault();
        const { ascendingLastName } = this.state;
        if (ascendingLastName === false || ascendingLastName === "") {
        // A to Z
        this.handleLastNameSortAZ();
        } else if (ascendingLastName === true) {
        // Z to A
        this.handleLastNameSortZA();
        } else if (ascendingLastName === true) {
        // location
        this.handleLastNameSortLocation();
        }
        return;
    };

    // sort A to Z of last name
    handleLastNameSortAZ = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
            a.name.last.localeCompare(b.name.last)
        ),
        ascendingLastName: true,
        });
    };

    // sort Z to A of last name
    handleLastNameSortZA = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
            b.name.last.localeCompare(a.name.last)
        ),
        ascendingLastName: false,
        });
    };


    // sort in ascending or descending order of age
    handleAgeSort = (event) => {
        event.preventDefault();
        const { ascendingAge } = this.state;
        if (ascendingAge === false || ascendingAge === "") {
        // A to Z
        this.handleAgeSortAsc();
        } else if (ascendingAge === true) {
        // Z to A
        this.handleAgeSortDesc();
        } else if (ascendingAge === true) {
        // location
        this.handleAgeSortLocation();
        }
        return;
    };

    // sort ascending of age
    handleAgeSortAsc = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
         a.dob.age - b.dob.age
        ),
        ascendingAge: true,
        });
    };

    // sort descending of age 
    handleAgeSortDesc = () => {
        this.setState({
        employees: this.state.employees.sort((a, b) =>
         b.dob.age - a.dob.age
        ),
        ascendingAge: false,
        });
    };




    render() {
        const { employees } = this.state
        console.log('TCL: EmployeesList -> render -> employees', employees)

        function formatDate(date) {
            const dateArray = date.split("-");
            const year = dateArray[0];
            const month = dateArray[1];
            const dayArray = dateArray[2].split("T");
            const day = dayArray[0];
            const formattedDate = [month, day, year].join("-");
            return formattedDate;
        }

        let showTable = true

        if (!employees.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <Header></Header>
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
                    <FilterButton onClick={this.handleFirstNameSort}>Order by First Name</FilterButton>
                    <FilterButton onClick={this.handleLastNameSort}>Order by Last Name</FilterButton>
                    <FilterButton onClick={this.handleAgeSort}>Order by Age</FilterButton>
                </FilterBar>
                {showTable && (
                    employees
                    .filter(employee => {
                        const employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;

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
                            {/* Phone number and email and DOB*/}
                            <EmployeeDetails>
                                <EmployeeCity>Location: {`${employee.location.city}, ${employee.location.state}`}</EmployeeCity>
                                <EmployeePhoneNumber>Phone: {employee.email}</EmployeePhoneNumber>
                                <EmployeeEmail>Email: {employee.phone}</EmployeeEmail>
                                <EmployeeDateBirth>Date of Birth: {formatDate(employee.dob.date)}</EmployeeDateBirth>
                            </EmployeeDetails>
                        </Card>
                    ))
                )}
            </Wrapper>
        )
    }
}

const EmployeeCity = styled.p``

const EmployeeDateBirth = styled.p``

const EmployeeEmail = styled.p``

const EmployeePhoneNumber = styled.p``

const EmployeeDetails = styled.div`
    display: row;
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