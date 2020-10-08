const dark = document.getElementById('dark');
const light = document.getElementById('light');
const purple = document.getElementById('purple');
const body = document.querySelector('body');
const left_nav = document.getElementById('left_nav');
const right_nav = document.getElementById('right_nav');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const page = document.getElementById('page');

// charts variables
let ctx_1 = document.getElementById('myChart_1').getContext('2d');
let ctx_2 = document.getElementById('myChart_2').getContext('2d');
let ctx_3 = document.getElementById('myChart_3').getContext('2d');
let ctx_4 = document.getElementById('myChart_4').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontsize = 18;
Chart.defaults.global.defaultFontColor = '#777';

// changing color for all
const change_all = (_L, _R, _class, _shadow) => {
    for (let i = 0; i < _L.children.length; i++) {
        _L.children[i].className = `${_class}`;
    }
    for (let i = 0; i < _R.children.length; i++) {
        _R.children[i].className = `${_class}`;
    }
    for (let i = 0; i < page.children.length; i++) {
        page.children[i].style.boxShadow = `${_shadow}`;
    }
}

const left_dark = () => {
    const shadow = '0px 5px 20px #f800ae';
    const color_class = "bg_dark";
    header.style.boxShadow = " 0px -5px 25px #f800ae";
    nav.style.background = "linear-gradient(145deg, #2e2e2eee, #373737ee)";
    body.style.background = "linear-gradient(145deg, #2e2e2e, #373737)";
    change_all(left_nav, right_nav, color_class, shadow);
}

const left_light = () => {
    const shadow = '0px 5px 20px #000000';
    header.style.boxShadow = "0px -5px 30px #000000";
    const color_class = "bg_light";
    nav.style.background = "linear-gradient(145deg, #dadadaee, #ffffffee)";
    body.style.background = "linear-gradient(145deg, #dadada, #ffffff) ";
    change_all(left_nav, right_nav, color_class, shadow);
}

const left_purple = () => {
    const shadow = '0px 5px 20px #000000';
    header.style.boxShadow = "0px -5px 25px #000000";
    const color_class = "bg_purple";
    nav.style.background = "linear-gradient(145deg, #8d5effee, #774fe5ee)";
    body.style.background = "linear-gradient(145deg, #8d5eff, #774fe5)";
    change_all(left_nav, right_nav, color_class, shadow);
}

function zoom_in() {
    body.classList.add('doit1');

    const doit = () => {
        setTimeout(() => {
            body.classList.remove('doit1');
        }, 1000);
    }
    doit();
}


dark.addEventListener('click', left_dark);
light.addEventListener('click', left_light);
purple.addEventListener('click', left_purple);
body.addEventListener('load', zoom_in());

// ===========================================================================
// =============                  M E H R A D                    =============
// ===========================================================================

let chart_1 = new Chart(ctx_1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: 'M E H R A D',
            // backgroundColor: [
            //     'rgb(0, 0, 0)',
            //     'rgb(255,40, 135)',
            //     'rgb(180, 100, 132)',
            //     'rgb(255, 80, 132)'
            // ],
            backgroundColor: '#f800ae',
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#37e',
            data: [6.00, 2.85, 3.30, 1, 0, 0, 0]
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 25
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255,40, 135)'
            },
        }
    }
});


// ===========================================================================
// =============                    D A R K                      =============
// ===========================================================================

let chart_2 = new Chart(ctx_2, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: 'A M I R',
            // backgroundColor: [
            //     'rgb(0, 0, 0)',
            //     'rgb(180, 100, 132)',
            //     'rgb(255,40, 135)',
            //     'rgb(255, 80, 132)'
            // ],
            backgroundColor: '#f800ae',
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#37e',
            data: [2.20, 2.80, 2.30, 5.20, 0, 0, 0]
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 25
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255,40, 135)'
            },
        },
    }
});

// ===========================================================================
// =============                    B A N J I                    =============
// ===========================================================================


let chart_3 = new Chart(ctx_3, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: 'B A N J I',
            // backgroundColor: [
            //     'rgb(0, 0, 0)',
            //     'rgb(255, 80, 132)',
            //     'rgb(255, 80, 132)',
            //     'rgb(255, 80, 132)',
            // ],
            backgroundColor: '#f800ae',
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#37e',
            data: [1, 1, 1, 1, 0, 0, 0]
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 25
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255,40, 135)'
            },
        }
    }
});

// ===========================================================================
// =============                     A L L                       =============
// ===========================================================================

let chart_4 = new Chart(ctx_4, {
    type: 'doughnut',
    data: {
        labels: ['amir', 'mehrad', 'banji'],
        datasets: [{
            label: 'compare',
            backgroundColor: [
                'rgb(255,40, 135)',
                'rgb(100, 40, 132)',
                'rgb(50,40, 135)'
            ],
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#37e',
            data: [7.30, 12.15, 3]
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 45,
            fontColor: '#fff'
        },
    }
});