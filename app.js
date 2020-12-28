// HTML Elems
let totalCasesHTML = document.getElementById('total-cases')
let totalRecoveriesHTML = document.getElementById('total-recoveries')
let totalDeathsHTML = document.getElementById('total-deaths')
let allCountriesResultsHTML = document.getElementById('all-countries-results') // table

// DATA STORE (don't change this)
let storedData = []
let storedDataSorted = []

// Fetch the api
fetch('https://api.covid19api.com/summary')
.then((res) => res.json())
.then((data) => {
    // Headings
    totalCasesHTML.innerHTML = `Total cases: ${data.Global.TotalConfirmed.toLocaleString()}`
    totalRecoveriesHTML.innerHTML = `Total recoveries: ${data.Global.TotalRecovered.toLocaleString()}`
    totalDeathsHTML.innerHTML = `Total deaths: ${data.Global.TotalDeaths.toLocaleString()}` 
    
    // Store into variable
    for(i = 0; i < (Object.keys(data.Countries).length); i++) {
        storedData.push(data.Countries[i])
    }
    
    // Loop through countries and print every country along with its statistics
    for(i = 0; i < (Object.keys(data.Countries).length); i++) {
        allCountriesResultsHTML.innerHTML += `<tr>
        <td>${data.Countries[i].Country}</td>
        <td>${data.Countries[i].TotalConfirmed.toLocaleString()}</td>
        <td>${data.Countries[i].TotalRecovered.toLocaleString()}</td>
        <td>${data.Countries[i].TotalDeaths.toLocaleString()}</td>
        <td>${data.Countries[i].NewConfirmed.toLocaleString()}</td>
        <td>${data.Countries[i].NewDeaths.toLocaleString()}</td>    
      </tr>`
    }


    // SORT FUNCTIONS
    function sortByTotalCases() {
        storedDataSorted = storedData.slice(0).sort(
            function(a, b) {
                return b.TotalConfirmed - a.TotalConfirmed
        })

        console.log(storedDataSorted)
    }
})

