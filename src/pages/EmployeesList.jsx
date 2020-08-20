import React, { Component } from 'react'
import Header from '../components/Header/Header'
import FilterButton from '../components/OrderButtons'
import Card from '../components/Card'
import Wrapper from '../components/Wrapper'
import EmployeeDetails from '../components/EmployeeDetails'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import EmployeeCity from '../components/EmployeeCity'
import SearchInput from '../components/SearchInput'
import Label from '../components/Label'
import EmployeePicture from '../components/EmployeePicture'
import EmployeeName from '../components/EmployeeName'
import EmployeeDateBirth from '../components/EmployeeDateBirth'
import EmployeeEmail from '../components/EmployeeEmail'
import EmployeePhoneNumber from '../components/EmployeePhoneNumber'
import CardContainer from '../components/CardContainer'

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
                    <Label>Search Name: </Label>

                    <SearchInput placeholder="Type something... 🦜" 
                        onChange={event => {
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
                <CardContainer>
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
                                <EmployeePhoneNumber>Phone: {employee.phone}</EmployeePhoneNumber>
                                <EmployeeEmail>Email: {employee.email}</EmployeeEmail>
                                <EmployeeDateBirth>Date of Birth: {formatDate(employee.dob.date)}</EmployeeDateBirth>
                            </EmployeeDetails>
                        </Card>
                    ))
                )}
                </CardContainer>
            </Wrapper>
        )
    }
}

export default EmployeesList