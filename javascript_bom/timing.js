// setTimeout(function, ms)
// thực thi 1 tác vụ sau 1khoang thời gian
const timeoutID = setTimeout(
    function () {
        console.log(1)
    },
    3000
)
// setInterval(function,ms)
//lap di lap lai 1 tac vu sau 1 khoang thoi gian
const intervaLId = setInterval(
    function () {
        console.log(2)
    },
    1000
);