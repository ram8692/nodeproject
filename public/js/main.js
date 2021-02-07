const submitbtn = document.getElementById('submitBtn');


const cityName = document.getElementById("cityName");
//console.log(cityName);
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer")

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == "") {
        city_name.innerText = "Please Write the Name Before U Search";
        datahide.classList.add(`data_hide`);
    } else {
        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a0c6536d69fbe96c7fab086847843fc8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            temp_status.innerText = arrdata[0].weather[0].main;

const tempstatus = arrdata[0].weather[0].main;

            if (tempstatus == "Sunny") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
            } else if (tempstatus == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            } else if (tempstatus == "Rainy") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#44c3de'></i>";
            }
            console.log(data);
            datahide.classList.remove(`data_hide`);
        } catch (error) {
            city_name.innerText = "Please Enter the City Name Properly..";
            datahide.classList.add(`data_hide`);
        }

    }
};

submitbtn.addEventListener('click', getInfo);


