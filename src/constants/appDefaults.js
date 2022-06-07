import moment from "moment";

export const parseJwt = (token) => {
    if (token !== undefined) {
        var base64Url = token.split(".")[1];
        if (base64Url !== undefined) {
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );

            return JSON.parse(jsonPayload);
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
};

export const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const isValidPassword = (pwd) => {
    const expression = /^(?=.*\d)(?=.*[!@#$%^&*;_~>])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;
    return expression.test(String(pwd));
};

export const createPageNumbersList = (pageBracketNumber, pagesPerBracket, maxPage) => {
    let numbers = [];
    for (let i = 0; i < pagesPerBracket; i++) {
        let num = i + pagesPerBracket * (pageBracketNumber - 1) + 1;
        if (num <= maxPage) {
            numbers.push(num);
        } else {
            break;
        }
    }
    return numbers;
};

export const millisToDate = (milliSeconds) => {
    const intMilliSeconds = parseInt(milliSeconds) || 0;
    const localeDateTime = new Date(intMilliSeconds);
    return localeDateTime
        .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/g, "$3-$2-$1");
};

export const dateToMillis = (date) => {
    return new Date(date).getTime() + new Date().getTimezoneOffset() * 60 * 1000;
    //return new Date(date).getTime() / 1000 + new Date().getTimezoneOffset() * 60;
};
